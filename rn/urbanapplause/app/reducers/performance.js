import * as actions from '../actions/actionTypes'

export default function performancesReducer(performances = [{
	name: 'performance1',
	id: 1
}], action = {}) {
	switch (action.type) {
		case actions.ADD_PERFORMANCE:
			return [...performances, action.performance]
		default:
			return performances
	}
}