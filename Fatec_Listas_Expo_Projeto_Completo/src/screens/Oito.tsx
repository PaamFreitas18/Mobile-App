import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { styles } from './styles';

export default function Oito(){
  const [senha,setSenha] = useState('');
  const [conf,setConf] = useState('');
  const ok = senha.length>0 && senha===conf;
  return (
    <View style={styles.container}>
      <TextInput placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry style={styles.input} />
      <TextInput placeholder="Confirmar senha" value={conf} onChangeText={setConf} secureTextEntry style={styles.input} />
      <View style={[styles.card, { borderColor: ok ? '#47eb22' : '#ed1111' }]}>
        <Text>{ ok ? 'As senhas são iguais' : 'As senhas não são iguais' }</Text>
      </View>
    </View>
  );
}
