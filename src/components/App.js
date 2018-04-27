import React, {Component} from 'react'
import {StackNavigator} from 'react-navigation'
import MainView from './main'
import LocationView from './location'
import AccountView from './account'
import HomeView from './home'
import ChatView from './chat'
import ArticlesView from './articles'
import SalesView from './sales'
import ChangeInfoView from './account/changeInfo'
import ProductsView from './products'


import {connect} from 'react-redux'
import {login, updateCategories, updateArticles, updateSales, updateCampaignImages, updateShops} from '../redux/actionCreators'
import firebase from 'react-native-firebase'

const MainScreenNavigator = StackNavigator({
    Main: {screen: MainView},
    Location: {screen:LocationView},
    Account: {screen:AccountView},
    Home: {screen:HomeView},
    Chat:{screen:ChatView},
    Articles: {screen:ArticlesView},
    Sales: {screen:SalesView},
    ChangeInfo: {screen: ChangeInfoView},
    Products: {screen:ProductsView}
})

class App extends Component{
    constructor(props) {
        super(props)
        firebase.auth().onAuthStateChanged(user => {
            console.log("Auth state changed")
            if (user) {
                this.props.login(firebase.auth().currentUser)
                this.messagesRef = firebase.database().ref('chat/' + firebase.auth().currentUser.uid)
                this.messagesRef.on('child_added', (snapshot)=>{
                    console.log(snapshot)
                })
            }
            else if(this.messagesRef !== null && this.messagesRef !== undefined) {
                this.messagesRef.off()
            }
        })
        this.categoriesRef = firebase.firestore().collection('categories');
        this.articlesRef = firebase.firestore().collection('articles');
        this.salesRef = firebase.firestore().collection('sales');
        this.campaignImagesRef = firebase.firestore().collection('campaignImages')
        this.shopRef = firebase.firestore().collection('shops')

        this.categoriesRef.onSnapshot((doc)=>{
            this.getCategories()
        })

        this.articlesRef.onSnapshot((doc)=>{
            this.getArticles()
        })

        this.salesRef.onSnapshot((doc)=>{
            this.getSales()
        })

        this.campaignImagesRef.onSnapshot((doc)=>{
            this.getCampaignImages()
        })

        this.shopRef.onSnapshot((doc)=>{
            this.getShops()
        })
    }



    async componentDidMount()
    {
        this.getCategories()
        this.getArticles()
        this.getSales()
        this.getCampaignImages()
        this.getShops()
    }

    async getArticles(){
        let articles = []
        let articlesRef = await this.articlesRef.get()
        articlesRef.forEach(articleRef => {
            articles.push({
                title: articleRef.data().title,
                image: articleRef.data().image,
                raw: articleRef.data().raw,
                time: articleRef.data().time,
                html: articleRef.data().html
            })
        })
        this.props.updateArticles(articles)
    }

    async getShops(){
        let shops = []
        let shopsRef = await this.shopRef.get()
        shopsRef.forEach(shopRef=>{
            shops.push({
                location: shopRef.data().location,
                locationAddress: shopRef.data().locationAddress,
                locationTitle: shopRef.data().locationTitle
            })
        })
        this.props.updateShops(shops)
    }

    async getCampaignImages(){
        let campaignImages = []
        let campaignImagesRef = await this.campaignImagesRef.get()
        campaignImagesRef.forEach(campaignImageRef => {
            campaignImages.push({
                image: campaignImageRef.data().image
            })
        })
        this.props.updateCampaignImages(campaignImages)
    }

    async getSales(){
        let sales = []
        let salesRef = await this.salesRef.get()
        salesRef.forEach(saleRef => {
            sales.push({
                title: saleRef.data().title,
                image: saleRef.data().image,
                raw: saleRef.data().raw,
                time: saleRef.data().time,
                html: saleRef.data().html
            })
        })
        this.props.updateSales(sales)
    }

    async getCategories(){
        let categories = []
        let categoriesRef = await this.categoriesRef.get()
        await this.asyncForEach(categoriesRef, async (category) => {
            let products = []
            let productsRef = await this.categoriesRef.doc(category.id).collection("products").get()

            await this.asyncForEach(productsRef, async (product)=>{
                let colors = []
                let colorsRef = await this.categoriesRef.doc(category.id).collection("products").doc(product.id).collection("colors").get()

                await this.asyncForEach(colorsRef, async (color)=>{
                    colors.push(color.data())
                })
                products.push({
                    description: product.data().description,
                    id: product.data().id,
                    name: product.data().name,
                    price: product.data().price,
                    size: product.data().size,
                    colors: colors
                })
            })
            categories.push({
                name: category.data().name,
                image: category.data().image,
                products: products
            })
        })
        this.props.updateCategories(categories)
    }

    async asyncForEach(array, callback) {
        let tmpArray = []
        array.forEach(item=>{
            tmpArray.push(item)
        })
        for(let i = 0; i < tmpArray.length; ++i)
        {
            await callback(tmpArray[i])
        }
    }


    render(){
        return(
            <MainScreenNavigator/>
        )
    }
}

export default connect(null, {
    login, updateCategories, updateArticles, updateSales, updateCampaignImages, updateShops
})(App);