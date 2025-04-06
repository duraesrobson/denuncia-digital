import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { COLORS } from 'app/styles/global';


const DefaultButton = ({ text, href, onPress, style, textStyle }) => {
  const buttonContent = (
    <Text style={[styles.text, textStyle]}>{text}</Text>
  );

  // Se tiver href, renderiza como Link
  if (href) {
    return (
      <Link href={href} asChild>
        <TouchableOpacity style={[styles.button, style]}>
          {buttonContent}
        </TouchableOpacity>
      </Link>
    );
  }

  // Caso contrário, renderiza como botão normal
  return (
    <TouchableOpacity 
      style={[styles.button, style]} 
      onPress={onPress}
    >
      {buttonContent}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.orange,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    elevation: 3,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  text: {
    color: COLORS.light,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Rajdhani-Bold',
  },
});

export default DefaultButton;
