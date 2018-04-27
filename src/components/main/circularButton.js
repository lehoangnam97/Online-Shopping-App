import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    PixelRatio,
    ScrollView,
} from 'react-native';

import {Icon} from 'react-native-elements'

export default class CircularButton extends Component {
    constructor(props) {
        super(props)
    };

    render() {
        return (
            <TouchableOpacity style={styles.TouchableStyle} onPress={this.props.onPress}>
                <View style={{flex: 7, alignItems: 'center', justifyContent: 'center'}}>
                    <Icon name={this.props.icon} size={70} color="#01a699"/>
                </View>
                <View style={{flex: 3}}>
                    <Text style={styles.ContentStyle} allowFontScaling={true} adjustsFontSizeToFit={true}> {this.props.content}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}