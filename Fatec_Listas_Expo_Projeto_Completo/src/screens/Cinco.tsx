import React from 'react';
import { View, Image, Alert, TouchableOpacity } from 'react-native';

export default function Cinco(){
  return (
    <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
      <TouchableOpacity onPress={() => Alert.alert('Boa noite!')} activeOpacity={0.7}>
        <Image source={require('../../assets/logo.png')} style={{ width:96, height:96 }} />
      </TouchableOpacity>
    </View>
  );
}
