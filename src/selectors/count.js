import { createSelector } from 'reselect'
import { getItems } from 'app/selectors/filters'

export const getCountOfItems = createSelector(
	[getItems],
	(items) => {
		return items.filter(item => !item.isCompleted).length
	}
)