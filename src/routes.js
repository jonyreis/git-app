import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Login from './page/Login'
import Home from './page/Home'

const Stack = createStackNavigator();

export default function routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
      <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
    </Stack.Navigator>
  )
}
