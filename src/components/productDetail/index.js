import React, {Component} from "react"
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    ImageBackground,
    PixelRatio,
    TouchableOpacity
} from 'react-native'
import OrderComponent from './OrderComponent.js'
import {Icon} from 'react-native-elements'
import {calculatePrice, FONT_SIZE} from '../../utils'


import Accordion from 'react-native-collapsible/Accordion';
import {Pages} from 'react-native-pages';
import CommentComponent from "./CommentComponent";
import SimilarProductsListComponent from "./similarProductsListComponent";


export default class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalCount: 0,
            totalDiscount: 0,
            totalPrice: 0,
            totalPay: 0,
            commission: 0,
        }
    }

    _renderProductImages = (value) => {
        return value.map(function (color, i) {
            return (
                <View key={i} style={{flex: 1}}>
                    <ImageBackground style={{flex: 1}} source={{uri: color.imageUri}}/>
                    <Text style={{textAlign: 'center', paddingBottom: 20}}>Màu {color.name}</Text>
                </View>
            );
        });
    };


    _renderDiscountInfo = (value) => {
        if (value.length === 0)
            return;
        if (value.length === 1)
            return (
                <View>
                    <Text>số lượng từ {value[0].min} trở lên : {(1 - value[0].discount) * 100}% </Text>
                </View>
            );
        return value.map(function (oneDiscount, i) {
            return (
                <View key={i} style={{flex: 1}}>
                    <Text>số lượng
                        từ {(i + 1 < value.length) ? (value[i].min + " đến " + value[i + 1].min) : (value[i].min + " trở lên ")} : {Math.round((1 - oneDiscount.discount) * 1000) / 10}%
                        giá bán</Text>
                </View>
            )
        })
    };


    _renderHeader = (section, index, isActive) => {
        return (
            <View style={{
                backgroundColor: '#16a085', padding: 10, borderTopLeftRadius: 15, borderTopRightRadius: 15,
                borderBottomEndRadius: 5, borderBottomStartRadius: 5,
                justifyContent: 'space-between', flexDirection: 'row'
            }}>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 22}}>{section}</Text>
                <Icon name={isActive ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={35} color="white"/>
            </View>
        );
    };

    _renderHeaderComment = (section, index, isActive) => {
        return (
            <View style={{
                backgroundColor: '#16a085', padding: 10, borderTopLeftRadius: 15, borderTopRightRadius: 15,
                borderBottomEndRadius: 5, borderBottomStartRadius: 5,
                justifyContent: 'space-between', flexDirection: 'row'
            }}>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 22}}>Bình luận
                    ({this.props.comments.length})</Text>
                <Icon name={isActive ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={35} color="white"/>
            </View>
        );
    };


    _renderContentSimilarProducts = () => {
        return (
            <View style={{
                borderLeftWidth: 1, borderRightWidth: 1, padding: 10,
                borderLeftColor: '#95a5a6', borderRightColor: '#95a5a6',
                borderBottomWidth: 1, borderBottomColor: '#95a5a6',
                borderBottomEndRadius: 15, borderBottomStartRadius: 15
            }}>
                <SimilarProductsListComponent similarProducts={this.props.similarProducts}/>
            </View>
        )
    };

    _renderContentInfo = () => {
        let allSize = [];
        this.props.selectedProduct.colors.map((oneColor) => {
            oneColor.size.map((oneSize) => {
                if (allSize.indexOf(oneSize) === -1) {
                    allSize.push(oneSize)
                }
            })
        });
        let allColors = [];
        allColors = this.props.selectedProduct.colors.map((oneColor) => {
            return oneColor.name;
        });


        return (
            <View style={{
                borderLeftWidth: 1, borderRightWidth: 1, padding: 10,
                borderLeftColor: '#95a5a6', borderRightColor: '#95a5a6',
                borderBottomWidth: 1, borderBottomColor: '#95a5a6',
                borderBottomEndRadius: 15, borderBottomStartRadius: 15
            }}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 25, fontWeight: 'bold'}}>Giá bán : </Text>
                    <Text style={{fontSize: 25}}>{this.props.selectedProduct.listedPrice} d</Text>
                </View>


                <Text style={{fontSize: 15, fontWeight: 'bold', paddingTop: 10,}}>Chiết khấu mua sỉ : </Text>
                <View style={{paddingLeft: 10}}>
                    {this._renderDiscountInfo(this.props.selectedProduct.price)}
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{paddingTop: 10, fontSize: 15, fontWeight: 'bold'}}>Màu : </Text>
                    <Text style={{paddingTop: 10, fontSize: 15}}>{allColors.toString()}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{paddingTop: 10, fontSize: 15, fontWeight: 'bold'}}>Size : </Text>
                    <Text style={{paddingTop: 10, fontSize: 15}}>{allSize.toString()}</Text>
                </View>
                <Text style={{paddingTop: 10, fontSize: 15, fontWeight: 'bold'}}>Mô tả sản phẩm : </Text>
                <Text style={{paddingLeft: 10, fontSize: 15}}>{this.props.selectedProduct.description}</Text>
            </View>
        );
    };

    _renderContentOrder = () => {
        return (
            <View style={{
                borderLeftWidth: 1, borderRightWidth: 1, padding: 10,
                borderLeftColor: '#95a5a6', borderRightColor: '#95a5a6',
            }}>
                <OrderComponent colors={this.props.selectedProduct.colors} onTotalCountChange={(totalCount) => {
                    let minDiscount = 1;
                    let totalDiscount = 0;

                    for (let i = this.props.selectedProduct.price.length - 1; i >= 0; i--) {
                        if (totalCount > this.props.selectedProduct.price[i].min) {
                            minDiscount = this.props.selectedProduct.price[i].discount;
                            break;
                        }
                    }
                    let totalPrice = totalCount * this.props.selectedProduct.listedPrice;
                    let totalPay = totalCount * this.props.selectedProduct.listedPrice * minDiscount;
                    totalDiscount = totalPrice - totalPay;
                    let commission = Math.round((1 - minDiscount) * 1000) / 10
                    this.setState({
                        totalCount: totalCount,
                        totalDiscount: totalDiscount,
                        totalPrice: totalPrice,
                        totalPay: totalPay,
                        commission: commission
                    });
                }}/>

            </View>
        );
    };

    _renderContentComment = () => {
        return (
            <View style={{
                flexGrow: 1,
                borderLeftWidth: 1, borderRightWidth: 1, padding: 10,
                borderLeftColor: '#95a5a6', borderRightColor: '#95a5a6',

            }}>
                <CommentComponent currentUser={this.props.currentUser} comments={this.props.comments}/>
            </View>
        )
    };


    render() {

        return (
            <View style={{flex: 1}}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <Text style={{
                        fontWeight: 'bold', fontSize: 23, textAlign: 'center', paddingBottom: 10
                    }}>{this.props.selectedProduct.name}</Text>

                    <View style={{width: '95%', aspectRatio: 1, alignSelf: 'center'}}>
                        <Pages style={{flex: 1}} indicatorColor={'#16a085'}>
                            {this._renderProductImages(this.props.selectedProduct.colors)}
                        </Pages>
                    </View>


                    <View style={{margin: 10}}>
                        <Accordion
                            sections={["Thông tin sản phẩm"]}
                            renderHeader={this._renderHeader}
                            renderContent={this._renderContentInfo}
                            initiallyActiveSection={0}
                        />
                    </View>


                    <View style={{margin: 10}}>
                        <Accordion
                            sections={["Đặt hàng"]}
                            renderHeader={this._renderHeader}
                            renderContent={this._renderContentOrder}
                            initiallyActiveSection={0}
                        />
                        <View style={{
                            borderColor: '#95a5a6', borderWidth: 1,
                            borderBottomEndRadius: 15, borderBottomStartRadius: 15, paddingRight: 15
                        }}>
                            <View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                                <Text style={{fontSize: 20}}>Tổng số lượng : </Text>
                                <Text style={{fontSize: 25, color: '#16a085'}}>{this.state.totalCount}</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                                <Text style={{fontSize: 20}}>Tổng tiền : </Text>
                                <Text style={{fontSize: 25, color: '#16a085'}}>{this.state.totalPrice}d</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                                <Text style={{fontSize: 20}}>Chiết khấu : </Text>
                                <Text style={{fontSize: 25, color: '#16a085'}}>{this.state.commission}%</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center',

                            }}>
                                <Text style={{fontSize: 20}}>=> Giảm giá : </Text>
                                <Text style={{
                                    fontSize: 25,
                                    marginTop: 5, borderTopWidth: 1, borderTopColor: '#16a085',
                                    color: '#16a085'
                                }}>{this.state.totalDiscount}d</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center',}}>
                                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Tổng thanh toán : </Text>
                                <Text style={{
                                    fontSize: 25, color: '#16a085', fontWeight: 'bold', marginTop: 5,
                                    borderTopWidth: 1, borderTopColor: '#16a085'
                                }}>{this.state.totalPay}d</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{margin: 10}}>
                        <Accordion
                            sections={["Sản phẩm tương tự"]}
                            renderHeader={this._renderHeader.bind(this)}
                            renderContent={this._renderContentSimilarProducts.bind(this)}
                            initiallyActiveSection={0}
                        />
                    </View>


                    <View style={{margin: 10}}>
                        <Accordion
                            sections={["Bình luận"]}
                            renderHeader={this._renderHeaderComment.bind(this)}
                            renderContent={this._renderContentComment.bind(this)}
                        />
                    </View>
                </ScrollView>
                <View style={{
                    flexDirection: 'row', height: 80, backgroundColor: '#16a085',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingLeft: 50,
                    paddingRight: 50,
                }}>
                    <TouchableOpacity>
                        <Icon name={'lock'} size={35} color="white"/>
                        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>Đặt hàng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name={'add-shopping-cart'} size={35} color="white"/>
                        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>Giỏ hàng</Text>
                    </TouchableOpacity>
                </View>

            </View>

        )
    }
}
 