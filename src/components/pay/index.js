import React, {Component} from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    ScrollView
} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import PaymentsViewComponent from "./PaymentsViewComponent.js";
import PayInfoComponent from "./PayInfoViewComponent";
import PayFinishComponent from "./PayFinishViewComponent";

import {carts} from '../../utils'

export default class PayView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPosition: 0,

            userInfo: {
                phone: '123456678',
                name: 'Le Hoang Nam',
                mail: '',
                address: ''
            },
            orderInfo: {
                id: "HD001",
                payments: 'COD'}
        }
    }

    renderStepView() {
        if (this.state.currentPosition === 0)
            return (
                <PayInfoComponent userInfo={this.state.userInfo}/>
            );
        if (this.state.currentPosition === 1)
            return (
                <PaymentsViewComponent/>
            );
        return (
            <PayFinishComponent
                cart={carts}
                userInfo={this.state.userInfo}
                orderInfo={this.state.orderInfo}
            />
        )
    }

    render() {
        return (
            <View style={{flex: 1, marginTop: 10}}>
                <ScrollView style={{flex: 1}}>
                    <View style={{height: 30, marginBottom: 80}}>
                        <StepIndicator
                            stepCount={3} customStyles={customStyles}
                            labels={["Thông tin", "Thanh toán", "Hoàn tất"]}
                            currentPosition={this.state.currentPosition}
                        />
                    </View>

                    {this.renderStepView()}
                </ScrollView>

                <View style={{height: 60, borderTopWidth: 2, borderTopColor: '#ecf0f1'}}>
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({
                                currentPosition: this.state.currentPosition + 1
                            })
                        }}

                        style={{
                            backgroundColor: '#16a085', alignItems: 'center', height: 40,
                            marginLeft: 80, marginRight: 80, borderRadius: 3, marginTop: 10,
                        }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 25,
                            textAlignVertical: 'center'
                        }}>{(this.state.currentPosition < 2) ? "Mua ngay" : "Hoàn tất"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const customStyles = {
    stepIndicatorSize: 45,
    currentStepIndicatorSize: 55,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#16a085',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#1abc9c',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#1abc9c',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#1abc9c',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#16a085',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#ffffff',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#2c3e50'
}


