import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS } from '../styles/global';
import OrangeButton from './OrangeButton';

const ContentCard = ({ imageSource, title, description, buttonTitle, onPress }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        {imageSource && (
          <Image 
            source={imageSource}
            style={styles.image}
            resizeMode="contain"
          />
        )}
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <OrangeButton 
        title={buttonTitle}
        handlePress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.light,
    borderRadius: 12,
    padding: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginTop: 40
  },
  imageContainer: {
    width: 300,
    height: 300,
    backgroundColor: COLORS.light,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  image: {
    width: 285,
    height: 285,
    marginBottom: 10
  },
  title: {
    fontSize: 28,
    fontFamily: 'Rajdhani-Bold',
    color: COLORS.darkPurple,
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    fontFamily: 'Rajdhani-Regular',
    color: COLORS.darkPurple,
    marginBottom: 15,
  },
});

export default ContentCard;