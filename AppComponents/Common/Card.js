import React from 'react';
import {View, StyleSheet} from 'react-native';
const Card = (props) =>{
    return(
    <View style = {styleing.cardStyle}>
        {props.children}
        </View>
    );
}
const styleing = StyleSheet.create({
    cardStyle :{
    marginLeft: 5,
    marginRight:5,
    marginTop:5,
    borderWidth:1,
    borderRadius:2,
    borderColor:'#ddd',
    borderBottomWidth:0,
    shadowColor:'#000',
    shadowOpacity:.1
}
});
export {Card};