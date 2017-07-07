import { applyMiddleware, combineReducers, createStore } from 'redux'
import logger from 'redux-logger'

import {HomeTab} from './homeTab/navigationConfiguration'
import {MyBooksTab} from './myBooksTab/navigationConfiguration'

import {TabBar, tabBarReducer } from './tabBar/navigationConfiguration'