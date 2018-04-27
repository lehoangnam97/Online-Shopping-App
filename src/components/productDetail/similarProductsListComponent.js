import React, {Component} from 'react';
import {
    View,
    Text,
    ListView,
    TouchableOpacity,
    Image
} from 'react-native';

export default class SimilarProductsListComponent extends Component {
    _renderSimilarItem=(similarItem) =>{
        return (
            <View style={{width: 120, height: 120}}>
                <TouchableOpacity>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{width: 100, height: 100}} source={{uri: similarItem.colors[0].imageUri}}/>
                    </View>
                    <Text style={{fontSize: 15, color: 'black'}} numberOfLines={1} allowFontScaling={true}
                          adjustsFontSizeToFit={true}>
                        {similarItem.name}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    };
    render() {
        return (
                <View style={{flex: 1}}>
                    <ListView style={{flex: 1}}
                              horizontal={true}
                              dataSource={new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id}).cloneWithRows(this.props.similarProducts)}
                              renderRow={this._renderSimilarItem.bind(this)}
                              enableEmptySections={true} />
                </View>

        )
    }
}
