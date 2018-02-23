import React,{ Component } from 'react';
import {TouchableOpacity , Text, StyleSheet} from 'react-native';
const Button = (props) =>{
    return(
    <TouchableOpacity style= {styling.button} onPress={props.onPress} >
        <Text style={styling.text}>{props.children}</Text>
        </TouchableOpacity >
    );
}
const styling = StyleSheet.create({
button:{
    marginRight : 5,
    marginLeft : 5, 
    borderWidth : 3,
    borderRadius : 5,
    backgroundColor :'#FEF4E8',
    alignSelf : 'stretch',
    borderColor: '#970747' 
    },
    text:{
    alignSelf:'center',
    color:'#1989AC',
    fontSize:16,
    fontWeight:'500',
    paddingTop:10,
    paddingBottom:10
}
});
export default Button;