import React, { Component } from 'react';
import {
    Text,
    AppRegistry, 
    View,
    TouchableHighlight
} from 'react-native';
import Style from './Style';
import InputButton from './InputButton';

const inputButtons = [
	[1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '.', '=', '+']
]; 

class ReactCalculator extends Component {
	constructor(props){
		super(props);
		this.state = {
			inputValue: 0
		}
	}

    render() {
        return (
         <View style={Style.rootContainer}>
            <View style={Style.displayContainer}>
            	<Text style={Style.displayText}> {this.state.inputValue} </Text>
            </View>
            <TouchableHighlight onPress={this._clearInput.bind(this)} style={Style.clearInput}> 
            	<Text>Clear</Text>
            </TouchableHighlight>
            <View style={Style.inputContainer}>
            	{this._renderInputButtons()}
            </View>
        </View>
        )
    }
  _clearInput() {
  	this.setState({
  				selectedOp: null,
  				previousInput: 0, 
  				inputValue: 0
  			}); 
  }

  _renderInputButtons() {
	let views = []; 
	for (var i = 0; i < inputButtons.length; i++) {
		let row = inputButtons[i]; 

		let inputRow = []; 
		for (var j = 0; j < row.length; j++) {
			let input = row[j];
			inputRow.push(
				<InputButton value={input} 
							 highlight={this.state.selectedOp === input}
							 onPress={this._onInputButtonPressed.bind(this, input)}
							 key={i+"-"+j} />
			);
		}
		views.push(<View style={Style.inputRow} key={"row-" + i}>{inputRow}</View>)
	}
	return views; 
  }

  _onInputButtonPressed(input) {
        switch (typeof input) {
        	case 'number':
        		return this._handleNumberInput(input)
        	case 'string':
        		return this._handleStringInput(input)
        }
    }
  _handleNumberInput(num) {
  	let inputValue = (this.state.inputValue * 10) + num
  	this.setState({
  		inputValue: inputValue
  	})
  }

  _handleStringInput(str) {
  	switch (str) {
  		case '/':
  		case '*':
  		case '+':
  		case '-':
  			this.setState({
  				selectedOp: str,
  				previousInput: this.state.inputValue, 
  				inputValue: 0
  			}); 
  			break;
  		case '=':
  			let operator = this.state.selectedOp, 
  				value1 = this.state.previousInput,
  				value2 = this.state.inputValue;
  			if (!operator) {
  				return; 
  			}
  			this.setState({
  				previousInputValue: 0,
  				inputValue: eval(value1 + operator + value2),
  				selectedOp: null
  			});
  		break;
  	}
  }

}

AppRegistry.registerComponent('ReactCalculator', () => ReactCalculator);