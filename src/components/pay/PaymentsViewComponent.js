import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'


export default class PaymentsViewComponent extends Component {
    constructor(props) {
        super(props);
        this.onSelect = this.onSelect.bind(this)
        this.state = {
            value: 'COD',
            index: '0'
        }
    }

    onSelect(index, value) {
        this.setState({
            value: value,
            index: index
        })
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Text style={{fontSize: 20, marginLeft: 20}}>Phương thức thanh toán</Text>

                <RadioGroup  highlightColor='#ecf0f1' selectedIndex={0}  onSelect={(index, value) => this.onSelect(index, value)}>
                    <RadioButton value={'COD'} color='#16a085' style={stylesPay.RadioButtonStyle}>
                        <Text style={{fontWeight: 'bold', fontSize: 17}}>COD</Text>
                    </RadioButton>

                    <RadioButton value={'Transfer'} color='#16a085' style={stylesPay.RadioButtonStyle}>
                        <Text style={{fontWeight: 'bold', fontSize: 17}}>Chuyển khoản</Text>
                    </RadioButton>
                </RadioGroup>
            </View>
        )
    }
}

const stylesPay = StyleSheet.create({
    RadioButtonStyle: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        borderRadius: 5,
        backgroundColor: '#ecf0f1',
    }
});