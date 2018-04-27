import React, {Component} from 'react';
import {WebView} from 'react-native'

export default class DetailedView extends Component { 
    render() {
        return (
             <WebView style={{flex:1, marginTop:20}}
               source={{uri:this.props.html}}
             />
        )
    }
}