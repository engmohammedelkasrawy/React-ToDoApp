import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
const Input = (props) =>{
    return(
    <View style ={styleing.inputContainerStyle}>
        <Text style ={styleing.textStyle}>{props.lable}</Text>   
        <TextInput style ={styleing.input}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
        autoCorrect={false}/>
        </View>
    );
}
const styleing = StyleSheet.create({
    inputContainerStyle:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        height:40
    },
    textStyle:{
        flex:1,
        paddingLeft:20,
        fontSize:16
    },
    input:{
        fontSize:16,
        color:'#000',
        paddingLeft:5,
        paddingRight:5,
        flex:2
    }
});
export {Input};