import React, { Component } from 'react'
import {View, Text} from 'react-native'
import {Provider} from 'react-redux';
import store from '../store';

import PerformanceApp from './performanceApp'

class App extends Component {
	render(){
		return (
			<Provider store={store}>
      	<View><PerformanceApp /></View>
      </Provider> )
	}
}

export default App;