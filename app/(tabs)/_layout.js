import React from 'react';
import { Tabs } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { COLORS } from 'app/styles/global';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.darkPurple,
        },
        headerTintColor: COLORS.light,
        tabBarStyle: {
          backgroundColor: COLORS.darkPurple,
          height: 80,
          paddingTop: 8,
        },
        tabBarActiveTintColor: COLORS.orange,
        tabBarInactiveTintColor: COLORS.blue,
        tabBarIconStyle: {
          height: 30,
          width: 30,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          marginTop: 3,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="denuncia"
        options={{
          title: 'Denúncia',
          tabBarIcon: ({ color, size }) => (
            <Feather name="file-plus" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <Feather name="bar-chart-2" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
} 