import React from 'react';
import { Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

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
        <Image
            style={{
                width: 150,
                marginBottom: 25,
                resizeMode: 'contain'
            }}
            source={require('../assets/logo-192.png')}
        />
    );
}

export default function Routes(){
    return(
        <Tab.Navigator 
            screenOptions={{
                headerTitle: (props) => <LogoTitle {...props} />,
                headerStyle: {
                    backgroundColor: '#041615',
                    height: 80,
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
                    backgroundColor: '#041615',
                },
                tabBarActiveTintColor: '#ff3f01',
                tabBarInactiveTintColor: '#01fafa',
                tabBarIconStyle: {
                    flex:1,
                    height: 35,
                    width: 35,
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                tabBarLabelStyle: {
                    flex:1,
                    fontSize: 15,
                    fontWeight: 'regular',
                }
            }}>
            <Tab.Screen 
                name="Início" 
                component={Home}
                options={{
                    tabBarIcon: ({size, color}) => <Feather name='home' color={color} size={35}/>
                }}
            />

            <Tab.Screen 
                name="Denúncia" 
                component={Denuncia}
                options={{
                    tabBarIcon: ({size, color}) => <Feather name='file-plus' color={color} size={35}/>
                }}
            />

            <Tab.Screen 
                name="Dashboard" 
                component={Dashboard}
                options={{
                    tabBarIcon: ({size, color}) => <Feather name='bar-chart-2' color={color} size={35}/>
                }}
            />
        </Tab.Navigator>
    )
}