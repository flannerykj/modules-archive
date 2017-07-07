import React, {Component} from 'react'; 
import ReactNative from 'react-native'; 
const {
  View,
  Text,
  ListView
} = ReactNative; 
import { connect } from 'react-redux'; 
import PropTypes from 'prop-types'


export default class Posts extends Component {
constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }
  render() {
    return (
    	<View>
      {this.props.posts.map((post, i) => <Text key={i}>{post.title}</Text>)}
      </View>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}