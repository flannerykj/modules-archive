import {
  View,
  Text,
  ListView,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import React, { Component } from 'react'
import AddPerformanceRow from './add-performance-row'

class PerformanceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    }
    if (this.props.performances) {
      this.state.dataSource = this.state.dataSource.cloneWithRows(this.props.performances)
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.performances !== this.props.performances) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.performances)
      });
    }
  }
  renderPerformanceItem(performance) {
    return (
        <TouchableHighlight
        underlayColor="#e4f2d9"
        key={performance.id}
        style={styles.row}>
        <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
          <Text style={styles.text}>{performance.name}</Text>
        </View>
      </TouchableHighlight>
    )
  }
  render(){
    const { addPerformance } = this.props
    return (
      <View>
        <ListView
        dataSource={this.state.dataSource} 
        renderRow={this.renderPerformanceItem}/>
        <AddPerformanceRow
        addPerformance={(name) => addPerformance(name)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  templateRow: {
    paddingLeft: 30
  },
  text: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10
  }
});

export default PerformanceList;
