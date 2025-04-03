import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import Denuncia from './pages/Denuncia';
import Dashboard from './pages/Dashboard';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Início" component={Home}/>
            <Tab.Screen name="Denuncia" component={Denuncia}/>
            <Tab.Screen name="Dashboard" component={Dashboard}/>
            </Tab.Navigator>
    )
}