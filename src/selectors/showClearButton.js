import { createSelector } from 'reselect'

const getItems = (state) => state.itemReducer.items

export const showClearButton = createSelector(
	[getItems],
	(items) => {
		return items.some(item => item.isCompleted)
	}
)