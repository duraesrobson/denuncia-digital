import React from 'react';
import { Slot, Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS } from 'app/styles/global';
import { useFonts } from 'expo-font';
import { LoadingScreen } from 'app/components/LoadingScreen';

const IndexLayout = () => {
  const [fontsLoaded] = useFonts({
    'Rajdhani-Light': require('../assets/fonts/Rajdhani-Light.ttf'),
    'Rajdhani-Regular': require('../assets/fonts/Rajdhani-Regular.ttf'),
    'Rajdhani-Medium': require('../assets/fonts/Rajdhani-Medium.ttf'),
    'Rajdhani-SemiBold': require('../assets/fonts/Rajdhani-SemiBold.ttf'),
    'Rajdhani-Bold': require('../assets/fonts/Rajdhani-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <LoadingScreen />;
  }

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
            fontFamily: 'Rajdhani-Bold',
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