import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    PixelRatio,
    ScrollView,
    ImageBackground
} from 'react-native';

import CircularButton from './circularButton'

import styles from '../styles'

export default class MainView extends Component{
    static navigationOptions = {
        header: null
    }

    constructor(props)
    {
        super(props)
    }

    render(){
        const {navigate} = this.props.navigation;

        return(
            <ImageBackground source={require('../../../resources/HomeScreen.jpg')} style={{flex:1}}>
                <ScrollView style={styles.ScrollViewStyle}>
                    <View style={styles.SpacingViewStyle}/>
                    <View style={styles.ContainerStyle}>
                        <CircularButton content={"Trang chủ"} icon={"home"} onPress={()=> navigate('Home')}/>
                        <CircularButton content={"Sản phẩm"} icon={"shop"} onPress={()=> navigate('Products')}/>
                    </View>

                    <View style={styles.SpacingViewStyle}/>
                    <View style={styles.ContainerStyle}>
                        <CircularButton content={"Khuyến mãi"} icon={"new-releases"} onPress={()=> navigate('Sales')}/>
                        <CircularButton content={"Tin tức"} icon={"description"} onPress={()=> navigate('Articles')}/>
                    </View>

                    <View style={styles.SpacingViewStyle}/>
                    <View style={styles.ContainerStyle}>
                        <CircularButton content={"Chat"} icon={"chat"} onPress={()=> navigate('Chat')}/>
                        <CircularButton content={"Chi nhánh"} icon={"location-on"} onPress={()=> navigate('Location')}/>
                    </View>

                    <View style={styles.SpacingViewStyle}/>
                    <View style={styles.ContainerStyle}>
                        <CircularButton content={"Tài khoản"} icon={"account-circle"} onPress={()=>navigate('Account')}/>
                    </View>
                </ScrollView>
            </ImageBackground>
        )
    }
}