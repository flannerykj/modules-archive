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
import BookPreview from './BookPreview'

class BookList extends Component {
	render() {
		return(
			<View><ScrollView>
				<Text>Results</Text>
				{this.props.items.map((item) => {
		            return <BookPreview title={item.title}/>
		          })}
			</ScrollView></View>
			)
}
}

BookList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

export default BookList; 