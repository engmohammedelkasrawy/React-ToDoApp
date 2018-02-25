import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Button, Card, CardItem, Input} from './Common';

class Login extends Component {
    constructor(){
        super();
        this.state ={
        title : 'Login',
        userName:'',
        password:''     
        };
    }
     onLogin(){
        console.log(`user name is ${this.state.userName} and password is ${this.state.password}`);
    }
    render() {
        return ( 
            <Card>
            <CardItem>
            <Input 
            lable="E-Mail"
            placeholder="enter E-Maill address"
            secureTextEntry={false}
            onChangeText = {(userName)=> this.setState({userName})}
            />
            
            </CardItem>
             <CardItem>
            <Input 
            lable="Password"
            placeholder="enter Password address"
            secureTextEntry={true}
            onChangeText = {(password)=>this.setState({password})}
            />
            
            </CardItem>
            <CardItem>
            <Button onPress ={this.onLogin.bind(this)}>Login</Button>
            </CardItem>
            </Card>
        );
    }
   
}

export default Login;