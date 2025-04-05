import React from 'react';
import  { NavigationContainer } from '@react-navigation/native'
import Routes from './app/src/routes';


export default function App() {
  return (
   <NavigationContainer>
    <Routes/>
   </NavigationContainer>
  );
}

