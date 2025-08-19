import React from 'react';
import { View, Image } from 'react-native';

export default function Quatro(){
  return (
    <View style={{ flex:1 }}>
      <View style={{ flex:0.5, flexDirection:'row', backgroundColor:'crimson' }}>
        <View style={{ flex:0.5, backgroundColor:'teal', alignItems:'center', justifyContent:'center' }}>
          <Image source={require('../../assets/logo.png')} style={{ width:140, height:140 }} resizeMode="contain" />
        </View>
        <View style={{ flex:0.5, backgroundColor:'skyblue', alignItems:'center', justifyContent:'center' }}>
          <Image source={require('../../assets/logo.png')} style={{ width:140, height:140 }} resizeMode="contain" />
        </View>
      </View>
      <View style={{ flex:0.5, backgroundColor:'salmon' }}/>
    </View>
  );
}
