import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';
import { styles } from './styles';

export default function Dez(){
  const [logado,setLogado] = useState(false);
  return (
    <View style={styles.container}>
      <Switch
        value={logado}
        onValueChange={setLogado}
        trackColor={{ false: '#e77878', true: '#94df83' }}
        thumbColor={logado ? '#47eb22' : '#ed1111'}
      />
      <Text>Status: {logado ? 'Logado' : 'Deslogado'}</Text>
    </View>
  );
}
