const initialState = {
  items: [],
  isItemExist: false
};

export default function item(state = initialState, action) {

  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, { id: action.id, text: action.text, isCompleted: false, visible: true }], isItemExist: true}
    
    case 'DELETE_ITEM':
      return {...state, items: state.items.filter(item => item.id !== action.id.id)};
    
    case 'COMPLETE_ITEM':
      return {...state, items: state.items.map(item => item.id === action.id.id ? { ...item, isCompleted: action.isCompleted } : item)};

    case 'SHOW_ACTIVE':
      return {...state, items: state.items.map(item => item.isCompleted === false ? { ...item, visible: action.visible } : item)};

    case 'SHOW_COMPLETED':
      return {...state, items: state.items.map(item => item.isCompleted === true ? { ...item, visible: action.visible } : item)};

    case 'DELETE_ITEMS':
      return {...state, items: state.items.filter(item => item.isCompleted === false)};

    default:
      return state;
  }

}