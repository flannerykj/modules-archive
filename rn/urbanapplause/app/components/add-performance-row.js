'use strict';

import React, {Component} from 'react'
import {
  StyleSheet,
  TextInput,
  View
} from 'react-native';

class AddPerformanceRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      value: null
    };
  }
  onSubmit = () => {
    this.props.addPerformance(this.state.value);
  }
  onText = (text) => {
    this.state.value = text;
    this.setState(this.state);
  }
  onFocused = () => {
    console.log('focused');
    this.state.focused = true;
    this.setState(this.state);
  }
  onBlurred = () => {
    this.state.focused = false;
    this.setState(this.state);
  }
  render() {
    var {addPerformance} = this.props;

    return (
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          onChangeText={this.onText}
          onSubmitEditing={this.onSubmit}
          onFocus={this.onFocused}
          onBlur={this.onBlurred}
          placeholder="Add a new performance..."></TextInput>
        {this.renderBorder()}
      </View>
    );
  }
  renderBorder() {
    if (this.state.focused) {
      return (
        <View style={styles.border}></View>
      );
    }
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'column',
    paddingLeft: 40,
    paddingRight: 10
  },
  input: {
    height: 40,
    flex: 1
  },
  border: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray'
  }
});

export default AddPerformanceRow;
