import React, {Component} from 'react';
import {View, Text} from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat';

import {connect} from 'react-redux'

import firebase from 'react-native-firebase'

class ChatView extends Component {
    static navigationOptions = {
        title: "Chat"
    }
    state = {
        messages: [],
    };

    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Chúng tôi có thể giúp gì cho bạn',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'Chat AI',
                        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdcfC7cIMTTeEjeoVZkM7N5f7WDe3i8ojzARqZnDo_4r82WsZv',
                    },
                },
            ],
        });
    }

    onSend(messages = []) {
        messages.forEach(message=>{
            firebase.database().ref('chat/' + this.props.currentUser.uid).set(message)
        })
        this.setState((previousState) => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }));
    }

    render() {
        if(this.props.currentUser === null)
        {
            return(
                    <View style={{marginTop: 100}}>
                        <Text style={{fontSize: 20, color: 'red', textAlign: 'center'}}>Vui lòng đăng nhập</Text>
                        <Text style={{fontSize: 20, color: 'red', textAlign: 'center'}}>sử dụng tính năng này</Text>
                    </View>
            )
        }
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={(messages) => this.onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        );
    }
}

function mapStateToProps(state){
    return {currentUser: state.login.user}
}

export default connect(mapStateToProps)(ChatView);