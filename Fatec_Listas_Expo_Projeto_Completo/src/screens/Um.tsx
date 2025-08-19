import React from 'react';
import { View } from 'react-native';

export default function Um(){
  return (
    <View style={{ flex:1 }}>
      <View style={{ flex:0.5, backgroundColor:'crimson' }}/>
      <View style={{ flex:0.5, backgroundColor:'salmon' }}/>
    </View>
  );
}
