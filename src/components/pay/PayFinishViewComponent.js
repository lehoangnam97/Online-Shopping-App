import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import ListViewCart from './ListViewCart'
import {Icon} from 'react-native-elements'



export default class PayFinishComponent extends Component {

    render() {


        let total = 0;
        let discount = 0;
        this.props.cart.forEach(ProductType => {
            total += ProductType.product.price * ProductType.amount;
            discount += ProductType.product.discount * ProductType.amount;
        });

        return (
            <View style={{flex: 1}}>
                <Text style={{marginLeft: 20, fontSize: 17}}>Đặt đơn hàng thành công, chúng tôi sẽ liên hệt với bạn
                    trong vòng 24h làm việc</Text>
                <View style={stylesPay.BoardView}>

                    <View style={stylesPay.BoardHeaderView}>
                        <Icon name={'assignment-turned-in'} size={30} color="#2c3e50"/>
                        <Text style={{fontSize: 20, color: '#16a085'}}> HOÀN TẤT ĐƠN HÀNG</Text>
                    </View>
                    <View style={{backgroundColor: '#F8F7F5'}}>
                        <ListViewCart cart={this.props.cart}/>
                        <View style={{paddingRight: 20, marginTop: 10, marginBottom: 20}}>
                            <View style={stylesPay.TotalView}>
                                <Text>Giá tất sản phẩm: </Text>
                                <Text style={{color: '#16a085', fontSize: 20}}>{total} đ</Text>
                            </View>
                            <View style={stylesPay.TotalView}>
                                <Text>Giảm giá: </Text>
                                <Text style={{color: '#16a085', fontSize: 20}}>{discount} đ</Text>
                            </View>
                            <View style={[stylesPay.TotalView, {paddingTop: 5}]}>
                                <Text>Tổng cộng: </Text>
                                <Text style={{
                                    color: '#16a085', fontSize: 20,
                                    fontWeight: 'bold', borderTopColor: '#16a085', borderTopWidth: 1
                                }}>{total - discount} đ</Text>
                            </View>
                        </View>
                    </View>
                </View>


                <View style={stylesPay.BoardView}>
                    <View style={stylesPay.BoardHeaderView}>
                        <Icon name={'assignment-turned-in'} size={30} color="#2c3e50"/>
                        <Text style={{fontSize: 20, color: '#16a085'}}> THÔNG TIN ĐƠN HÀNG</Text>
                    </View>
                    <View style={{backgroundColor: '#F8F7F5', paddingLeft: 10}}>
                        <Text>Mã đơn hàng: {this.props.orderInfo.id}</Text>
                        <Text>Phương thức thanh toán: {this.props.orderInfo.payments}</Text>
                        <Text>Giá trị đơn hàng: {total - discount}</Text>
                    </View>
                </View>

                <View style={stylesPay.BoardView}>
                    <View style={stylesPay.BoardHeaderView}>
                        <Icon name={'assignment-ind'} size={30} color="#2c3e50"/>
                        <Text style={{fontSize: 20, color: '#16a085'}}> THÔNG TIN NGƯỜI MUA</Text>
                    </View>
                    <View style={{backgroundColor: '#F8F7F5', paddingLeft: 10}}>
                        <Text>Họ tên: {this.props.userInfo.name} </Text>
                        <Text>Mail: {this.props.userInfo.mail}</Text>
                        <Text>Số điện thoại: {this.props.userInfo.phone}</Text>
                        <Text>Địa chỉ giao hàng: {this.props.userInfo.address}</Text>
                    </View>
                </View>


            </View>
        )
    }
}


const stylesPay = StyleSheet.create({
    BoardHeaderView: {
        flexDirection: 'row',
        paddingTop: 8,
        paddingLeft: 8,
        paddingBottom: 8
    },

    TotalView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

    BoardView: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: '#ecf0f1',
        borderWidth: 1,
        borderColor: '#bdc3c7',
        paddingBottom: 2
    }

});


