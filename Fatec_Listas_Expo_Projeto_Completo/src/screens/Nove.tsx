import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './styles';

export default function Nove(){
  const [perfil,setPerfil] = useState('admin');
  return (
    <View style={styles.container}>
      <Picker selectedValue={perfil} onValueChange={(v) => setPerfil(String(v))} style={{ width: '90%' }}>
        <Picker.Item label="Administrador" value="admin" />
        <Picker.Item label="Gestor" value="manager" />
        <Picker.Item label="Usuário" value="user" />
      </Picker>
      <Text>Perfil: {perfil}</Text>
    </View>
  );
}
