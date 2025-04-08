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
        <Image
          source={require('@assets/images/logo-192.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Avatar
          size={45}
          rounded
          onPress={() => router.back()}
          icon={{ name: "arrow-left", type: "font-awesome", color: COLORS.light }}
          containerStyle={{ backgroundColor: COLORS.orange }}
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
    height: 90,
    backgroundColor: COLORS.darkPurple,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    gap: 170 
  },
  logo: {
    width: 140,
    height: 140,
  },
  avatar: {
    width: 140,
    height: 140
  }
});

export default CustomHeader; 