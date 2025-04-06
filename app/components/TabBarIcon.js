import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const TabBarIcon = ({ name, color, size = 35}) => {
  return (
    <View style={styles.container}>
      <Feather name={name} size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabBarIcon; 