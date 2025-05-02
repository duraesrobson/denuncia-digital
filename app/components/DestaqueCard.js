import { COLORS } from '@styles/global';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DestaqueCard = ({ titulo, nome, total }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.total}>{total} denúncias</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.darkPurple,
    paddingTop: 25,
    paddingBottom: 25,
    borderWidth: 2,
    borderColor: COLORS.light,
    borderRadius: 16,
    marginTop: 15,
    width: 250,
    margin: 10,
    height: 320,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titulo: {
    color: COLORS.orange,
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Rajdhani-SemiBold',
  },
  nome: {
    color: COLORS.light,
    fontSize: 25,
    fontFamily: 'Rajdhani-Bold',
    textTransform: 'uppercase' 
},
  total: {
    fontFamily: 'Rajdhani-SemiBold',
    color: COLORS.blue,
    fontSize: 18,
    marginTop: 8,
    textAlign: 'left'
  },
});

export default DestaqueCard;
