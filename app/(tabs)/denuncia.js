import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, TextInput, FlatList, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS } from 'app/styles/global';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import DropDownPicker from 'react-native-dropdown-picker';
import OrangeButton from '@components/OrangeButton';

export default function DenunciaScreen() {
  const [faixaEtariaOpen, setFaixaEtariaOpen] = useState(false);
  const [periodoOpen, setPeriodoOpen] = useState(false);
  const [tipoOpen, setTipoOpen] = useState(false);
  const [plataformaOpen, setPlataformaOpen] = useState(false);
  const [impactoOpen, setImpactoOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);

  const [faixaEtaria, setFaixaEtaria] = useState('');
  const [periodoDeUso, setPeriodoDeUso] = useState('');
  const [tipo, setTipo] = useState('');
  const [plataforma, setPlataforma] = useState('');
  const [impacto, setImpacto] = useState('');
  const [report, setReport] = useState('');
  const [descricao, setDescricao] = useState('');

  const [faixaEtariaItems, setFaixaEtariaItems] = useState([
    { label: '18-25 anos', value: '18-25 ANOS' },
    { label: '26-30 anos', value: '26-30 ANOS' },
    { label: '31-38 anos', value: '31-38 ANOS' },
    { label: '38-45 anos', value: '38-45 ANOS' },
    { label: '46-55 anos', value: '46-55 ANOS' },
    { label: 'Acima de 55 anos', value: 'Acima de 55 anos' },
  ]);

  const [periodoItems, setPeriodoItems] = useState([
    { label: 'Manhã (06-12h)', value: 'manhÃ' },
    { label: 'Tarde (12-18h)', value: 'tarde' },
    { label: 'Noite (18-00h)', value: 'noite' },
    { label: 'Madrugada (00-06h)', value: 'madrugada' },
  ]);

  const [tipoItems, setTipoItems] = useState([
    { label: 'Violação de Privacidade', value: 'privacidade' },
    { label: 'Cyberbullying', value: 'cyberbullying' },
    { label: 'Discurso de Ódio', value: 'Discurso de ódio' },
    { label: 'Ciberataque ou invasão de dispositivos/contas', value: 'ciberataque' },
    { label: 'Desinformação / Fake News', value: 'Fake News' },
    { label: 'Stalking digital (perseguição online', value: 'stalking' },
    { label: 'Exposição não consentida de informações pessoais (doxxing)', value: 'doxxing' },
    { label: 'Fraude ou Crime Financeiro', value: 'fraude' },
    { label: 'Compartilhamento não consensual de imagens íntimas', value: 'Conteudo Intimo' },
    { label: 'Perfil falso / identidade falsa', value: 'falsidade Ideológica' },
    { label: 'Vigilância Não Autorizada', value: 'vigilancia não autorizada' },
    { label: 'Censura / Restrição à Liberdade de Expressão', value: 'censura' },
    { label: 'Outro', value: 'outro' },
  ]);

  const [plataformaItems, setPlataformaItems] = useState([
    { label: 'Facebook', value: 'facebook' },
    { label: 'WhatsApp', value: 'whatsapp' },
    { label: 'Instagram', value: 'instagram' },
    { label: 'X (Twitter)', value: 'twitter' },
    { label: 'TikTok', value: 'tiktok' },
    { label: 'YouTube', value: 'youtube' },
    { label: 'Discord', value: 'discord' },
    { label: 'Telegram', value: 'telegram' },
    { label: 'Reddit', value: 'reddit' },
    { label: 'Outro', value: 'outra Plataforma' },
  ]);

  const [impactoItems, setImpactoItems] = useState([
    { label: 'Emocional/Psicológico', value: 'emocional' },
    { label: 'Financeiro', value: 'financeiro' },
    { label: 'Profissional', value: 'profissional' },
    { label: 'Social', value: 'social' },
    { label: 'Múltiplos impactos', value: 'multiplos impactos' },
]);

  const [reportItems, setReportItems] = useState([
    { label: 'Sim', value: 'reportado' },
    { label: 'Não', value: 'naoReportado' },
  ]);

  const enviarDenuncia = async () => {
    if (!faixaEtaria || !periodoDeUso || !tipo || !plataforma || !impacto || !report || !descricao) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    try {
      await addDoc(collection(db, 'denuncias'), {
        faixaEtaria,
        periodoDeUso,
        tipo,
        plataforma,
        impacto,
        report,
        descricao,
        criadoEm: new Date(),
      });

      Alert.alert('Sucesso', 'Denúncia enviada com sucesso!');
      setFaixaEtaria('');
      setPeriodoDeUso('');
      setTipo('');
      setPlataforma('');
      setImpacto('');
      setReport('');
      setDescricao('');
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível enviar a denúncia.');
    }
  };

  const formFields = [
    {
      key: 'faixaEtaria',
      label: 'Selecione sua faixa etária:',
      component: (
        <DropDownPicker
          open={faixaEtariaOpen}
          value={faixaEtaria}
          items={faixaEtariaItems}
          setOpen={(open) => {
            setFaixaEtariaOpen(open);
            if (open) {
              setPeriodoOpen(false);
              setTipoOpen(false);
              setPlataformaOpen(false);
              setImpactoOpen(false);
              setReportOpen(false);
            }
          }}
          setValue={setFaixaEtaria}
          setItems={setFaixaEtariaItems}
          placeholder="Selecione..."
          style={styles.picker}
          listMode='SCROLLVIEW'
          dropDownContainerStyle={styles.dropdown}
          zIndex={5000}
          zIndexInverse={4000}
        />
      ),
    },
    {
      key: 'periodoDeUso',
      label: 'Período em que ocorreu a violação:',
      component: (
        <DropDownPicker
          open={periodoOpen}
          value={periodoDeUso}
          items={periodoItems}
          setOpen={(open) => {
            setPeriodoOpen(open);
            if (open) {
              setFaixaEtariaOpen(false);
              setTipoOpen(false);
              setPlataformaOpen(false);
              setImpactoOpen(false);
              setReportOpen(false);
            }
          }}
          setValue={setPeriodoDeUso}
          setItems={setPeriodoItems}
          placeholder="Selecione..."
          style={styles.picker}
          dropDownContainerStyle={styles.dropdown}
          zIndex={4000}
          listMode='SCROLLVIEW'
          zIndexInverse={3000}
        />
      ),
    },
    {
      key: 'tipo',
      label: 'Tipo de violação sofrida ou testemunhada:',
      component: (
        <DropDownPicker
          open={tipoOpen}
          value={tipo}
          items={tipoItems}
          setOpen={(open) => {
            setTipoOpen(open);
            if (open) {
              setFaixaEtariaOpen(false);
              setPeriodoOpen(false);
              setPlataformaOpen(false);
              setImpactoOpen(false);
              setReportOpen(false);
            }
          }}
          setValue={setTipo}
          setItems={setTipoItems}
          placeholder="Selecione..."
          style={styles.picker}
          listMode='SCROLLVIEW'
          dropDownContainerStyle={styles.dropdown}
          zIndex={3000}
          zIndexInverse={5000}
        />
      ),
    },
    {
      key: 'plataforma',
      label: 'Plataforma onde ocorreu:',
      component: (
        <DropDownPicker
          open={plataformaOpen}
          value={plataforma}
          items={plataformaItems}
          setOpen={(open) => {
            setPlataformaOpen(open);
            if (open) {
              setFaixaEtariaOpen(false);
              setPeriodoOpen(false);
              setTipoOpen(false);
              setImpactoOpen(false);
              setReportOpen(false);
            }
          }}
          setValue={setPlataforma}
          setItems={setPlataformaItems}
          placeholder="Selecione..."
          style={styles.picker}
          listMode='SCROLLVIEW'
          dropDownContainerStyle={styles.dropdown}
          zIndex={2000}
          zIndexInverse={5000}
        />
      ),
    },

    {
      key: 'impacto',
      label: 'Principal impacto sofrido:',
      component: (
        <DropDownPicker
          open={impactoOpen}
          value={impacto}
          items={impactoItems}
          setOpen={(open) => {
            setImpactoOpen(open);
            if (open) {
              setFaixaEtariaOpen(false);
              setPeriodoOpen(false);
              setTipoOpen(false);
              setReportOpen(false);
              setPlataformaOpen(false);
            }
          }}
          setValue={setImpacto}
          setItems={setImpactoItems}
          placeholder="Selecione..."
          style={styles.picker}
          listMode='SCROLLVIEW'
          dropDownContainerStyle={styles.dropdown}
          zIndex={1000}
          zIndexInverse={6000}
        />
      ),
    },

    {
      key: 'report',
      label: 'A violação foi reportada à plataforma ou autoridades?',
      component: (
        <DropDownPicker
          open={reportOpen}
          value={report}
          items={reportItems}
          setOpen={(open) => {
            setReportOpen(open);
            if (open) {
              setFaixaEtariaOpen(false);
              setPeriodoOpen(false);
              setTipoOpen(false);
              setPlataformaOpen(false);
            }
          }}
          setValue={setReport}
          setItems={setReportItems}
          placeholder="Selecione..."
          style={styles.picker}
          listMode='SCROLLVIEW'
          dropDownContainerStyle={styles.dropdown}
          zIndex={900}
          zIndexInverse={500}
        />
      ),
    },
    {
      key: 'descricao',
      label: 'Descreva a violação ocorrida:',
      component: (
        <TextInput
          style={styles.textArea}
          placeholder="Digite aqui a descrição da violação..."
          value={descricao}
          onChangeText={setDescricao}
          multiline
          numberOfLines={20}
          textAlignVertical="top"
          autoCapitalize="sentences"
          blurOnSubmit={false}
        />
      ),
    },
  ];

  return (
    <SafeAreaProvider>
      <FlatList
        data={formFields}
        keyExtractor={(item) => item.key}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        removeClippedSubviews={false}
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            <View>
              <Image 
                style={styles.bgImg}
                source={require('@assets/images/squares-background.png')}
              />
              <Text style={styles.titulo}>
                Denunciar uma Violação de Direitos Digitais
              </Text>
              <Text style={styles.descricao}>
                Utilize este formulário para denunciar anonimamente uma violação de direitos no ambiente digital.
              </Text>
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.info}>
                <Text style={styles.important}>Importante:</Text> Este formulário é totalmente anônimo. Não coletamos dados pessoais que possam identificá-lo.
              </Text>
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.mainContainer}>
            <View style={styles.formContentContainer}>
              <View style={styles.formItem}>
                <Text style={styles.label}>{item.label}</Text>
                {item.component}
              </View>
            </View>
          </View>
        )}
        ListFooterComponent={
          <View style={styles.mainContainer}>
            <OrangeButton 
              title="Enviar denúncia"
              handlePress={enviarDenuncia}
            />
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
  },
  headerContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: COLORS.darkPurple,
    position: 'relative',
    marginBottom: 15
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
    fontSize: 16,
    color: COLORS.darkPurple,
    textAlign: 'center',
    fontFamily: 'Rajdhani-Bold',
  },
  info:{
    alignSelf: 'center',
    fontSize: 16,
    color: COLORS.darkPurple,
    textAlign: 'center',
    fontFamily: 'Rajdhani-Regular',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
    color: COLORS.darkPurple,
  },
  picker: {
    backgroundColor: COLORS.light,
    color: COLORS.darkPurple,
    marginBottom: 20,
    fontSize: 15,
    borderColor: COLORS.orange,
  },
  textArea: {
    borderWidth: 1,
    borderColor: COLORS.orange,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: COLORS.light,
    fontSize: 15,
    textAlignVertical: 'top',
  },
  formContentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  formItem: {
    width: '95%',
    margin: 15    
  },
  mainContainer: {
    backgroundColor: COLORS.light,
    padding: 15,
    borderRadius: 30,
    marginTop: -45
  },
});