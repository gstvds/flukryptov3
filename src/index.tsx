import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from 'styled-components';
import theme from '~/helpers/theme';

import core from '~/core';
import { usePulse } from '../pulse/dist';

import Routes from '~/pages/routes';

const App = () => {
  const [themed] = usePulse([core.themed])
  return (
    <ThemeProvider theme={themed ? theme.dark : theme.light} >
      <NavigationContainer>
        <StatusBar
          backgroundColor={themed ? theme.dark.statusbar_color : theme.light.statusbar_color}
          barStyle={themed ? 'light-content' : 'dark-content'}
        />
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
