import React, {Component} from 'react'; 
import ReactNative from 'react-native'; 
import PropTypes from 'prop-types'; 
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
import BookList from '../components/BookList'

class Home extends Component {
	constructor(props) {
    super(props)
    this.state = { 
    	items: [],
    }
  }
	searchPressed() {
		this.props.fetchPosts();
		this.setState({
			items: this.props.items,
		})
	}
	render() {
		console.log(this.props.items)
		if (this.props.items) {
		return <View>
			<View> 
				<Text style={{marginTop:20}}>
				Searching
				</Text>
				<TouchableHighlight onPress={ () => this.searchPressed()}>
					<Text>Fetch Recipes</Text> 
				</TouchableHighlight>
				<BookList items={this.props.items}/>
			</View>  
		</View>
	} else {
		return <View>
			<View> 
				<Text style={{marginTop:20}}>
				Searching
				</Text>
				<TouchableHighlight onPress={ () => this.searchPressed()}>
					<Text>Fetch Recipes</Text> 
				</TouchableHighlight>
			</View> 
		</View>
	}
	}
}

Home.propTypes = {
  fetchPosts: PropTypes.func.isRequired, 
}

export default Home; 