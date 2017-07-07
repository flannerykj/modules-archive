import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native'; 

export default class Counter extends Component {
	constructor(props) {
    super(props);
  }
	render() {
		const { counter, increment, decrement } = this.props;
		return(
			<View>
				<Button
					onPress={increment}
					title="Increment"
				/>
				<Text>{counter}</Text>
				<Button
					onPress={decrement}
					title="Decrement"
				/>
				</View>
			)
	}
}``