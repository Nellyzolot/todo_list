import * as actions from '../constants/items'
import { createAction } from 'redux-actions';

export const deleteItems = createAction(
    actions.DELETE_ITEMS
);

const setVisabilityFilter = createAction(
    actions.SET_FILTER
);

export const setFilter = visibilityFilter =>
    setVisabilityFilter({ visibilityFilter: visibilityFilter })
