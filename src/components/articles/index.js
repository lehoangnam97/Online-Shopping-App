import React, {Component} from 'react';
import {
    ListView,
    WebView,
    View, Text, Image, TouchableOpacity
} from 'react-native';


import {FONT_SIZE} from '../../utils'
import {connect} from 'react-redux'


class ArticlesView extends Component {
    static navigationOptions = {
        title: "Tin tức"
    }
    static renderArticleItem(articleItem) {
        return (
            <TouchableOpacity style={{flex:1}}>
            <View style={{flex: 1, borderBottomWidth: 1, marginTop: 10, borderBottomColor: '#95a5a6'}}>
                <View style={{flexDirection: 'row'}}>
                    <Image style={{width: 100, height: 100}} source={{uri: articleItem.image}}/>
                    <View style={{flex:1, marginLeft:10}}>
                        <Text style={{
                            color: '#1abc9c',
                            fontWeight: 'bold',
                            fontSize: FONT_SIZE+3
                        }}> {articleItem.title}</Text>
                        <Text style={{
                            color: '#95a5a6',
                            fontWeight: 'bold',
                            fontSize: FONT_SIZE}} >{articleItem.raw}</Text>
                    </View>
                </View>

                <View>
                    <Text style={{textAlign: 'right'}}>{articleItem.time.toString()}</Text>
                </View>
            </View>
            </TouchableOpacity>
        )
    };


    render() {
        return (
            <ListView style={styles.List}
                      dataSource={new ListView.DataSource({rowHasChanged: (r1, r2) => r1.title !== r2.title}).cloneWithRows(this.props.articles)}
                      renderRow={ArticlesView.renderArticleItem.bind(this)}
                      enableEmptySections={true} />
        )
    }
}

function mapStateToProps(state){
    return {articles: state.articles.articles}
}

export default connect(mapStateToProps)(ArticlesView);