import { createSelector } from 'reselect'

const getItems = (state) => state.itemReducer.items

export const getCountOfItems = createSelector(
  [getItems],
  (items) => {
    return items.filter(item => !item.isCompleted).length
  }
)