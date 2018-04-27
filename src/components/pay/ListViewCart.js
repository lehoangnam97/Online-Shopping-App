import React, {Component} from 'react';

import {
    ListView,
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'


import {calculatePrice} from '../../utils'

export default class ListViewCart extends Component {
    constructor(props) {
        super(props);
    }

    renderRow(rowData) {
        if (this.props.cart.length === 0) {
             return(
                 <View style={stylesListComment.Row}/>
             )
        }
        return (
            <TouchableOpacity>
                <View style={stylesListComment.Row}>
                    <View style={{flex: 3, justifyContent: 'center',alignItems: 'center',}}>
                        <Image style={stylesListComment.Image}
                               source={{uri: (rowData.product.colors[0]).imageUri}}/>
                    </View>


                    <View style={{flexDirection: 'column', flex: 7, marginRight: 10, paddingLeft:30}}>
                        <View>
                            <Text style={{fontSize: 19, color:'#2c3e50' }}>{rowData.product.name}</Text>
                        </View>

                        <View>
                            <Text style={{fontSize: 17}}>Giá sản phẩm: {rowData.product.price}</Text>
                        </View>

                        <View>
                            <Text style={{fontSize: 17}}>Số lượng: {rowData.amount}</Text>
                        </View>



                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View>
                <ListView
                    style={stylesListComment.List}
                    dataSource={(new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id})).cloneWithRows(this.props.cart)}
                    renderRow={this.renderRow.bind(this)}>
                </ListView>
            </View>
        );
    }
}

const stylesListComment = StyleSheet.create({
    List: {
        padding: 3,
        margin: 3,
    },
    Row: {
        flex: 1,
        marginTop: 5,
        paddingBottom:5,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: "#bdc3c7",
    },
    Image: {
        width:100,
        height:100,
    }
});


