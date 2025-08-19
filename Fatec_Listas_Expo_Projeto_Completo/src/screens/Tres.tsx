import React from 'react';
import { View } from 'react-native';

export default function Tres(){
  return (
    <View style={{ flex:1 }}>
      <View style={{ flex:0.5, flexDirection:'row', backgroundColor:'crimson' }}>
        <View style={{ flex:0.5, backgroundColor:'teal' }}/>
        <View style={{ flex:0.5, backgroundColor:'skyblue' }}/>
      </View>
      <View style={{ flex:0.5, backgroundColor:'salmon' }}/>
    </View>
  );
}
