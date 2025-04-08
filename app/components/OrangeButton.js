import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { COLORS } from '../styles/global';

const OrangeButton = ({ title, handlePress, href, style, textStyle }) => {
  return (
    
      <TouchableOpacity
      onPress={handlePress}
      style={[styles.button]}>
        <Text style={[styles.text]}>
          {title}
        </Text>
      </TouchableOpacity>
    
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.orange,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width:200
  },
  text: {
    color: COLORS.light,
    fontSize: 25,
    fontFamily: 'Rajdhani-SemiBold',
  },
});

export default OrangeButton; 