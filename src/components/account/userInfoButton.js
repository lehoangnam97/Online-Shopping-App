import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from "../styles";
import {FONT_SIZE} from "../../utils";


export default class UserInfoButton extends Component {
    render() {
        return (

            <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={this.props.onPress}>
                <View style={{
                    flexDirection: 'row',
                    flex: 4,
                    marginLeft: 20,
                    marginTop: 10,
                    marginBottom: 20
                }}>
                    <Icon name={this.props.icon} size={30} color="black"/>
                    <View style={{marginLeft: 10, justifyContent: 'center'}}>
                        <Text style={{
                            fontSize: FONT_SIZE,
                            color: 'black'
                        }}>{this.props.content}</Text>
                    </View>
                </View>
            </TouchableOpacity>

        )
    }
}