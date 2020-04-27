import { createStackNavigator } from '@react-navigation/stack';

import LoadingScreen from './Loading';
import WelcomeScreen from './Welcome';
import LoginScreen from './Login';
import SignUpScreen from './SignUp';

const AuthStack = createStackNavigator();
export const AuthStackScreen = () => (
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