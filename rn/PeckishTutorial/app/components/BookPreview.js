import React, {Component} from 'react'; 
import ReactNative from 'react-native'; 
import PropTypes from 'prop-types'; 
const {
	View,
	Image,
	TouchableHighlight,
	StyleSheet,
	Text,
} = ReactNative; 

class BookPreview extends Component {
	render() {
		return(
			<View>
				<Text>{this.props.title}</Text>
			</View>
			)
}
}

BookPreview.propTypes = {
    title: PropTypes.string.isRequired,
}

export default BookPreview; 