import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    ImageBackground,
    TouchableOpacity
} from 'react-native';

import {logout} from "../../redux/actionCreators";
import {connect} from "react-redux";
import firebase from 'react-native-firebase'
import {Avatar} from 'react-native-elements'
import {FBLoginManager} from 'react-native-facebook-login';
import {Icon} from 'react-native-elements';
import {createOpenLink} from "react-native-open-maps";
import styles from "../styles";
import {FONT_SIZE} from "../../utils";
import UserInfoButton from './userInfoButton'

class UserInfoView extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <View style={{flex: 1}}>

                <View style={{flex: 4}}>
                    <ImageBackground source={require('../../../resources/greensky.jpg')} style={{flex: 1}}>
                        <View style={{flex: 5, alignItems: 'center', justifyContent: 'center'}}>
                            <View style={{marginTop: 30, marginBottom: 10}}>
                                <Avatar large rounded source={{uri: this.props.currentUser.photoURL}}/>
                            </View>
                            <View style={{marginBottom: 30}}>
                                <Text style={{
                                    fontSize: 20,
                                    color: 'white',
                                    fontWeight: 'bold',
                                    textShadowOffset: {width: 2, height: 2}
                                }}>{this.props.currentUser.displayName}</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>

                <View style={{flex: 6}}>
                    <View style={{height: 80, width: null}}>
                        <UserInfoButton icon={"account-circle"} content={'Cập nhật thông tin'} />
                    </View>
                    <View style={{height: 80, width: null}}>
                        <UserInfoButton icon={"shopping-cart"} content={'Thay đổi đơn hàng'}/>
                    </View>

                    <View style={{height: 80, width: null}} >
                        <UserInfoButton icon={"keyboard-tab"} content={'Đăng xuất'}  onPress={() => {
                            FBLoginManager.logout(null)
                            firebase.auth().signOut().then(() => {
                                this.props.logout()
                            })
                        }}/>
                    </View>

                </View>

            </View>
        )
    }
}

function mapStateToProps(state) {
    return {currentUser: state.login.user}

}

export default connect(mapStateToProps, {logout})(UserInfoView);
