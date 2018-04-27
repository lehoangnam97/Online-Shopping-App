import { AppRegistry } from 'react-native';
import React,{ Component} from 'react'
import {Provider} from 'react-redux'
import store from './src/redux/store'
import App from "./src/components/App";

class AppBanHang extends Component{
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}

AppRegistry.registerComponent('AppBanHang', () => AppBanHang);
