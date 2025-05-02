import React from 'react';
import "@expo/metro-runtime";
import { StyleSheet, Text, View, FlatList, Image, Linking } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from 'app/styles/global';
import ContentCard from '@components/ContentCard';


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
                    Bem-vindo ao Denúncia <Text style={styles.tituloSpan}>Digital</Text>
                  </Text>
                  <Text style={styles.descricao}>
                    Este projeto visa monitorar e combater violações de direitos humanos no ambiente digital, alinhado ao Objetivo de Desenvolvimento Sustentável 16 da ONU: Paz, Justiça e Instituições Eficazes.
                  </Text>
                </View>
              </View>

              <View style={styles.mainContainer}>
                <ContentCard 
                  imageSource={require('@assets/images/ods16.jpg')}
                  title="ODS 16"
                  description="O ODS 16 visa promover sociedades pacíficas e inclusivas para o desenvolvimento sustentável, proporcionar o acesso à justiça para todos e construir instituições eficazes, responsáveis e inclusivas em todos os níveis."
                  buttonTitle="Saiba mais"
                  onPress={() => Linking.openURL('https://odsbrasil.gov.br/objetivo/objetivo?n=16')}
                />
                <ContentCard
                  imageSource={require('@assets/images/lupa.jpg')} 
                  title="Participe da nossa pesquisa"
                  description="Ajude-nos a entender melhor as violações de direitos humanos no ambiente digital respondendo ao nosso questionário anônimo."
                  buttonTitle="Responder Questionário"
                  //TODO: colocar link do form
                  onPress={() => Linking.openURL('https://forms.gle/nCgzQ3MwDv51C3n7A')}
                />
              </View>
            </>
          }
          // renderItem={() => null}
          // ListFooterComponent={
          //   <View style={styles.footerContainer}>
          //     <Text style={styles.footerText}>
          //       Desenvolvido com apoio da ONU
          //     </Text>
          //   </View>
          // }
          contentContainerStyle={styles.scrollContent}
        />
      </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: COLORS.darkPurple,
    position: 'relative',
    height: 300, 
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
    fontSize: 45,
    color: COLORS.orange,
    lineHeight: 40,
    width: 400,
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'Rajdhani-Bold',
    padding: 35,
    marginTop: -15,
    zIndex: 2,
  },
  tituloSpan:{
    color: COLORS.blue,
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
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    gap: 25,
  },
  footerContainer: {
    backgroundColor: COLORS.orange,
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    color: COLORS.darkPurple,
    fontSize: 14,
    fontFamily: 'Rajdhani-Regular',
  },
  
});