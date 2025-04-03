import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Página Home</Text>
      <Text style={styles.descricao}>Bem vindo a página inicial</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10
  },
  descricao:{
    fontSize: 20,
    fontWeight: 'regular',
    marginBottom: 10
  }
}); 