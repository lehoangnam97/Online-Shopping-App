import React, {Component} from 'react';
import {
    View
} from 'react-native';


import Spinner from 'react-native-loading-spinner-overlay';
import styles from '../styles'
import LoginView from "./loginView";
import UserInfoView from './userInfoView'
import {connect} from 'react-redux'

class AccountView extends Component {
    static navigationOptions = {
        title: "Tài khoản"
    }

    constructor(props){
        super(props)
    }

    render(){
        if(this.props.currentUser !== null)
        {
            return <UserInfoView/>
        }
        else if(this.props.loading)
        {
            return (
                <View style={{ flex: 1 }}>
                    <LoginView/>
                    <Spinner visible={true} textContent={"Logging in..."} animation={'fade'} textStyle={{color: '#FFF'}}/>
                </View>
            )
        }
        else
        {
            return (
                <LoginView/>
            )
        }
    }
}

function mapStateToProps(state){
    return {currentUser: state.login.user, loading: state.login.loggingIn}
}

export default connect(mapStateToProps)(AccountView);


