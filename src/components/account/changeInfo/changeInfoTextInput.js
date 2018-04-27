import React, {Component} from 'react';
import {
    View,
    Text,

    Button,
    ImageBackground,
    TouchableOpacity,
    TextInput
} from 'react-native';

import styles from "../../styles";
import {FONT_SIZE} from "../../../utils";

export default class ChangeInfoTextInput extends Component {
    render() {
        return (

            <View style={{flex: 1, justifyContent: 'center'}}>
                <View style={{
                    flexDirection: 'row',
                    flex: 4,
                    marginLeft: 20,
                }}>
                    <Icon name={this.props.icon} size={30} color="#7f8c8d"/>
                    <View style={{marginLeft: 10, justifyContent: 'center'}}>
                        <TextInput

                            placeholder={this.props.hint}
                            style={{
                                width: 500,
                                fontSize: FONT_SIZE,
                                color: 'black'
                            }}

                        >{this.props.content}</TextInput>
                    </View>
                </View>
            </View>

        )
    }
}