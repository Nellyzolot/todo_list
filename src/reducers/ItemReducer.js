import { handleActions } from 'redux-actions';
import * as actions from 'app/constants/items';

const initialState = {
	items: [],
	visibilityFilter: 'SHOW_ALL'
};

export default handleActions({
	[actions.ADD_ITEM]: (state, {payload: {id, text}}) => ({
		...state,
		items: [...state.items, {id, text, isCompleted: false}],
	}),

	[actions.DELETE_ITEM]: (state, {payload: {id}}) => ({
		...state,
		items: state.items.filter(item => item.id !== id)
	}),

	[actions.COMPLETE_ITEM]: (state, {payload: {id, isCompleted}}) => ({
		...state,
		items: state.items.map(item => item.id === id ? { ...item, isCompleted: isCompleted } : item)
	}),

	[actions.SET_FILTER]: (state, {payload: {visibilityFilter}}) => ({
		...state,
		visibilityFilter: visibilityFilter
	}),

	[actions.DELETE_ITEMS]: (state) => ({
		...state,
		items: state.items.filter(item => item.isCompleted === false)
	}),

}, initialState);