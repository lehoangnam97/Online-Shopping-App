import React, {Component} from 'react';

import {
    ListView,
    Text,
    TouchableOpacity,
    View,
    Image,
    StyleSheet,
    TextInput,
    PixelRatio,
    Button
} from 'react-native'
import {Avatar} from 'react-native-elements'

class TextInputComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ""
        };
    }

    render() {
        return (
            <View style={stylesTextInputComment.View}>
                <View style={{
                    width: 20, alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Avatar rounded small style={stylesTextInputComment.Image}
                            source={{uri: this.props.currentUser.photoURL}}/>
                </View>
                <View style={{width: 200, paddingLeft: 10}}>
                    <TextInput
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Thêm bình luận..."
                        multiline={true}
                        numberOfLines={2}
                        style={stylesTextInputComment.TextInput}
                        value={this.state.comment}
                        blurOnSubmit={false}
                        onChangeText={(comment) => this.setState({comment: comment})}
                    />

                </View>
                <View style={stylesTextInputComment.ButtonSendView}>
                    <TouchableOpacity>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Image style={{width: 40, height: 40}} source={require('../../../resources/send.png')}/>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

class ListViewComment extends Component {


    renderRow(rowData) {
        return (
            <View style={stylesListComment.Row}>
                <View>
                    <Avatar rounded small style={stylesListComment.Image} source={{uri: rowData.avatar}}/>
                </View>

                <View style={{

                    marginLeft: 10,
                    borderRadius: 20,
                    backgroundColor: '#FFFFFF',
                    paddingLeft: 5,
                    paddingRight: 5,
                    marginRight: 10,
                    alignSelf: 'stretch'
                }}>
                    <View>
                        <Text style={{color: '#2980b9', fontSize: 15, fontWeight: 'bold'}}>{rowData.name}</Text>
                    </View>
                    <Text
                        adjustsFontSizeToFit={true}
                        style={{
                            color: 'black',
                            fontSize: 15,
                            paddingRight: 20,
                            paddingLeft: 20,
                        }}> {rowData.comment}</Text>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View>
                <ListView
                    style={stylesListComment.List}
                    dataSource={new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id}).cloneWithRows(this.props.comments)}
                    renderRow={this.renderRow.bind(this)}
                    enableEmptySections={true}
                >
                </ListView>
            </View>
        );
    }
}

const stylesTextInputComment = StyleSheet.create({
    Image: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: "50",
        aspectRatio: 1,
        borderRadius: 100,
    },
    TextInput: {
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: 'white',
        fontSize: 15,
        paddingLeft: 20,
        paddingRight: 20,
        margin: 0

    },
    View: {
        height: 80,
        padding: 3,
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },
    ButtonSendView: {
        margin: 5,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    TouchableSend: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 100,
    }

});


const stylesListComment = StyleSheet.create({
    List: {
        padding: 3,
        margin: 3,
        backgroundColor: '#F2F3F5',
        flexGrow: 1
    },
    Row: {
        flex: 1,
        marginBottom: 5,
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },
    Image: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: "50",
        aspectRatio: 1,
        borderRadius: 100,
    }
});

export default class CommentComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flexWrap: 'wrap', width: null, flexDirection: 'row'}}>
                <View style={{flexGrow: 1}}>
                    <TextInputComment currentUser={this.props.currentUser}/>
                </View>
                <View style={{flexGrow: 9}}>
                    <ListViewComment comments={this.props.comments} style={{flexGrow: 1}}/>
                </View>
            </View>
        );
    }
}
