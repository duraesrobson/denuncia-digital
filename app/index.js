import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from 'app/styles/global';
import { Link } from 'expo-router';
import { StatusBar } from 'react-native';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.orange}
        translucent={false}
        animated={true}
      />
      <View style={styles.content}>
        <Image
          style={styles.imagem}
          source={require('@assets/images/logo-192.png')}
        />
        <Image
          style={styles.imagem2}
          source={require('@assets/images/using-phone.png')}
        />
        <Text style={styles.titulo}>
          Internet consciente com <Text style={styles.span}>Denúncia Digital</Text> 
        </Text>
        <Text style={styles.descricao}>Aqui, você pode entender seus direitos digitais, relatar violações de forma anônima e ajudar a construir um espaço virtual mais seguro e justo para todos.</Text>
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
  imagem: {
    resizeMode: 'contain',
    width:160,
    height: 160,
    margin: 40,
    marginTop: -70
  },
  imagem2: {
    resizeMode: 'contain',
    width:350,
    height: 350,
    marginTop: -40
  },
  titulo:{
    fontSize: 30,
    color: COLORS.light,
    lineHeight:40,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Rajdhani-Bold',
  },
  span:{
    color: COLORS.orange,
    fontSize: 40
  },
  descricao:{
    fontSize: 20,
    color: COLORS.light,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Rajdhani-Regular',
  },
  link: {
    color: COLORS.orange,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    textDecorationLine: 'underline',
    fontFamily: 'Rajdhani-Medium',
  }
}); 