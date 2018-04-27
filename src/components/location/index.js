import React, {Component} from 'react';
import { ListView } from 'react-native';

import LocationItem from './locationItem'

import {connect} from 'react-redux'


class LocationView extends Component {
    static navigationOptions = {
        title: "Chi nhánh"
    }

    static renderLocationItem(locationItem) {
        return (
            <LocationItem location = {locationItem.location} locationTitle = {locationItem.locationTitle} locationAddress = {locationItem.locationAddress}/>
        )
    };


    render() {
        return (
            <ListView style={styles.List}
                      dataSource={new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id}).cloneWithRows(this.props.shops)}
                      renderRow={LocationView.renderLocationItem.bind(this)}/>
        )
    }
}

function mapStateToProps(state){
    return {shops: state.shops.shops}
}

export default connect(mapStateToProps)(LocationView);