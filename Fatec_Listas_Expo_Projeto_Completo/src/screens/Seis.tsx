import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { styles } from './styles';

export default function Seis(){
  const [nome,setNome] = useState('');
  const [idade,setIdade] = useState('');
  const [res,setRes] = useState('');
  return (
    <View style={styles.container}>
      <TextInput placeholder="Nome" value={nome} onChangeText={setNome} style={styles.input} />
      <TextInput placeholder="Idade" value={idade} onChangeText={setIdade} keyboardType="numeric" style={styles.input} />
      <Button title="Salvar" onPress={() => setRes(`${nome} - ${idade}`)} />
      <Text>{res}</Text>
    </View>
  );
}
