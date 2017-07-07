import * as types from './types'

export function fetchPosts() {
  return dispatch => {
    dispatch(requestPosts())
    return fetch(`https://facebook.github.io/react-native/movies.json`)
      .then((response) => response.json())
      .then(json => dispatch(receivePosts(json)))
  }
}

export function requestPosts() {
  return {
    type: types.REQUEST_POSTS
  }
}

export function receivePosts(json) {
  console.log('JSON'); 
  console.log(json); 
  return {
    type: types.RECEIVE_POSTS,
    items: json,
    receivedAt: Date.now()
  }
}












export function fetchRecipes(ingredients) {
  return (dispatch, getState) => {
    const params = [
      `i=${encodeURIComponent(ingredients)}`,
      'p=1'
    ].join('&')
    return Api.get(`/api/?${params}`).then(resp => {
      dispatch(setSearchedRecipes({recipes: resp}));
    }).catch( (ex) => {
      console.log(ex);
    });
  }
}

export function setSearchedRecipes({ recipes }) {
  return {
    type: types.SET_SEARCHED_RECIPES,
    recipes,
  }
 }