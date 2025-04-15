import React, { useState } from 'react';
import "@expo/metro-runtime";
import { StyleSheet, Text, View, FlatList, Image, Linking } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from 'app/styles/global';
import ContentCard from '@components/ContentCard';
import Accordion from '@components/Accordion';

export default function Home() {
    const [expandedAccordion, setExpandedAccordion] = useState(null);

    const handleAccordionPress = (index) => {
        setExpandedAccordion(expandedAccordion === index ? null : index);
    };

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
                  Direitos Humanos no Universo Digital
                  </Text>
                  <Text style={styles.descricao}>
                  Conheça seus direitos digitais e saiba como se proteger contra violações.
                  </Text>
                </View>
              </View>

              <View style={styles.mainContainer}>
                <View style={styles.textContainer}>
                  <Text style={styles.h1}>
                    O QUE SÃO DIREITOS DIGITAIS?
                  </Text>
                  <Text style={styles.h3}>
                    Os direitos digitais são extensões dos direitos humanos no ambiente digital. Eles incluem privacidade, liberdade de expressão, acesso à informação, direito ao esquecimento e proteção contra discriminação online.
                  </Text>
                </View>

                <View>

                  <Text style={styles.h1}>
                    Principais Violações aos Direitos Digitais
                  </Text>
                  <Accordion
                    title="Violação de Privacidade"
                    content="Coleta e uso indevido de dados pessoais sem consentimento adequado, monitoramento ilegal das atividades online dos usuários, invasão de privacidade por meio de câmeras e microfones de dispositivos eletrônicos."
                    expanded={expandedAccordion === 0}
                    onPress={() => handleAccordionPress(0)}
                  />
                  <Accordion
                    title="Teste2"
                    content="Coleta e uso indevido de dados pessoais sem consentimento adequado, monitoramento ilegal das atividades online dos usuários, invasão de privacidade por meio de câmeras e microfones de dispositivos eletrônicos."
                    expanded={expandedAccordion === 1}
                    onPress={() => handleAccordionPress(1)}
                  />

                  <Accordion
                    title="Teste2"
                    content="Coleta e uso indevido de dados pessoais sem consentimento adequado, monitoramento ilegal das atividades online dos usuários, invasão de privacidade por meio de câmeras e microfones de dispositivos eletrônicos."
                    expanded={expandedAccordion === 2}
                    onPress={() => handleAccordionPress(2)}
                  />
                </View>



                {/* <ContentCard
                  imageSource={require('@assets/images/lupa.jpg')} 
                  title="Participe da nossa pesquisa"
                  description="Ajude-nos a entender melhor as violações de direitos humanos no ambiente digital respondendo ao nosso questionário anônimo."
                  buttonTitle="Responder Questionário"
                  //colocar link do form
                  onPress={() => console.log('Botão Análise pressionado')}
                /> */}
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
  textContainer: {
    backgroundColor: COLORS.light,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  h1: {
    fontFamily: 'Rajdhani-Bold',
    color: COLORS.orange,
    lineHeight: 30,
    margin: 13,
    fontSize: 30,
    textAlign: 'center'
  },
  h3: {
    fontFamily: 'Rajdhani-SemiBold',
    fontSize: 18,
    textAlign: 'center',
    width: 350,
    alignSelf: 'center',
    marginBottom: 5
  },
  mainContainer: {
    backgroundColor: COLORS.light,
    padding: 20,
    minHeight: 400,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    gap: 40,
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