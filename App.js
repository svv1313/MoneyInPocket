import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from './src/router/TabNavigator';

class App extends Component {
  render() {
    return (
      <TabNavigator />
    );
  }
}

export default App;
