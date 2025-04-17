import React from 'react';
import { Tabs } from 'expo-router';
import { COLORS } from 'app/styles/global';
import TabBarIcon from 'app/components/TabBarIcon';
import CustomHeader from 'app/components/CustomHeader';
import { StatusBar } from 'expo-status-bar';
export default function TabsLayout() {
  return (
    <>
      <StatusBar 
        style="light"
        backgroundColor={COLORS.darkPurple}
      />
      <CustomHeader />
      
      <Tabs
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: COLORS.darkPurple,
          },
          headerTintColor: COLORS.light,
          tabBarStyle: {
            backgroundColor: COLORS.darkPurple,
            height: 60,
            paddingTop: 6,
            paddingBottom: 4,
            alignSelf:'center',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          },
          tabBarActiveTintColor: COLORS.orange,
          tabBarInactiveTintColor: COLORS.blue,
          tabBarLabelStyle: {
            fontSize: 15,
            fontFamily: 'Rajdhani-SemiBold',
          },
          tabBarItemStyle: {
            paddingVertical: -4,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Início',
            tabBarIcon: ({ color, size }) => (
              <TabBarIcon name="home" color={color} size={28} />
            ),
          }}
        />
        <Tabs.Screen
          name="direitos"
          options={{
            title: 'Direitos',
            tabBarIcon: ({ color, size }) => (
              <TabBarIcon name="book-open" color={color} size={28} />
            ),
          }}
        />
        <Tabs.Screen
          name="denuncia"
          options={{
            title: 'Denúncia',
            tabBarIcon: ({ color, size }) => (
              <TabBarIcon name="file-plus" size={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="dashboard"
          options={{
            title: 'Dashboard',
            tabBarIcon: ({ color, size }) => (
              <TabBarIcon name="bar-chart-2" color={color} size={28} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}