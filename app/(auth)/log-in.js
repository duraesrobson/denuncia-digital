import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LogIn = () => {
  return (
    <View style={styles.container}>
      <Text>Log-In</Text>
    </View>
  );
}

export default LogIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
