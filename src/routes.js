import React from 'react';
import { Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, SafeAreaView } from 'react-native';

import Home from './pages/Home';
import Denuncia from './pages/Denuncia';
import Dashboard from './pages/Dashboard';

// COLORS
//   darkRed: '#ff0400',
//   lightRed: '#ff3f01',
//   darkBlue: '#01deea',
//   lightBlue: '#01fafa',
//   dark: '#041615',

const Tab = createBottomTabNavigator();

function LogoTitle() {
    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Image
                style={{
                    width: 145,
                    resizeMode: 'contain',
                }}
                source={require('../assets/logo-192.png')}
            />
        </SafeAreaView>
    );
}

export default function Routes(){
    return(
        <Tab.Navigator 
            screenOptions={{
                headerTitle: (props) => <LogoTitle {...props} />,
                headerStyle: {
                    backgroundColor: 'black',
                    height: 100
                },
                headerTitleAlign: 'center',
                headerTitleContainerStyle: {
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                tabBarStyle: {
                    height: 80,
                    paddingTop: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'black',
                },
                tabBarActiveTintColor: '#ff3f01',
                tabBarInactiveTintColor: '#01fafa',
                tabBarIconStyle: {
                    
                    height: 30,
                    width: 30,
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                tabBarLabelStyle: {
                    flex:1,
                    fontSize: 13,
                    marginTop: 3,
                    fontWeight: 'regular',
                }
            }}>
            <Tab.Screen 
                name="Início" 
                component={Home}
                options={{
                    tabBarIcon: ({size, color}) => <Feather name='home' color={color} size={31}/>
                }}
            />

            <Tab.Screen 
                name="Denúncia" 
                component={Denuncia}
                options={{
                    tabBarIcon: ({size, color}) => <Feather name='file-plus' color={color} size={31}/>
                }}
            />

            <Tab.Screen 
                name="Dashboard" 
                component={Dashboard}
                options={{
                    tabBarIcon: ({size, color}) => <Feather name='bar-chart-2' color={color} size={31}/>
                }}
            />
        </Tab.Navigator>
    )
}