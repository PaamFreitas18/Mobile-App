import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Dashboard({ route }) {
  const { user } = route.params || {};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo, {user?.nome || 'usuário'}</Text>
      <Text style={styles.text}>Perfil: {user?.perfil}</Text>
      <Text style={styles.text}>Token (início): {user?.token?.slice(0, 16)}...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 12 },
  text: { fontSize: 14, opacity: 0.8, marginBottom: 6 }
});
