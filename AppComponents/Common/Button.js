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
    height:45,
    marginRight : 5,
    marginLeft : 5, 
    borderWidth : 3,
    borderRadius : 5,
    backgroundColor :'rgb(42, 55, 68)',
    alignSelf : 'stretch',
    flex:1
    },
    text:{
    alignSelf:'center',
    color:'#fff',
    fontSize:16,
    fontWeight:'500',
    paddingTop:10,
    paddingBottom:10
    
}
});
export  {Button};