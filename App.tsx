import React from 'react';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, fonts } from '~/helpers';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WelcomeScreen from './src/pages/Authentication/Welcome';
import LoginScreen from './src/pages/Authentication/Login';
import SignUpScreen from './src/pages/Authentication/SignUp';
import HomeScreen from './src/pages/Main/Home';
import FavoritesScreen from './src/pages/Main/Favorites';

import Header from '~/components/Header';

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="SignUp" component={SignUpScreen} />
  </AuthStack.Navigator>
);

const HomeStack = createBottomTabNavigator();
const WrapperStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator tabBarOptions={{
    activeTintColor: colors.green,
    inactiveTintColor: colors.light_dark_grey,
    labelStyle: {
      fontFamily: fonts.quicksand
    },
  }} >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color }) => <Icon name='ios-home' size={22} color={color}/>,
        tabBarLabel: 'Home',
      }}  
    />
    <HomeStack.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={{
        tabBarIcon: ({ color }) => <Icon name='ios-star' size={22} color={color}/>,
        tabBarLabel: 'Favorites'
      }}  
    />
  </HomeStack.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = () => (
  <RootStack.Navigator screenOptions={{ headerShown: false }}>
    <RootStack.Screen
      name="Auth"
      children={AuthStackScreen} />
    <RootStack.Screen
      name="Home"
      children={HomeStackScreen}
    />
  </RootStack.Navigator>
)

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar  backgroundColor={colors.light_background} barStyle='dark-content' />
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default App;
