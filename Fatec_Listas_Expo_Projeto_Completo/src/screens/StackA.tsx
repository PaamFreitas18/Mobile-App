import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function StackA(){
  const nav = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stack A</Text>
      <Pressable style={styles.button} onPress={() => nav.navigate('StackB')}>
        <Text style={styles.buttonText}>Ir para Stack B</Text>
      </Pressable>
    </View>
  );
}
