import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native';

import styles from '../styles'

import {createOpenLink} from 'react-native-open-maps';

import {Icon} from 'react-native-elements'

import {FONT_SIZE} from '../../utils'

export default class LocationItem extends Component{
    render(){
        return(
            <View style={styles.Row}>
                <TouchableOpacity onPress={createOpenLink(this.props.location)}>
                    <View>
                        <View style={{flex: 3, marginTop:20, marginLeft:20}}>
                            <Text style={{fontSize: FONT_SIZE, color: '#01a699'}}>{this.props.locationTitle}</Text>
                        </View>
                        <View style={{flexDirection: 'row', flex: 4, marginLeft:20,marginTop:10, marginBottom:20}}>
                            <Icon name={'location-on'} size={30} color="black"/>
                            <View style={{marginLeft:10}}>
                                <Text style={{fontSize: FONT_SIZE, color: 'black'}}>{this.props.locationAddress}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}