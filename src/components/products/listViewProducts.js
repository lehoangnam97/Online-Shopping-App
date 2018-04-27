import React, {Component} from 'react'
import {
    ListView,
    Text,
    TouchableOpacity,
    View,
    Image,
    StyleSheet,
    PixelRatio,
} from 'react-native'

import {Icon} from 'react-native-elements'

const FONT_SIZE = 45 / Math.pow(2, PixelRatio.get() - 1);


export default class ListViewProducts extends Component {
    renderRow(rowData) {
        return (
            <View style={stylesProducts.RowBoundingView}>

                <View style={stylesProducts.TouchableContentView}>
                    <View style={stylesProducts.Image}>
                    <TouchableOpacity style={{flex:1 }}>

                        <Image
                            style={{width:null, height:null, resizeMode:'cover', flex:1}}
                            source={{uri: (rowData.colors[0]).imageUri}}/>
                    </TouchableOpacity>
                    </View>

                    <View
                        style={stylesProducts.ProductNameView}>
                        <Text numberOfLines={1} allowFontScaling={true} adjustsFontSizeToFit={true}
                              style={stylesProducts.ProductName}>{rowData.name} </Text>
                    </View>


                    <View
                        style={stylesProducts.ProductPriceView}>
                        <Text numberOfLines={1} allowFontScaling={true} adjustsFontSizeToFit={true}
                              style={stylesProducts.ProductPrice}>{rowData.price} đ </Text>
                    </View>
                    <TouchableOpacity style={{borderRadius: 10, height: '10%'}}>
                        <View style={[stylesProducts.ProductDescriptionView, {
                            borderRadius: 5,
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }]}>
                            <Icon name={"shopping-cart"} color={"white"} size={20} style={{alignSelf: 'left'}}/>
                            <Text style={{color: 'black', fontSize: 15}}
                                  numberOfLines={2} allowFontScaling={true} adjustsFontSizeToFit={true}
                            > + Giỏ hàng</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>

        );
    }

    render() {
        if (this.props.products.length === 0) {
            return (
                <View style={stylesProducts.List}/>
            )
        }

        return (
            <View style={stylesProducts.List}>
                <ListView
                    style={stylesProducts.List}
                    contentContainerStyle={stylesProducts.ContentContainer}
                    dataSource={(new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id})).cloneWithRows(this.props.products)}
                    renderRow={this.renderRow.bind(this)}>
                </ListView>
            </View>
        );
    }
}


const stylesProducts = StyleSheet.create({
    List: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        padding: 3
    },
    ContentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    RowBoundingView: {
        width: '47%',
        aspectRatio: 0.6,
        backgroundColor: 'white',
        margin: 3,
        borderBottomColor: "#EFEFEF",
        borderBottomWidth: 5,
        borderLeftColor: "#EFEFEF",
        borderLeftWidth: 4,
        borderRadius: 10
    },
    Image: {
        borderRadius: 5,
        width: '100%',
        height: '60%'
    },
    TouchableContentView: {
        width: '100%',
        height: '100%',
        alignContent: 'center'
    },

    ProductNameView: {
        width: '100%',
        height: '15%',
        marginTop: 5
    },
    ProductPriceView: {
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 3
    },
    ProductDescriptionView: {
        alignSelf: 'center',
        width: '90%',
        height: null,
        paddingTop: 3,
        paddingBottom: 3,
        backgroundColor: '#16a085',

    },

    ProductName: {
        textAlign: "center",
        color: 'black',
        textDecorationStyle: 'dashed',
        fontFamily: 'Verdana',
        fontSize: FONT_SIZE + 5,
    },
    ProductPrice: {
        textAlign: "right",
        color: '#16a085',
        fontSize: FONT_SIZE + 5
    },
    ProductDescription: {
        textAlign: "center",
        fontSize: FONT_SIZE
    }
});
