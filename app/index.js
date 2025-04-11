import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from './styles/global';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import OrangeButton from './components/OrangeButton';
// import { firebaseConfig } from '../firebaseConfig'; // Importa o firebaseConfig


export default function Index() {
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar
        style="light"
        backgroundColor={COLORS.darkPurple}
      />
      <ScrollView contentContainerStyle={styles.scrollContent}>
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
            Internet consciente com{"\n"}
            <Text style={styles.tituloSpan}>
              Denúncia <Text style={styles.digitalSpan}>Digital</Text>
            </Text>
          </Text>
          <Text style={styles.descricao}>
            Aqui, você pode <Text style={styles.descricaoOrange}>entender os seus direitos digitais</Text>, relatar violações de forma <Text style={styles.descricaoSpan}>totalmente anônima </Text>e ajudar a construir um espaço virtual mais seguro e justo para todos.
          </Text>
          <OrangeButton
            style={styles.button}
            handlePress={() => router.push('/(tabs)/home')}
            title="Continuar"
          />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.darkPurple,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    resizeMode: 'contain',
    width:140,
    height: 140,
    marginTop: -50,
    
  },
  imagem: {
    resizeMode: 'contain',
    width:300,
    height: 300,
    marginTop: -20
  },
  titulo:{
    fontSize: 30,
    color: COLORS.light,
    lineHeight:40,
    textAlign: 'center',
    fontFamily: 'Rajdhani-Bold',
    marginTop: -20
  },
  tituloSpan:{
    color: COLORS.orange,
    fontSize: 45
  },
  digitalSpan:{
    color: COLORS.blue,
    fontSize: 45
  },
  descricao:{
    fontSize: 15,
    color: COLORS.light,
    marginBottom: 30,
    textAlign: 'center',
    width: 310,
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
  

});