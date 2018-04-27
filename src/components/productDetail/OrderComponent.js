import {ListView, Text, TextInput, View, Image, TouchableOpacity, ImageBackground} from "react-native";
import React, {Component} from "react";

import Accordion from 'react-native-collapsible/Accordion';

import {Icon} from 'react-native-elements'

import NumericInputComponent from './NumericInputComponent'


export default class OrderComponent extends Component {

    constructor(props) {
        super(props);

        let colors = this.props.colors.map((currentColor) => {

            let color = {...currentColor};
            color.size = [];
            color.sumCount = 0;
            currentColor.size.forEach(function (currentSize) {
                color.size.push(
                    {
                        name: currentSize,
                        count: 0
                    }
                );
            });

            return color;
        });


        this.state = {
            colors: colors,
        };
        this._renderHeader = this._renderHeader.bind(this);
        this._renderContent = this._renderContent.bind(this);
    }


    _renderHeader = (section, index, isActive, sections) => {
        return (
            <View style={{
                margin: 10, backgroundColor: '#1abc9c', flexDirection: 'row',
                justifyContent: 'space-between', marginBottom: 0
            }}>
                <View style={{width: null, height: null, alignItems: 'flex-start', margin: 5, flexDirection: 'row'}}>
                    <Image style={{width: 50, height: 50}} source={{uri: section.imageUri}}/>
                    <View style={{justifyContent: 'center',}}>
                        <Text style={{color: 'white', fontWeight: 'bold'}}> Màu: {section.name}</Text>
                        <Text style={{color: 'white', fontWeight: 'bold'}}> Tổng số lượng: {section.sumCount}</Text>
                    </View>
                </View>

                <Icon name={isActive ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={35} color="white"/>
            </View>
        );
    };
    _renderContent = (section, i, isActive, sections) => {

        return (
            <View style={{

                flexGrow: 1, alignItems: 'flex-end', paddingRight: 30, borderWidth: 1,
                margin: 10, marginTop: 0, borderTopWidth: 0, borderColor: '#bdc3c7'
            }}>
                <View style={{height: 30, width: 250, alignItems: 'flex-end'}}>
                    <View style={{
                        width: 200,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end'
                    }}>
                        <Text style={{fontSize: 18}}> Size</Text>
                        <Text style={{fontSize: 18}}>Số lượng </Text>
                    </View>
                </View>
                {
                    section.size.map(function callback(oneSize, j) {
                        return (
                            <View key={j} style={{height: 60, width: 200}}>
                                <View style={{width: 200, flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Text style={{textAlignVertical: 'center', fontSize: 18}}>{oneSize.name}</Text>
                                    <NumericInputComponent onValueChange={(number) => {
                                        let newColor = this.state.colors;
                                        let change = newColor[i].size[j].count - number;
                                        newColor[i].size[j].count = number;
                                        newColor[i].sumCount = newColor[i].sumCount - change;

                                        let totalCount=0;
                                        newColor.map((oneColor)=>{
                                           totalCount+=oneColor.sumCount;
                                        });

                                        this.setState({colors: newColor});
                                        this.props.onTotalCountChange(totalCount);
                                    }}
                                    />
                                </View>
                            </View>
                        )
                    }, this)
                }
            </View>)
    };

    render() {

        return (
            <View style={{flexGrow:1}}>
                <Accordion
                    sections={this.state.colors}
                    renderHeader={this._renderHeader.bind(this)}
                    renderContent={this._renderContent.bind(this)}
                    initiallyActiveSection={0}
                />
            </View>
        )
    }
}

