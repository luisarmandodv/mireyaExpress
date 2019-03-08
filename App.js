import { AppNavigator } from './src/navigation/navigator';
import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
