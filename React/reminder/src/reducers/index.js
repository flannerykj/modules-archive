import { ADD_REMINDER } from '../constants'; 

const reminder = (action) => {
	return {
		text: action.text, 
		id: Math.random()
	}
}

const reminders = (state = [], action) => {
	var reminders = null; 
	switch(action.type) {
		case ADD_REMINDER: 
			reminders = [...state, reminder(action)]; 
			console.log('reminders as state', reminders)
			return reminders;
		default: 
			return state; 
	}
}

export default reminders; 