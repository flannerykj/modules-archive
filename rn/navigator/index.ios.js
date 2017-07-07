/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Provider from 'react-redux'
import store from './src/store'
import TabBarNavigation from './src/tabBar/views/TabBarNavigation'
import store from './src/store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TabBarNavigation />
      </Provider> 
    );
  }
}

AppRegistry.registerComponent('navigator', () => App);
