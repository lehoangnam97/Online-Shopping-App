import React, {Component} from 'react';
import {
    ListView,
    WebView,
    View, Text, Image, TouchableOpacity
} from 'react-native';

import {connect} from 'react-redux'


import {sales, FONT_SIZE} from '../../utils'

class SalesView extends Component {
    static navigationOptions = {
        title: "Khuyến mãi"
    }
    static renderSaleItem(saleItem) {
        return (
            <TouchableOpacity style={{flex:1}}>
                <View style={{flex: 1, borderBottomWidth: 1, marginTop: 10, borderBottomColor: '#95a5a6'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={{width: 100, height: 100}} source={{uri: saleItem.image}}/>
                        <View style={{flex:1, marginLeft:10}}>
                            <Text style={{
                                color: '#1abc9c',
                                fontWeight: 'bold',
                                fontSize: FONT_SIZE+3
                            }}> {saleItem.title}</Text>
                            <Text style={{
                                color: '#95a5a6',
                                fontWeight: 'bold',
                                fontSize: FONT_SIZE}} >{saleItem.raw}</Text>
                        </View>
                    </View>

                    <View>
                        <Text style={{textAlign: 'right'}}>{saleItem.time.toString()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    };


    render() {
        return (
            <ListView style={styles.List}
                      dataSource={new ListView.DataSource({rowHasChanged: (r1, r2) => r1.title !== r2.title}).cloneWithRows(this.props.sales)}
                      renderRow={SalesView.renderSaleItem.bind(this)}/>
        )
    }
}

function mapStateToProps(state){
    return {sales: state.sales.sales}
}

export default connect(mapStateToProps)(SalesView);