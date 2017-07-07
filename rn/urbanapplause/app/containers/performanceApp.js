import React, { Component } from 'react'
import { View, Text, ListView, Modal, TouchableHighlight } from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators, dispatch} from 'redux';
import PerformanceList from '../components/performance-list';
import TitleBar from '../components/title-bar';
import * as performanceActions from '../actions/performanceActions'
import * as addModalVisibilityActions from '../actions/addModalVisibilityActions';

import AddPerformance from '../components/add-performance';

import store from '../store';

class PerformanceApp extends Component {
    constructor(props) {
   	  super(props);
	  this.state = {
	      performances: new ListView.DataSource({
	        rowHasChanged: (r1, r2) => r1 !== r2
	      })
	    }
	   }
	searchPerformances() {
		//TODO 
	}
	render() {
		const {performances, dispatch } = this.props;
		return(
			<View>
				<TitleBar
		          {...bindActionCreators(addModalVisibilityActions, dispatch)} />
		        <View> 
		        	<TouchableHighlight onPress={() => this.searchPerformances()}>
		        		<Text>Search</Text>
		        	</TouchableHighlight>
		        </View>
				<PerformanceList 
					performances={performances} 
					{...bindActionCreators(performanceActions, dispatch)}/>
		         <AddPerformance
		            {...bindActionCreators(performanceActions, dispatch)}
		            {...bindActionCreators(addModalVisibilityActions, dispatch)}
		            />

			</View>
			)
	}
}

const mapDispatchToProps = (dispatch) => ({
	dispatch: dispatch
})

const mapStateToProps = (state) => ({
	performances: state.performances
})

export default connect(mapStateToProps, mapDispatchToProps)(PerformanceApp)

