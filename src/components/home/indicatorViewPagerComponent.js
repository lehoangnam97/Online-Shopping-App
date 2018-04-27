import React, {Component} from 'react';
import {
    View,
    ImageBackground,
} from 'react-native';

import {Pages} from 'react-native-pages';

export default class IndicatorViewPagerComponent extends Component {
    WholeTitleImage() {
        return this.props.imagesData.map(function (images, i) {
            return (
                <View key={i} style={{flex: 1, backgroundColor: 'black'}}>
                    <ImageBackground style={{flex: 1}} source={{uri: images.image}}/>
                </View>
            );
        });
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Pages style={{flex: 1}}>
                    {this.WholeTitleImage(this.props.imagesData)}
                </Pages>
            </View>
        )
    }
}
