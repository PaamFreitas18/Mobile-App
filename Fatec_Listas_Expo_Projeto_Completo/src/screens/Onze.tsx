import React from 'react';
import { View, Image, Pressable, Text, ScrollView } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Onze(){
  const nav = useNavigation<any>();
  const botoes = ['Um','Dois','Tres','Quatro','Cinco','Seis','Sete','Oito','Nove','Dez','ViaCep','CepsList','StackDemo'];
  return (
    <ScrollView contentContainerStyle={[styles.container,{paddingTop:32}]}>
      <Image source={require('../../assets/logo.png')} style={{ width:140, height:140, marginBottom:16 }} />
      <View style={[styles.row, { justifyContent:'center' } ]}>
        {botoes.map((b) => (
          <Pressable key={b} style={styles.button} onPress={() => nav.navigate(b)}>
            <Text style={styles.buttonText}>{b}</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}
