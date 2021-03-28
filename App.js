import React from 'react';
import WelcomeScreen from './screens/WelcomeScreen';
import {AppTabNavigator} from './components/AppTabNavigator';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppDrawerNavigator} from './components/AppDrawerNavigator';

export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen: {
    screen: WelcomeScreen
  },
  BottomTab: {
    screen: AppDrawerNavigator
  }
})

const AppContainer = createAppContainer(switchNavigator);