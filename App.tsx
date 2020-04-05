import React from 'react';
import { NavigationContainer, useRoute, Route } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WelcomeScreen from './src/pages/Authentication/Welcome';
import LoginScreen from './src/pages/Authentication/Login';
import SignUpScreen from './src/pages/Authentication/SignUp';
import HomeScreen from './src/pages/Main/Home';

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="SignUp" component={SignUpScreen} />
  </AuthStack.Navigator>
);

const HomeStack = createBottomTabNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />
  </HomeStack.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = () => (
  <RootStack.Navigator screenOptions={{ headerShown: false }}>
    <RootStack.Screen name="Auth" children={AuthStackScreen} />
    <RootStack.Screen name="Home" children={HomeStackScreen} />
  </RootStack.Navigator>
)

const App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default App;
