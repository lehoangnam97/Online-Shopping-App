 import {FONT_SIZE} from "../../utils";

import React, {Component} from 'react';
import {
    View,
    Text,
    ListView,
    TouchableOpacity,
    Image
} from 'react-native';




export default class ArticlesListComponent extends Component {
    renderArticleItem(articleItem) {
        return (
            <View style={{width: 280, height: 280}}>
                <TouchableOpacity>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{width: 250, height: 250}} source={{uri: articleItem.image}}/>
                    </View>
                    <Text style={{fontSize: FONT_SIZE, color: 'black', textAlign:'center'}} numberOfLines={1} allowFontScaling={true}
                          adjustsFontSizeToFit={true}>
                        {articleItem.title}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                    <Text style={{fontSize: FONT_SIZE}}>Tin tức nổi bật</Text>
                    <TouchableOpacity onPress = {this.props.onPress}>
                        <Text style={{color: '#16a085', fontSize: FONT_SIZE - 5}}>Xem tất cả</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 8, marginTop: 10}}>
                    <ListView style={{flex: 1}}
                              horizontal={true}
                              dataSource={new ListView.DataSource({rowHasChanged: (r1, r2) => r1.title !== r2.title}).cloneWithRows(this.props.articlesData)}
                              renderRow={this.renderArticleItem.bind(this)}
                              enableEmptySections={true} />
                </View>
            </View>
        )
    }
}
