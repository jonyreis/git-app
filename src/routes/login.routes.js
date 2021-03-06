import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../page/Login';

const Stack = createStackNavigator();

const LoginRoutes = () => (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>

);

export default LoginRoutes;
