import React, {Component} from 'react'; 
import ReactNative from 'react-native'; 
const {
	ScrollView,
	View,
	TextInput,
	Image,
	TouchableHighlight,
	StyleSheet,
	Text,
} = ReactNative; 
import { connect } from 'react-redux'; 

class Home extends Component {
	constructor(props) {
		super(props); 
	}
	searchPressed() {
		this.props.selectSubreddit('AskReddit');
	}
	render() {
		return <View>
			<View> 
				<Text style={{marginTop:20}}>
				Searching
				</Text>
				<TouchableHighlight onPress={ () => this.searchPressed()}>
					<Text>Fetch Recipes</Text> 
				</TouchableHighlight>
			</View> 
			<ScrollView>
			</ScrollView> 
		</View>
	}
}

function mapStateToProps(state) {
	return {
		searchedRecipes: state.searchedRecipes
	}
}

export default connect(mapStateToProps)(Home); 