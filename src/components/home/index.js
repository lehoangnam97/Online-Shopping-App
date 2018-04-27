import React, {Component} from 'react';
import {
    View,
    ScrollView,
} from 'react-native';

import {connect} from 'react-redux'


import ArticlesListComponent from './articlesListComponent'
import CategoriesListComponent from './categoriesListComponent'
import FeaturedProductsListComponent from './featuredProductsListComponent'
import IndicatorViewPagerComponent from './indicatorViewPagerComponent'

class HomeView extends Component {
    static navigationOptions = {
        title: "Trang chủ"
    }
    render() {

        const {navigate} = this.props.navigation;

        let featuredProducts = this.props.categories.map((data, index) => {
            return (
                {
                    name: data.products[0].name,
                    image: data.products[0].colors[0].imageUri
                }
            )
        });
        console.log(this.props.campaignImages)
        return (
            <ScrollView style={{flex: 1}}>
                <View style={{height: 300, width: null}}>
                    <IndicatorViewPagerComponent imagesData={this.props.campaignImages}/>
                </View>
                <View style={{height: 380, width: null, marginTop: 20}}>
                    <ArticlesListComponent articlesData={this.props.articles} onPress={()=> navigate('Articles')}/>
                </View>

                <View style={{height: 380, width: null, marginTop: 20}}>
                    <CategoriesListComponent categoriesData={this.props.categories}/>
                </View>

                <View style={{height: 380, width: null, marginTop: 20}}>
                    <FeaturedProductsListComponent featuredProductsData={featuredProducts} onPress={()=> navigate('Products')}/>
                </View>

            </ScrollView>
        )
    }
}

function mapStateToProps(state){
    return {categories: state.categories.categories, articles: state.articles.articles, campaignImages: state.campaignImages.campaignImages}
}

export default connect(mapStateToProps)(HomeView);
