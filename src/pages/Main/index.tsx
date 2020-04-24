import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from './Home';
import SettingsScreen from './Settings';
import FavoritesScreen from './Favorites';

import { ThemeContext } from 'styled-components';

const HomeStack = createMaterialBottomTabNavigator();
export const HomeStackScreen = () => {
  const theme: any = useContext(ThemeContext);
  return (
  <HomeStack.Navigator
    activeColor={theme.green}
    inactiveColor={theme.icon}
    shifting={true}
    screenOptions={{
      tabBarColor: theme.background, 
    }}
    labeled={false}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" size={22} color={color} />
        ),
        tabBarLabel: 'Home',
      }}
    />
    <HomeStack.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name="ios-star" size={22} color={color} />
        ),
        tabBarLabel: 'Favoritas',
      }}
    />
    <HomeStack.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name="ios-settings" size={22} color={color} />
        ),
        tabBarLabel: 'Configurações'
      }}
    />
  </HomeStack.Navigator>
)};