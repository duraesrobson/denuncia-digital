import React from 'react';
import { Tabs } from 'expo-router';
import { COLORS } from 'app/styles/global';
import TabBarIcon from 'app/components/TabBarIcon';

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
          paddingBottom: 8,
        },
        tabBarActiveTintColor: COLORS.orange,
        tabBarInactiveTintColor: COLORS.blue,
        tabBarLabelStyle: {
          fontSize: 13,
          fontFamily: 'Rajdhani-SemiBold',
          marginTop: 4,
        },
        tabBarItemStyle: {
          paddingVertical: 4,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="denuncia"
        options={{
          title: 'Denúncia',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="file-plus" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="bar-chart-2" color={color} />
          ),
        }}
      />
    </Tabs>
  );
} 