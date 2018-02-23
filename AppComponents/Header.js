import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
class Header extends Component {
      constructor(){
        super();
        this.state ={
        title : 'Home'
        };
    }
    render() {
        return ( 
            <View style = { styling.header } >
 
            
            <Text style= {styling.text} > Header < /Text> 


            
            </View >
        );
    }
}
const styling = StyleSheet.create({
    header: {
        backgroundColor: 'red',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'

    },
    text: {
        fontSize: 15,
        fontWeight: 'bold'
    }
});
export default Header;