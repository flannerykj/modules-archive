import { PropTypes } from 'prop-types'
import { Item } from './Item'
export const ItemList = ({ item, itemList, onNewItem, onRemoveItem }) => {
   let _listItem
   function remove(e) {
 		e.preventDefault()
    var index = e.target.getAttribute('itemRef')
    onRemoveItem(index);
 	}
  var items = [];
  for (var i = 0; i < itemList.length; i++) {
    items.push(
      <li className="list-group-item" key={i}>
        {itemList[i]}
          <span itemRef={i} onClick={remove} value={i} className="remove-item">X</span>
      </li>);
    }
  return (
    <div>
      <ul className="list-group">
      {items}
      </ul>
    </div>
)}

ItemList.defaultProps = {
  item: "",
}

ItemList.propTypes = {
  item: PropTypes.string.isRequired,
}
