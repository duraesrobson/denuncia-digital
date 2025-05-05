import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { COLORS } from 'app/styles/global';

export const LoadingScreen = ({ backgroundColor = COLORS.darkPurple }) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <ActivityIndicator size="large" color={COLORS.orange} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
