import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import WelcomeScreen from './src/pages/Authentication/Welcome';
import LoginScreen from './src/pages/Authentication/Login';
import SignUpScreen from './src/pages/Authentication/SignUp';
import LoadingScreen from './src/pages/Authentication/Loading';
import HomeScreen from './src/pages/Main/Home';
import FavoritesScreen from './src/pages/Main/Favorites';
import SettingsScreen from './src/pages/Main/Settings';

import { ThemeProvider, ThemeContext } from 'styled-components';
import theme from '~/helpers/theme';

import core from '~/core';
import { usePulse } from './pulse/dist';

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator
    initialRouteName="Loading"
    screenOptions={{ headerShown: false }}
  >
    <AuthStack.Screen name="Loading" component={LoadingScreen} />
    <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="SignUp" component={SignUpScreen} />
  </AuthStack.Navigator>
);

const HomeStack = createMaterialBottomTabNavigator();
const HomeStackScreen = () => {
  const theme: any = useContext(ThemeContext);
  return (
  <HomeStack.Navigator
    activeColor={theme.green}
    inactiveColor={theme.icon}
    shifting={true}
    screenOptions={{
      tabBarColor: theme.background
    }}
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

const RootStack = createStackNavigator();
const RootStackScreen = () => (
  <RootStack.Navigator screenOptions={{ headerShown: false }}>
    <RootStack.Screen name="Auth" children={AuthStackScreen} />
    <RootStack.Screen name="Home" children={HomeStackScreen} />
  </RootStack.Navigator>
);

const App = () => {
  const [themed] = usePulse([core.themed])
  return (
    <ThemeProvider theme={themed ? theme.dark : theme.light} >
      <NavigationContainer>
        <StatusBar
          backgroundColor={themed ? theme.dark.statusbar_color : theme.light.statusbar_color}
          barStyle={themed ? 'light-content' : 'dark-content'}
        />
        <RootStackScreen />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
