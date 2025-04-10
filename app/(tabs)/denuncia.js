import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from 'app/styles/global';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { Picker } from '@react-native-picker/picker';

export default function DenunciaScreen() {
  const [faixaEtaria, setFaixaEtaria] = useState('');

  const enviarDenuncia = async () => {
    if (!faixaEtaria) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    try {
      await addDoc(collection(db, 'denuncias'), {
        faixaEtaria,
        data: new Date().toISOString()
      });

      Alert.alert('Sucesso', 'Denúncia enviada com sucesso!');
      setFaixaEtaria('');
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível enviar a denúncia.');
    }
  };

return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView>
      <View>
      <Text style={styles.label}>Selecione sua faixa etária:</Text>
      <Picker
        selectedValue={faixaEtaria}
        onValueChange={(itemValue) => setFaixaEtaria(itemValue)} 
      >
        <Picker.Item label='Selecione...' value='' />
        <Picker.Item label='18-25 anos' value='18-25' />
        <Picker.Item label="26-30 anos" value="26-30" />
        <Picker.Item label="31-38 anos" value="31-38" />
        <Picker.Item label="38-45 anos" value="38-45" />
        <Picker.Item label="46-55 anos" value="46-55" />
        <Picker.Item label="Acima de 55 anos" value="55+" />
      
      </Picker>

      

      <Button title="Enviar Denúncia" onPress={enviarDenuncia} />
    </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 25,
    color: COLORS.darkPurple,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  descricao:{
    fontSize: 20,
    color: COLORS.orange,
    fontWeight: 'regular',
    marginBottom: 10,
    textAlign: 'center'
  },
  label: { marginTop: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 5,
    marginBottom: 10
  }
}); 