export const completeItem = (id, isCompleted) => ({
  type: 'COMPLETE_ITEM',
  id: id,
  isCompleted: isCompleted
})

export const deleteItem = id => ({
  type: 'DELETE_ITEM',
  id: id
})

let nextTodoId = 0
export const addItem = text => ({
  type: 'ADD_ITEM',
  id: nextTodoId++,
  text: text
})