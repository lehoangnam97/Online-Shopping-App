import React, {Component} from 'react'
import ListViewProducts from './listViewProducts'

import {connect} from 'react-redux'

class ProductsView extends Component{
    static navigationOptions = {
        title: 'Sản phẩm'
    }
    render(){
        let products = [];
        this.props.categories.forEach(category=>{
            products.push(...category.products)
        })
        return(
            <ListViewProducts products={products}
                              enableEmptySections={true} />
        )
    }
}

function mapStateToProps(state){
    return {categories: state.categories.categories, articles: state.articles.articles, campaignImages: state.campaignImages.campaignImages}
}

export default connect(mapStateToProps)(ProductsView);