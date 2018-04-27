import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import {SocialIcon} from 'react-native-elements'

export default class FBLoginView extends Component {
    static contextTypes = {
        isLoggedIn: PropTypes.bool,
        login: PropTypes.func,
        logout: PropTypes.func,
        props: PropTypes.shape({})
    };

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <View style={{backgroundColor:'transparent', paddingHorizontal:70,  marginBottom:250}}>
                <SocialIcon

                              light
                              button
                              type='facebook'
                              onPress={() => {
                    if(!this.context.isLoggedIn){
                        this.context.login()
                    }
                }}>
                </SocialIcon>
            </View>
        )
    }
}
