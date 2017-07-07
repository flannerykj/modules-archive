/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {logger} from 'redux-logger';
import reducer from './app/reducers'
import AppContainer from './app/containers/AppContainer';
import {
  AppRegistry,
} from 'react-native';

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      logger,
      ),
    );
  return createStore(reducer, initialState, enhancer)
} 
const store = configureStore({}); 

const App = () => (
  <Provider store={store}> 
    <AppContainer />
  </Provider> )

AppRegistry.registerComponent('PeckishTutorial', () => App);
