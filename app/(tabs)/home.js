import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from 'app/styles/global';

export default function Home() {
    return (
      <SafeAreaProvider style={styles.container}>
        <FlatList
          data={[{ id: '1' }]} // Adicionar pelo menos um item
          keyExtractor={item => item.id}
          ListHeaderComponent={
            <>
              <View style={styles.headerContainer}>
                <View>
                  <Image 
                    style={styles.bgImg}
                    source={require('@assets/images/squares-background.png')}
                  />
                  <Text style={styles.titulo}>
                    Bem-vindo ao Denúncia Digital
                  </Text>
                  <Text style={styles.descricao}>
                    Este projeto visa monitorar e combater violações de direitos humanos no ambiente digital, alinhado ao Objetivo de Desenvolvimento Sustentável 16 da ONU: Paz, Justiça e Instituições Eficazes.
                  </Text>
                </View>
              </View>

              <View style={styles.mainContainer}>
                <Text style={styles.mainTitle}>Como funciona?</Text>
                <Text style={styles.mainText}>
                  Aqui vai o conteúdo principal da sua aplicação
                </Text>
              </View>
            </>
          }
          renderItem={() => null}
          ListFooterComponent={
            <View style={styles.footerContainer}>
              <Text style={styles.footerText}>
                Desenvolvido com apoio da ONU
              </Text>
            </View>
          }
          contentContainerStyle={styles.scrollContent}
        />
      </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 800
  },
  headerContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: COLORS.darkPurple,
    position: 'relative',
    height: 300, // Ajuste conforme necessário
  },
  bgImg: {
    position: 'absolute',
    width: 600,
    height: 600,
    top: -180,
    left: -30,
    resizeMode: 'cover',
    opacity: 0.05,
    zIndex: 1,
  },
  titulo:{
    fontSize: 35,
    color: COLORS.orange,
    lineHeight: 35,
    width: 400,
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'Rajdhani-Bold',
    padding: 35,
    marginTop: -15,
    zIndex: 2,
  },
  descricao:{
    fontSize: 20,
    marginTop: -25,
    textAlign: 'center',
    color: COLORS.light,
    fontFamily: 'Rajdhani-Regular',
    zIndex: 2,
  },
  infoContainer: {
    width: 310,
    borderRadius: 10,
    alignSelf:'center',
    backgroundColor: COLORS.blue,
    padding: 5,
    margin: 20,
    marginBottom: 50,
    zIndex: 2,
  },
  important:{
    fontSize: 14,
    color: COLORS.darkPurple,
    textAlign: 'center',
    fontFamily: 'Rajdhani-Bold',
  },
  info:{
    alignSelf: 'center',
    fontSize: 14,
    color: COLORS.darkPurple,
    textAlign: 'center',
    fontFamily: 'Rajdhani-Regular',
  },
  mainContainer: {
    backgroundColor: COLORS.light,
    padding: 20,
    minHeight: 400,
    borderRadius: 30,
    marginTop: -30
  },
  mainTitle: {
    fontSize: 24,
    color: COLORS.darkPurple,
    fontFamily: 'Rajdhani-Bold',
    marginBottom: 15,
  },
  mainText: {
    fontSize: 16,
    color: COLORS.darkPurple,
    fontFamily: 'Rajdhani-Regular',
  },
  footerContainer: {
    backgroundColor: COLORS.blue,
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: COLORS.light,
    fontSize: 14,
    fontFamily: 'Rajdhani-Regular',
  },
});