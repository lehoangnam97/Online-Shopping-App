import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    PixelRatio,
    ScrollView,
} from 'react-native';
import PushNotification from 'react-native-push-notification'
import Icon from 'react-native-elements'



export default class NotificationComponent extends Component {

    showNotice() {
        PushNotification.localNotification({
            autoCancel: true,
            largeIcon: "location_on",
            bigText: "My big text that will be shown when notification is expanded",

            subText: "Dòng tin thêm", // (optional) default: none
            title:"Có tin m",
            message: "Tin được gửi", // (required)
        });

    }

    cancelNotice(){
        PushNotification.cancelLocalNotifications({id: 'appbanhang'});
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center'}}
                                  onPress={this.showNotice.bind(this)}>
                    <Text style={{fontSize: 30, color:'red',fontWeight:'bold'}}> Nhấn cái nút này để hiện notification </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center'}}
                                  onPress={this.cancelNotice.bind(this)}>
                    <Text style={{fontSize: 30, color:'red',fontWeight:'bold'}}> Nhấn cái nút này để tắt notification </Text>
                </TouchableOpacity>

            </View>
        )
    };
}

