import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import React, {Component} from 'react'

class TitleBar extends Component {
  render() {
    var {activeFilter, showModal} = this.props;
    return (
      <View style={styles.toolbar}>
        <Text style={styles.title}>Performances</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#81c04d',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row'
  },
  button: {
    width: 50
  },
  text: {
    color: '#fff',
    textAlign: 'center'
  },
  title: {
    flex: 1,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

export default TitleBar;
