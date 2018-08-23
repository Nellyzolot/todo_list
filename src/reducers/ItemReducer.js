import { handleActions } from 'redux-actions';
import * as actions from '../constants/items';

const initialState = {
  items: [],
  isItemExist: false,
  visibilityFilter: 'SHOW_ALL'
};

export default handleActions({
  [actions.ADD_ITEM]: (state, action) => ({
    ...state,
    items: [...state.items, { id: action.payload.id, text: action.payload.text, isCompleted: false, visible: true }],
    isItemExist: true
  }),

  [actions.DELETE_ITEM]: (state, action) => ({
    ...state,
    items: state.items.filter(item => item.id !== action.payload.id)
  }),

  [actions.COMPLETE_ITEM]: (state, action) => ({
    ...state,
    items: state.items.map(item => item.id === action.payload.id ? { ...item, isCompleted: action.payload.isCompleted } : item)
  }),

  [actions.SET_FILTER]: (state, action) => ({
    ...state,
    visibilityFilter: action.payload.visibilityFilter
  }),

  [actions.DELETE_ITEMS]: (state, action) => ({
    ...state,
    items: state.items.filter(item => item.isCompleted === false)
  }),

}, initialState);