import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { styles } from './styles';
import { useCep } from '../contexts/CepContext';

export default function ViaCep(){
  const [cep, setCep] = useState('');
  const { addCep, setLastResult, lastResult } = useCep();

  const buscar = async () => {
    const only = cep.replace(/\D/g, '');
    if (only.length !== 8) { setLastResult({ erro: true, msg: 'CEP deve ter 8 dígitos' }); return; }
    try {
      const res = await fetch(`https://viacep.com.br/ws/${only}/json/`);
      const data = await res.json();
      if (data.erro) {
        setLastResult({ erro: true, msg: 'CEP inválido' });
      } else {
        setLastResult({ erro: false, data });
        addCep(data);
      }
    } catch (e) {
      setLastResult({ erro: true, msg: 'Falha na consulta' });
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.select({ios:'padding', android: undefined})} style={styles.container}>
      <TextInput placeholder="Digite o CEP (8 dígitos)" keyboardType="numeric" value={cep} onChangeText={setCep} style={styles.input} />
      <Pressable style={styles.button} onPress={buscar}><Text style={styles.buttonText}>Obter</Text></Pressable>
      {lastResult && ('erro' in lastResult ? (
        <Text>{lastResult.msg}</Text>
      ) : (
        <View style={styles.card}>
          <Text>CEP: {lastResult.data.cep}</Text>
          <Text>Logradouro: {lastResult.data.logradouro}</Text>
          <Text>Bairro: {lastResult.data.bairro}</Text>
          <Text>Cidade/UF: {lastResult.data.localidade} / {lastResult.data.uf}</Text>
        </View>
      ))}
    </KeyboardAvoidingView>
  );
}
