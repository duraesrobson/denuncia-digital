import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from 'app/styles/global';
import { Link } from 'expo-router';
import { StatusBar } from 'react-native';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.darkPurple}
        translucent={false}
        animated={true}
      />
      <View style={styles.content}>
        <Text style={styles.titulo}>Início</Text>
        <Text style={styles.descricao}>Bem vindo a página inicial</Text>
        <Link href="/(auth)/log-in" style={styles.link}>Ir para Login</Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkPurple,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo:{
    fontSize: 25,
    color: COLORS.orange,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  descricao:{
    fontSize: 20,
    color: COLORS.light,
    fontWeight: 'regular',
    marginBottom: 10,
    textAlign: 'center'
  },
  link: {
    color: COLORS.orange,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    textDecorationLine: 'underline'
  }
}); 