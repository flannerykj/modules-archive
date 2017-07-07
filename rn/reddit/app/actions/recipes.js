import * as types from './types';

export function fetchRecipes(ingredients) {
	return (dispatch, getState) => {
		console.log(getState());
	}
}
export function addRecipe() {
	return {
		type: types.ADD_RECIPE,
	}
}