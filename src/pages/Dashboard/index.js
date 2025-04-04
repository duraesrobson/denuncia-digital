import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Dashboard</Text>
      <Text style={styles.descricao}>Veja os gráficos</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c5f8f3',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red',
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