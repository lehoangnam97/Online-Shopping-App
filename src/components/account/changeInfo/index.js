import React, {Component} from 'react';
import {
    View,
    Text,

    Button,
    ImageBackground,
    TouchableOpacity,
    TextInput
} from 'react-native';

import {logout} from "../../../redux/actionCreators";
import {connect} from "react-redux";
import firebase from 'react-native-firebase'

import Avatar from 'react-native-interactive-avatar';
import {Icon} from 'react-native-elements';
import styles from "../../styles";
import {FONT_SIZE} from "../../../utils";
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

import ChangeInfoTextInput from './changeInfoTextInput'


export default class ChangeInfoView extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
    }
    handleImageChange = (response) => {
        // Do something

        // response looks like : {
        //      data: "data:image/jpeg;base64,/9j/4AAQSkZJRg...", // Base64
        //      fileSize: 474486,
        //      height: 531,
        //      isVertical: false,
        //      origURL: "assets-library://asset/asset.JPG?id=106E99A1-4F6A-45A2-B320-B0AD4A8E8473&ext=JPG",
        //      uri: "file:///...",
        //      width: 800,
        // }
    };

    render() {
        //console.log(this.props.currentUser.photoURL)
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 25}}>
                    <View style={{flex: 5, alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{marginTop: 30, marginBottom: 10}}>
                            <Avatar  uri={'https://media2.giphy.com/media/sbLpwwHlgls8E/giphy.gif'}  size={'default'}  interactive
                                     onChange={this.handleImageChange}
                            />
                        </View>
                        <View style={{marginBottom: 30}}>
                            <Text style={{
                                fontSize: 20,
                                color: '#2c3e50',
                                fontWeight: 'bold',
                                textShadowOffset: {width: 2, height: 2}
                            }}>Le Hoang Nam</Text>
                        </View>
                    </View>
                </View>

                <View style={{flex: 75}}>
                    <View style={{height: 65, width: null}}>
                        <ChangeInfoTextInput icon={"account-circle"} hint={'Số điện thoại....'}/>
                    </View>
                    <View style={{height: 65, width: null}}>
                        <ChangeInfoTextInput icon={"phone"} hint={'Tên.....'}/>
                    </View>
                    <View style={{height: 65, width: null}}>
                        <ChangeInfoTextInput icon={"my-location"} hint={'Địa chỉ....'}/>
                    </View>
                    <View style={{height: 65, width: null}}>
                        <ChangeInfoTextInput icon={"mail"} hint={'Mail....'}/>
                    </View>
                    <View style={{marginTop: 20, marginLeft: 20, marginBottom: 20}}>
                        <Text>Giới tính</Text>

                        <RadioGroup style={{height: null, width: null, flexDirection: 'row', marginTop: 0, height: 65}}
                                    onSelect={(index, value) => {
                                    }}>
                            <RadioButton value={'item1'} style={{
                                flex: 5,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: 50,
                                marginLeft: 50
                            }}>
                                <Text>Nam</Text>
                            </RadioButton>
                            <RadioButton value={'item2'}
                                         style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
                                <Text>Nữ</Text>
                            </RadioButton>
                        </RadioGroup>
                    </View>

                    <Button title={"Lưu thông tin"} color={"#1abc9c"}>
                    </Button>
                </View>

            </View>
        )
    }


}

