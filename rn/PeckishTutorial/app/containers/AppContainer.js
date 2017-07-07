import React, {Component} from 'react';
import {connect} from 'react-redux'; 
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../actions';
import Home from './Home'
import { Container, Button, Text } from 'native-base';

class AppContainer extends Component {
	constructor(props) {
		super(props); 
	}
	render() {
		return <Container>
					<Home {...this.props} />
				</Container>
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.getItems.items.movies
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);