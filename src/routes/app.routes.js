import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../page/Home';

const Tab = createBottomTabNavigator();

const LoginRoutes = () => (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        {/* <Tab.Screen name="Repos" component={Repos} /> */}
        {/* <Tab.Screen name="Seguidores" component={Seguidores} /> */}
        {/* <Tab.Screen name="Seguindo" component={Seguindo} /> */}
      </Tab.Navigator>
    </NavigationContainer>

);

export default LoginRoutes;
