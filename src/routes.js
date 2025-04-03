import React from 'react';
import { Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import Denuncia from './pages/Denuncia';
import Dashboard from './pages/Dashboard';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                height: 90,
                paddingTop: 8,
                justifyContent: 'center',
                alignItems: 'center',
            },
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