import { combineReducers } from 'redux'
import * as types from '../actions/types'


function getItems(
    state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case types.REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case types.RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.items,
        lastUpdated: action.receivedAt
      })
    default:
      console.log('defult');
      return state
  }
}

const rootReducer = combineReducers({
  getItems
})

export default rootReducer