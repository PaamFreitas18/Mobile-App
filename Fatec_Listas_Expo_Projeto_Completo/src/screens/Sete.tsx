import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { styles } from './styles';

export default function Sete(){
  const [email,setEmail] = useState('');
  const [senha,setSenha] = useState('');
  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" style={styles.input} />
      <TextInput placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry style={styles.input} />
      <Button title="Entrar" onPress={() => {}} />
      <Text>Email: {email}</Text>
      <Text>Senha: {senha ? '••••••' : ''}</Text>
    </View>
  );
}
