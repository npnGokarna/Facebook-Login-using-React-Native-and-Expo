import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {TabNavigator} from 'react-navigation';

import AuthScreen from './screens/AuthScreen';
import DeckScreen from './screens/DeckScreen';

export default class App extends React.Component {
  render() {

    const MainNavigator = TabNavigator({
      //define a key and define what screen to go to
      deckScreen: {screen: DeckScreen},
      authScreen: {screen: AuthScreen}
    });
    return (
      <MainNavigator />
    );
  }
}
