import * as actions from 'app/constants/items'
import { createAction } from 'redux-actions';

const completeItemAction = createAction(
	actions.COMPLETE_ITEM
);

const deleteItemAction = createAction(
	actions.DELETE_ITEM
);

const addItemAction = createAction(
	actions.ADD_ITEM
);

export const completeItem = (id, isCompleted) =>
	completeItemAction({
		id,
		isCompleted
	})

export const deleteItem = id =>
	deleteItemAction({ id })

let nextTodoId = 0
export const addItem = text =>
	addItemAction({
		id: nextTodoId++,
		text
	})