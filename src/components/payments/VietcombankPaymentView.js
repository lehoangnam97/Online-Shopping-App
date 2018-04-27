import React, {Component} from 'react'
import {WebView, View, Text} from "react-native";
import {vietcombankPaymentInfo} from'./paymentInfos'

export default class VietcombankPaymentView extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={{flex:1}}>
                <WebView style={{flex:1}} source={{uri: 'https://www.vietcombank.com.vn/IBanking2015/55c3c0a782b739e063efa9d5985e2ab4/Account/Login'}}/>
                <Text style={{flex:1}}>{vietcombankPaymentInfo}</Text>
            </View>
        )
    }
}