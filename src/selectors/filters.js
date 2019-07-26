import { createSelector } from 'reselect'

const getVisibilityFilter = (state) => state.itemReducer.visibilityFilter
export const getItems = (state) => state.itemReducer.items

export const getVisibleItems = createSelector(
	[getVisibilityFilter, getItems],
	(visibilityFilter, items) => {
		switch (visibilityFilter) {
			case 'SHOW_ALL':
				return items
			case 'SHOW_COMPLETED':
				return items.filter(item => item.isCompleted)
			case 'SHOW_ACTIVE':
				return items.filter(item => !item.isCompleted)
		}
	}
)