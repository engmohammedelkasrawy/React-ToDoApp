import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Button from './Common/Button';
class Home extends Component {
      constructor(){
        super();
        this.state ={
        title : 'Home'
        };
    }
      onClickLogIn(){
        this.props.navigation.navigate('Login');
    }
    render() {
        return ( 
            <View >
 
            <Button 
            onPress= {this.onClickLogIn.bind(this)}
            >Login</Button>
            
            </View >
        );
    }
  
}

export default Home;