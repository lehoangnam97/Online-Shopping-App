import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';

import {FBLogin, FBLoginManager} from 'react-native-facebook-login';
import firebase from 'react-native-firebase'
import FBLoginView from './fBLoginView'

import {login, logout, loggingIn} from '../../redux/actionCreators'

import {connect} from 'react-redux'

class LoginView extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{marginTop: 100}}>
                <View>
                    <Text style={{fontSize: 20, color: 'red', textAlign: 'center'}}>Vui lòng đăng nhập</Text>
                    <Text style={{fontSize: 20, color: 'red', textAlign: 'center'}}>để sử dụng các tính năng...</Text>
                </View>
                <View style={ { justifyContent: 'center', marginTop: 80}}>
                    <FBLogin style={{flex: 1}}
                             buttonView={<FBLoginView/>}
                             ref={(fbLogin) => {
                                 this.fbLogin = fbLogin
                             }}
                             loginBehavior={FBLoginManager.LoginBehaviors.Native}
                             permissions={['public_profile']}
                             onLogin={(data) => {
                                 let token = firebase.auth.FacebookAuthProvider.credential(data.credentials.token)
                                 this.props.loggingIn()
                                 firebase.auth().signInWithCredential(token).then((user) => {
                                     this.props.login(firebase.auth().currentUser)
                                 })
                             }}
                             onLoginFound={(data) => {
                                 let token = firebase.auth.FacebookAuthProvider.credential(data.credentials.token)
                                 this.props.loggingIn()
                                 firebase.auth().signInWithCredential(token).then((user) => {
                                     this.props.login(firebase.auth().currentUser)
                                 })
                             }}
                             onError={(e) => {
                                 console.log(e)
                             }}
                             onLoginNotFound={function (e) {
                                 console.log(e)
                             }}
                             onLogout={function (e) {
                                 console.log(e)
                                 this.props.logout()
                             }}
                             onCancel={function (e) {
                                 console.log(e)
                             }}
                             onPermissionsMissing={function (e) {
                                 console.log(e)
                             }}
                    />
                </View>
            </View>
        )
    }
}


export default connect(null, {
    login, logout, loggingIn
})(LoginView);
