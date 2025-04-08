import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from './styles/global';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import OrangeButton from './components/OrangeButton'

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style="light"
        backgroundColor={COLORS.darkPurple}
      />
      <View style={styles.content}>
        <Image
          style={styles.logo}
          source={require('@assets/images/logo-192.png')}
        />
        <Image
          style={styles.imagem}
          source={require('@assets/images/using-phone.png')}
        />
        <Text style={styles.titulo}>
          Internet consciente com <Text style={styles.tituloSpan}>Denúncia <Text style={styles.digitalSpan}>Digital</Text></Text> 
        </Text>
        <Text style={styles.descricao}>Aqui, você pode <Text style={styles.descricaoOrange}>entender os seus direitos digitais</Text>, relatar violações de forma <Text style={styles.descricaoSpan}>totalmente anônima </Text>e ajudar a construir um espaço virtual mais seguro e justo para todos.</Text>
        
        <OrangeButton
          handlePress={() => router.push('/(tabs)/home')}
          title="Continuar"
        />
        
          
        
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
  logo: {
    resizeMode: 'contain',
    width:160,
    height: 160,
    marginTop: -110,
    marginBottom: 15
  },
  imagem: {
    resizeMode: 'contain',
    width:350,
    height: 350,
    marginTop: -40
  },
  titulo:{
    fontSize: 30,
    color: COLORS.light,
    lineHeight:40,
    textAlign: 'center',
    fontFamily: 'Rajdhani-Bold',
  },
  tituloSpan:{
    color: COLORS.orange,
    fontSize: 40
  },
  digitalSpan:{
    color: COLORS.blue,
    fontSize: 40
  },
  descricao:{
    fontSize: 18,
    color: COLORS.light,
    marginBottom: 25,
    textAlign: 'center',
    width: 280,
    fontFamily: 'Rajdhani-Regular',
  },
  descricaoSpan: {
    color: COLORS.blue,
    fontWeight: 'bold'
  },
  descricaoOrange: {
    color: COLORS.orange,
    fontWeight: 'bold'
  },
  buttonText: {
    color: COLORS.light,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    backgroundColor: COLORS.orange,
    padding: 10,
    borderRadius: 15,
    fontFamily: 'Rajdhani-Bold',
  }
}); 