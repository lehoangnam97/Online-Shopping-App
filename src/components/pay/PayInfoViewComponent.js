import React, {Component} from 'react';
import {

    TextInput,
    View,
    StyleSheet,

} from 'react-native';


export default class PayInfoComponent extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <TextInput style={stylesPay.TextInputStyle1} numberOfLines={1} underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder=" Tên*">{this.props.userInfo.name}</TextInput>

                <TextInput style={stylesPay.TextInputStyle1} numberOfLines={1} underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder=" Số điện thoại*">{this.props.userInfo.phone}</TextInput>

                <TextInput style={stylesPay.TextInputStyle1} numberOfLines={1} underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder=" Email"/>

                <TextInput style={stylesPay.TextInputStyle1} numberOfLines={2} underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder=" Địa chỉ giao hàng*"/>

                <TextInput style={stylesPay.TextInputStyle1} numberOfLines={4} underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder=" Thông tin ghi chú*"/>
            </View>


        )
    }
}


 const stylesPay = StyleSheet.create({
    TextInputStyle1: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        borderRadius: 5,
        fontSize: 17,
        textAlignVertical: 'top',
        backgroundColor: '#ecf0f1',
    },
});