import React from 'react';
import { Slot, Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS } from 'app/styles/global';

const IndexLayout = () => {
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.darkPurple,
          },
          headerTintColor: COLORS.light,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="index" 
          options={{
            headerShown: false
          }}
        />
        
        <Stack.Screen 
          name="(auth)/log-in" 
          options={{
            title: 'Login',
            headerShown: true
          }}
        />
        <Stack.Screen 
          name="(auth)/sign-up" 
          options={{
            title: 'Cadastro',
            headerShown: true
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}

export default IndexLayout;