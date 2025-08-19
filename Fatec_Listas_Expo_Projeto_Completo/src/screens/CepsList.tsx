import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles';
import { useCep } from '../contexts/CepContext';

export default function CepsList(){
  const { history } = useCep();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {history.length === 0 ? <Text>Nenhuma consulta ainda.</Text> : null}
      {history.map((c, idx) => (
        <View key={idx} style={styles.card}>
          <Text>CEP: {c.cep}</Text>
          <Text>{c.logradouro} - {c.bairro}</Text>
          <Text>{c.localidade}/{c.uf}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
