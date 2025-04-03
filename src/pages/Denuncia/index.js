import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Denuncia() {
  return (
    <View style={styles.container}>
      <Text>Página de denúncia</Text>
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
  text:{
    fontSize: 25,
    fontWeight: 'bold'
  }
}); 