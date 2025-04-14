import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { COLORS } from '../styles/global';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar } from '@rneui/themed';
import { router } from 'expo-router';

const CustomHeader = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.content}>
        <Avatar
          size={40}
          rounded
          onPress={() => router.back()}
          icon={{ name: "arrow-left", type: "font-awesome", color: COLORS.light }}
          containerStyle={{ backgroundColor: COLORS.darkPurple }}
        />
        <Image
          source={require('@assets/images/logo-192.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        </View>



      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: COLORS.darkPurple,
},
  header: {
    height: 60,
    backgroundColor: COLORS.darkPurple,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: 'center',
    gap: 170
  },
  logo: {
    width: 110,
    height: 110,
  },
  avatar: {
    width: 120,
    height: 120
  }
});

export default CustomHeader; 