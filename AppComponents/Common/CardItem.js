import React from 'react';
import {View, StyleSheet} from 'react-native';
const CardItem = (props) =>{
    return(
    <View style = {styleing.cardItemStyle}>
        {props.children}
        </View>
    );
}
const styleing = StyleSheet.create({
    cardItemStyle :{
    padding:5,
    borderColor:'#ddd',
    borderBottomWidth:1,
    backgroundColor:'#fff',
    justifyContent:'flex-start',
    flexDirection:'row'
}
});
export {CardItem};