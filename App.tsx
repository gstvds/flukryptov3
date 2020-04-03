import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/pages/Authentication/Login';
import SignUpScreen from './src/pages/Authentication/SignUp';

const Stack = createStackNavigator();

const App: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen
        name="Login"
        component={LoginScreen}
        />
        <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
