import React, {Component} from 'react';
import {
    View,
    Text,
    ListView,
    TouchableOpacity,
    Image
} from 'react-native';


import {FONT_SIZE} from '../../utils'




export default class CategoriesListComponent extends Component {
    renderArticleItem(categoryItem) {
        return (
            <View style={{width: 280, height: 280}}>
                <TouchableOpacity>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{width: 250, height: 250}} source={{uri: categoryItem.image}}/>
                    </View>
                    <Text style={{fontSize: FONT_SIZE, color: 'black', textAlign: 'center'}} numberOfLines={1}
                          allowFontScaling={true}
                          adjustsFontSizeToFit={true}>
                        {categoryItem.name}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        if(this.props.categoriesData.length === 0)
        {
            return null;
        }
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                    <Text style={{fontSize: FONT_SIZE}}>Danh mục</Text>
                    <TouchableOpacity>
                        <Text style={{color: '#16a085', fontSize: FONT_SIZE - 5}}>Xem tất cả</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 8, marginTop: 10}}>
                    <ListView style={{flex: 1}}
                              horizontal={true}
                              dataSource={new ListView.DataSource({rowHasChanged: (r1, r2) => r1.name !== r2.name}).cloneWithRows(this.props.categoriesData)}
                              renderRow={this.renderArticleItem.bind(this)}
                              enableEmptySections={true} />
                </View>
            </View>
        )
    }
}
