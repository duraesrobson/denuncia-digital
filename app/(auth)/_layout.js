import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AuthLayout = () => {
  return (
    <View style={styles.container}>
      <Text>Registrar</Text>
    </View>
  );
}

export default AuthLayout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
