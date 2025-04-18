import React, { useState } from 'react';
import "@expo/metro-runtime";
import { StyleSheet, Text, View, FlatList, Image, Linking } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from 'app/styles/global';
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

                <View style={styles.accordionContainer}>

                  <Text style={styles.h1}>
                    Principais Violações aos Direitos Digitais
                  </Text>
                  <Accordion
                    title="Violação de Privacidade"
                    content={[
                      "Coleta e uso indevido de dados pessoais sem consentimento adequado, monitoramento ilegal das atividades online dos usuários, invasão de privacidade por meio de câmeras e microfones de dispositivos eletrônicos.\n\n",
                      <Text key="como-proteger-privacidade" style={{ fontWeight: 'bold' }}>Como se proteger:</Text>,
                      " Utilize senhas fortes, verifique as configurações de privacidade em suas redes sociais, evite compartilhar informações sensíveis online.\n\n",
                      <Text key="como-denunciar-privacidade" style={{ fontWeight: 'bold' }}>Como denunciar:</Text>, " ANPD (Autoridade Nacional de Proteção de Dados) ou Procon de seu estado."
                    ]}
                    expanded={expandedAccordion === 0}
                    onPress={() => handleAccordionPress(0)}
                  />
                  <Accordion
                    title="Cyberbullying e Assédio Online"
                    content={["Práticas de intimidação, ameaças, difamação e assédio dirigidas a indivíduos através de meios digitais, como redes sociais, mensagens instantâneas, e-mails. \n \n",

                    <Text key="como-proteger-cyberbullying" style={{ fontWeight: 'bold' }}>Como se proteger:</Text>, " Bloquear contatos indesejados, não responder a provocações, salvar evidências. \n \n",

                    <Text key="como-denunciar-cyberbullying" style={{ fontWeight: 'bold' }}>Como denunciar:</Text>,  " Delegacia de Crimes Cibernéticos, plataformas onde ocorreu o assédio, SaferNet."
                    ]}
                    expanded={expandedAccordion === 1}
                    onPress={() => handleAccordionPress(1)}
                  />

                  <Accordion
                    title="Discurso de Ódio"
                    content={[
                      "Expressões que incitam o ódio, hostilidade ou discriminação contra indivíduos ou grupos com base em características como raça, religião, gênero, orientação sexual, nacionalidade, entre outras. \n \n",

                      <Text key="como-proteger-discurso" style={{ fontWeight: 'bold' }}>Como se proteger:</Text>, 
                      " Denunciar o conteúdo, evitar interações, reforçar a privacidade nas redes sociais. \n \n",

                      <Text key="como-denunciar-discurso" style={{ fontWeight: 'bold' }}>Como denunciar:</Text>,  
                      " Delegacia de Crimes Cibernéticos, plataformas de redes sociais, Ministério Público, SaferNet."
                    ]}
                    expanded={expandedAccordion === 3}
                    onPress={() => handleAccordionPress(3)}
                  />

                  <Accordion
                    title="Ciberataque"
                    content={[
                      "Ações maliciosas que visam danificar, invadir ou comprometer sistemas, redes e dispositivos, como ataques de malware, phishing, ransomware e invasões. \n \n",

                      <Text key="como-proteger-ciberataque" style={{ fontWeight: 'bold' }}>Como se proteger:</Text>, 
                      " Manter sistemas atualizados, usar antivírus confiável, não clicar em links suspeitos. \n \n",

                      <Text key="como-denunciar-ciberataque" style={{ fontWeight: 'bold' }}>Como denunciar:</Text>,  
                      " Delegacia de Crimes Cibernéticos, CERT.br, SaferNet."
                    ]}
                    expanded={expandedAccordion === 4}
                    onPress={() => handleAccordionPress(4)}
                  />

                  <Accordion
                    title="Vigilância Não Autorizada"
                    content={[
                      "Monitoramento de atividades online ou offline sem o consentimento da pessoa, podendo envolver uso de spyware, câmeras ocultas, escutas ilegais ou rastreamento digital. \n \n",

                      <Text key="como-proteger-vigilancia" style={{ fontWeight: 'bold' }}>Como se proteger:</Text>, 
                      " Usar antivírus, manter privacidade das redes sociais, revisar permissões de apps e dispositivos. \n \n",

                      <Text key="como-denunciar-vigilancia" style={{ fontWeight: 'bold' }}>Como denunciar:</Text>,  
                      " Delegacia de Crimes Cibernéticos, SaferNet, órgãos de proteção de dados."
                    ]}
                    expanded={expandedAccordion === 5}
                    onPress={() => handleAccordionPress(5)}
                  />

                  <Accordion
                    title="Fraude ou Crime Financeiro"
                    content={[
                      "Atos criminosos que visam enganar pessoas ou empresas para obter vantagens financeiras, como golpes bancários, clonagem de cartões, e-commerce fraudulento. \n \n",

                      <Text key="como-proteger-fraude" style={{ fontWeight: 'bold' }}>Como se proteger:</Text>, 
                      " Verificar sempre a autenticidade de sites e contatos, ativar autenticação em dois fatores, monitorar extratos bancários. \n \n",

                      <Text key="como-denunciar-fraude" style={{ fontWeight: 'bold' }}>Como denunciar:</Text>,  
                      " Delegacia de Crimes Cibernéticos, Banco responsável, Procon, SaferNet."
                    ]}
                    expanded={expandedAccordion === 6}
                    onPress={() => handleAccordionPress(6)}
                  />

                  <Accordion
                    title="Desinformação / Fake News"
                    content={[
                      "Divulgação intencional de informações falsas ou enganosas com o objetivo de manipular, confundir ou influenciar pessoas. \n \n",

                      <Text key="como-proteger-fakenews" style={{ fontWeight: 'bold' }}>Como se proteger:</Text>, 
                      " Verificar a fonte antes de compartilhar, usar serviços de checagem, desconfiar de manchetes sensacionalistas. \n \n",

                      <Text key="como-denunciar-fakenews" style={{ fontWeight: 'bold' }}>Como denunciar:</Text>,  
                      " Plataformas de redes sociais, SaferNet, Agência Lupa, Aos Fatos."
                    ]}
                    expanded={expandedAccordion === 7}
                    onPress={() => handleAccordionPress(7)}
                  />

                  <View style={styles.legislacaoContainer}>
                    <Text style={styles.h1}>
                      Legislação Relevante
                    </Text>
          
                    
                    <View style={styles.legislacaoTextContainer}>
                      <Text style={styles.legislacao}>
                        LGPD - Lei Geral de Proteção de Dados (Lei nº 13.709/2018)
                      </Text>
                      <Text style={styles.h3}>
                        Regula o tratamento de dados pessoais no Brasil, garantindo direitos aos titulares e estabelecendo responsabilidades para empresas.
                      </Text>
                    </View>

                    <View style={styles.legislacaoTextContainer}>
                      <Text style={styles.legislacao}>
                        Marco Civil da Internet (Lei nº 12.965/2014)
                      </Text>
                      <Text style={styles.h3}>
                        Estabelece princípios, garantias, direitos e deveres para o uso da internet no Brasil.
                      </Text>
                    </View>

                    <View style={styles.legislacaoTextContainer}>
                      <Text style={styles.legislacao}>
                        Lei Carolina Dieckmann (Lei nº 12.737/2012)
                      </Text>
                      <Text style={styles.h3}>
                        Tipifica delitos informáticos, como invasão de dispositivos.
                      </Text>
                    </View>

                  </View>
                  
                  <View style={styles.apoioContainer}>

                    <Text style={styles.h1}>
                      Onde Buscar Apoio
                    </Text>

                    <View style={styles.apoioTextContainer}>
                      <Text style={styles.apoioTitulo}>
                        Apoio Jurídico
                      </Text>
                      <Text style={styles.h3}>
                        - Delegacia de Crimes Cibernéticos {`\n`}
                        - Defensoria Pública{`\n`}
                        - Procon{`\n`}
                        - OAB - Comissão de Direito Digital
                      </Text>
                    </View>

                    <View style={styles.apoioTextContainer}>
                      <Text style={styles.apoioTitulo}>
                        Apoio Psicológico
                      </Text>
                      <Text style={styles.h3}>
                      - CVV - Centro de Valorização da Vida (188) {`\n`}
                      - SaferNet Brasil {`\n`}
                      - CAPS - Centro de Atenção Psicossocial {`\n`}
                      </Text>
                    </View>

                  </View>


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
    borderTopLeftRadius: 35,
    borderBottomRightRadius: 35,
    borderTopRightRadius: 35,
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
    lineHeight: 40,
    margin: 13,
    width: 300,
    fontSize: 35,
    alignSelf: 'center',
    textAlign: 'center'
  },
  h3: {
    fontFamily: 'Rajdhani-SemiBold',
    fontSize: 18,
    textAlign: 'left',
    width: 290,
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
  legislacaoContainer:{
    marginTop: 30,
  },
  legislacaoTextContainer: {
    borderWidth: 2,
    borderColor: COLORS.orange,
    borderRadius: 12,
    marginBottom: 20
  },
  legislacao: {
    borderRadius:10,
    marginBottom:10,
    backgroundColor: COLORS.darkPurple,
    color: COLORS.light,
    padding:10,
    fontSize:22,
    fontFamily: 'Rajdhani-Bold',
    textAlign: 'center',
  },
  apoioContainer: {
    marginTop: 30,
  },
  apoioTextContainer:{
    borderWidth: 2,
    borderColor: COLORS.darkPurple,
    borderRadius: 12,
    marginBottom: 20
  },
  apoioText: {
    borderRadius:10,
    marginBottom:10,
    padding:10,
    fontSize:22,
    fontFamily: 'Rajdhani-Bold',
    textAlign: 'center',
  },
  apoioTitulo: {
    borderRadius:10,
    marginBottom:10,
    backgroundColor: COLORS.blue,
    color: COLORS.darkPurple,
    padding:10,
    fontSize:22,
    fontFamily: 'Rajdhani-Bold',
    textAlign: 'center',
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