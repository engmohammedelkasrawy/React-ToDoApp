import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

class Login extends Component {
    constructor(){
        super();
        this.state ={
        title : 'Login'
        };
    }
    render() {
        return ( 
            <View style = { styling.header } >

            
            <Text> Login < /Text> 


            
            </View >
        );
    }
}
const styling = StyleSheet.create({
    login: {
        backgroundColor: '#FEF4E8',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'

    },
    text: {
        fontSize: 15,
        fontWeight: 'bold'
    }
});
export default Login;