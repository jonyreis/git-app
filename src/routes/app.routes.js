import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Home from '../page/Home';
import Repos from '../page/Repos';
import Followers from '../page/Followers';
import Following from '../page/Following';

const Tab = createBottomTabNavigator();

const AppRoutes = () => (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
              case 'Repos':
                iconName = 'github';
                break;
              case 'Followers':
                iconName = 'users';
                break;
              case 'Seguindo':
                iconName = 'users';
                break;
              default:
                iconName = 'circle';
                break;
            }

            return <Feather name={iconName} size={size} color={color} />;

          },
        })}
        tabBarOptions={{
          activeTintColor: '#000',
          inactiveTintColor: '#A5A5A5',
          iconStyle: { marginTop: '12px' },
          labelStyle: { fontSize: '14px', marginBottom: '16px' },
          style: {
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px',
            height: '80px',
            position: "absolute",
            bottom: 0
          }
        }}
    >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Repos" component={Repos} />
        <Tab.Screen name="Seguindo" component={Following} />
        </Tab.Navigator>
    </NavigationContainer>

);

export default AppRoutes;
