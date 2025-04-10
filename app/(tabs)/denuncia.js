import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS } from 'app/styles/global';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import DropDownPicker from 'react-native-dropdown-picker';

export default function DenunciaScreen() {
  const [faixaEtariaOpen, setFaixaEtariaOpen] = useState(false);
  const [periodoOpen, setPeriodoOpen] = useState(false);
  const [tipoOpen, setTipoOpen] = useState(false);
  const [plataformaOpen, setPlataformaOpen] = useState(false);

  const [faixaEtaria, setFaixaEtaria] = useState('');
  const [periodoDeUso, setPeriodoDeUso] = useState('');
  const [tipo, setTipo] = useState('');
  const [plataforma, setPlataforma] = useState('');

  const [faixaEtariaItems, setFaixaEtariaItems] = useState([
    { label: '18-25 anos', value: '18-25' },
    { label: '26-30 anos', value: '26-30' },
    { label: '31-38 anos', value: '31-38' },
    { label: '38-45 anos', value: '38-45' },
    { label: '46-55 anos', value: '46-55' },
    { label: 'Acima de 55 anos', value: '55+' },
  ]);

  const [periodoItems, setPeriodoItems] = useState([
    { label: 'Manhã', value: 'manha' },
    { label: 'Tarde', value: 'tarde' },
    { label: 'Noite', value: 'noite' },
    { label: 'Madrugada', value: 'madrugada' },
  ]);

  const [tipoItems, setTipoItems] = useState([
    { label: 'Violação de Privacidade', value: 'privacidade' },
    { label: 'Cyberbullying', value: 'cyberbullying' },
    { label: 'Discurso de Ódio', value: 'discursoOdio' },
    { label: 'Ciberataque', value: 'ciberataque' },
    { label: 'Vigilância Não Autorizada', value: 'vigilancia' },
    { label: 'Censura / Restrição à Liberdade de Expressão', value: 'censura' },
    { label: 'Fraude ou Crime Financeiro', value: 'fraude' },
    { label: 'Desinformação / Fake News', value: 'fakenews' },
    { label: 'Outro', value: 'outro' },
  ]);

  const [plataformaItems, setPlataformaItems] = useState([
    { label: 'Facebook', value: 'facebook' },
    { label: 'WhatsApp', value: 'whatsapp' },
    { label: 'Instagram', value: 'instagram' },
    { label: 'X (Twitter)', value: 'twitter' },
    { label: 'TikTok', value: 'tiktok' },
    { label: 'YouTube', value: 'youtube' },
    { label: 'Outro', value: 'outraPlataforma' },
  ]);

  const enviarDenuncia = async () => {
    if (!faixaEtaria || !periodoDeUso || !tipo || !plataforma) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    try {
      await addDoc(collection(db, 'denuncias'), {
        faixaEtaria,
        periodoDeUso,
        tipo,
        plataforma,
        criadoEm: new Date(),
      });

      Alert.alert('Sucesso', 'Denúncia enviada com sucesso!');
      setFaixaEtaria('');
      setPeriodoDeUso('');
      setTipo('');
      setPlataforma('');
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível enviar a denúncia.');
    }
  };

  return (
    <SafeAreaProvider>
      <KeyboardAvoidingView
        style={styles.container}
      >

        {/* picker da faixa etaria */}
        <Text style={styles.label}>Selecione sua faixa etária:</Text>
        <DropDownPicker
          open={faixaEtariaOpen}
          value={faixaEtaria}
          items={faixaEtariaItems}
          setOpen={(open) => {
            setFaixaEtariaOpen(open);
            if (open) {
              setPeriodoOpen(false);
              setTipoOpen(false);
            }
          }}
          setValue={setFaixaEtaria}
          setItems={setFaixaEtariaItems}
          placeholder="Selecione..."
          style={styles.picker}
          dropDownContainerStyle={styles.dropdown}
          zIndex={3000}
          zIndexInverse={1000}
        />

        {/* picker do perido */}
        <Text style={styles.label}>Período em que mais usa a internet:</Text>
        <DropDownPicker
          open={periodoOpen}
          value={periodoDeUso}
          items={periodoItems}
          setOpen={(open) => {
            setPeriodoOpen(open);
            if (open) {
              setFaixaEtariaOpen(false);
              setTipoOpen(false);
            }
          }}
          setValue={setPeriodoDeUso}
          setItems={setPeriodoItems}
          placeholder="Selecione..."
          style={styles.picker}
          dropDownContainerStyle={styles.dropdown}
          zIndex={2000}
          zIndexInverse={2000}
        />

        {/* picker tipo */}
        <Text style={styles.label}>Tipo de violação sofrida ou testemunhada:</Text>
        <DropDownPicker
          open={tipoOpen}
          value={tipo}
          items={tipoItems}
          setOpen={(open) => {
            setTipoOpen(open);
            if (open) {
              setFaixaEtariaOpen(false);
              setPeriodoOpen(false);
              
            }
          }}
          setValue={setTipo}
          setItems={setTipoItems}
          placeholder="Selecione..."
          style={styles.picker}
          dropDownContainerStyle={styles.dropdown}
          zIndex={1000}
          zIndexInverse={3000}
        />

        {/* picker plataforma */}
        <Text style={styles.label}>Plataforma onde ocorreu:</Text>
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
            }
          }}
          setValue={setPlataforma}
          setItems={setPlataformaItems}
          placeholder="Selecione..."
          style={styles.picker}
          dropDownContainerStyle={styles.dropdown}
          zIndex={1000}
          zIndexInverse={3000}
        />

        <Button title="Enviar Denúncia" onPress={enviarDenuncia} />
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
    padding: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
    color: COLORS.darkPurple,
  },
  picker: {
    backgroundColor: '#f0f0f0',
    color: COLORS.darkPurple,
    marginBottom: 20,
    fontSize: 15
  },
  
});