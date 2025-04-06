import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from 'app/styles/global';

export default function Denuncia() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.titulo}>Denúncia</Text>
        <Text style={styles.descricao}>Faça sua denúncia aqui</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 25,
    color: COLORS.darkPurple,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  descricao:{
    fontSize: 20,
    color: COLORS.orange,
    fontWeight: 'regular',
    marginBottom: 10,
    textAlign: 'center'
  }
}); 