import { TextInput, View, TouchableOpacity,} from "react-native";
import React, {Component} from "react";



import {Icon} from 'react-native-elements'

export default class NumericInputComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 0
        }
    }

    render() {
        return (
            <View style={{
                flexDirection: 'row', width: 120, height: 60, justifyContent: 'center'
            }}>
                <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}}
                                  onPress={() => {
                                      let value = this.state.number > 0 ? this.state.number - 1 : 0
                                      this.setState({number: value})
                                      this.props.onValueChange(value)
                                  }}>
                    <Icon name={'indeterminate-check-box'} size={35} color="#95a5a6"/>
                </TouchableOpacity>

                <TextInput style={{textAlign: 'center', fontSize: 20, width: 50}}
                           keyboardType='numeric'
                           onChangeText={(text) => {
                               let value = isNaN(parseInt(text)) ? 0 : parseInt(text)
                               this.setState({number: value})
                               this.props.onValueChange(value)
                           }}
                           value={this.state.number.toString()}/>


                <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}}
                                  onPress={() => {
                                      let value = this.state.number + 1
                                      this.setState({number: value})
                                      this.props.onValueChange(value)
                                  }}>
                    <Icon name={'add-box'} size={35} color="#95a5a6"/>
                </TouchableOpacity>

            </View>
        )
    };
}
