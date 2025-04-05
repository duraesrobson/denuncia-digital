import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titulo}>Dashboard</Text>
        <Text style={styles.descricao}>Veja os gráficos</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  descricao:{
    fontSize: 20,
    fontWeight: 'regular',
    marginBottom: 10,
    textAlign: 'center'
  }
});