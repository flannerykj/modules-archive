import { PropTypes } from 'prop-types'

export const Item = ({item}) => (
	<span> {item}</span>
)

Item.propTypes = {
	item: PropTypes.string.isRequired,
}
