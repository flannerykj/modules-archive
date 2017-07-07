import React, {Component} from 'react';
import {connect} from 'react-redux'; 
import {bindActionCreators} from 'redux';
import * as ActionCreators from '../actions';
import Home from './Home'
import AsyncApp from './AsyncApp'

class AppContainer extends Component {
	constructor(props) {
		super(props); 
	}
	render() {
		return <AsyncApp/> 
	}
}

function mapStateToProps(state) {
  const { selectedSubreddit, postsBySubreddit } = state
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsBySubreddit[selectedSubreddit] || {
    isFetching: true,
    items: []
  }

  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(AppContainer)
