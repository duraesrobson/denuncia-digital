import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { COLORS } from '../styles/global';

const OrangeButton = ({ text, href, style, textStyle }) => {
  return (
    <Link href={href}>
      <TouchableOpacity style={[styles.button, style]}>
        <Text style={[styles.text, textStyle]}>
          {text}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.orange,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    width: '100%',
  },
  text: {
    color: COLORS.darkPurple,
    fontSize: 16,
    fontFamily: 'Rajdhani-SemiBold',
  },
});

export default OrangeButton; 