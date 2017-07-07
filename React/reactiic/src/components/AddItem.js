import { PropTypes } from 'prop-types';
import { Item } from './Item'
import { Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap'

export const AddItem = ({ item, itemList, onNewItem }) => {
   let _item
   const submit = (e) => {
 		e.preventDefault()
    onNewItem({
      item: _item.value
    })
 		_item.value = ''
 	}
  return (
    <form onSubmit={submit}>
    <table className='form-table'>
      <tbody>
      		<tr>
            <td className="input-td">
              <label className="sr-only" htmlFor="item">Add Ingredient</label>
              <input id="item"
        				   type="text"
        				   required
                   className="form-control"
                   autoFocus="true"
                   autoComplete="off"
                   placeholder="Add an ingredient"
        				   ref={input => _item = input}/>
            </td>
      			<td className="button-td"> <button onClick={submit} className="btn btn-default add-item-button">Add Ingredient</button></td>
          </tr>
        </tbody>
    </table>
    </form>
)}
