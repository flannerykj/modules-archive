import React, {Component} from 'react'; 
import ReactNative from 'react-native'; 
const {
  View,
  Text,
  Picker
} = ReactNative; 
import { connect } from 'react-redux'; 
import PropTypes from 'prop-types'

export default class MyPicker extends Component {
  render() {
    const { value, onChange, options } = this.props

    return (
      <View>
        <Text>{value}</Text>
        <Picker onValueChange={e => onChange(e.target.value)} selectedValue={value}>
          {options.map(option => (
            <Picker.Item 
            value={option} 
            label={option} 
            key={option}/>
          ))}
        </Picker>
      </View>
    )
  }
}

MyPicker.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}