import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Denuncia() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Página de denúncia</Text>
      <Text style={styles.descricao}>Faça uma denúncia anônima</Text>
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