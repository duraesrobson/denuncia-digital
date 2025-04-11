import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { COLORS } from '../styles/global';

const OrangeButton = ({ title, handlePress, href, style, textStyle }) => {
  return (
    <TouchableOpacity onPress={handlePress} style={[styles.button, style]}>
      <Text style={[styles.text, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.orange,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 300,
    margin: 10
  },
  text: {
    color: COLORS.light,
    fontSize: 22,
    fontFamily: 'Rajdhani-SemiBold',
  },
});

export default OrangeButton; 