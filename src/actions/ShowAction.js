export const showActive = visible => ({
    type: 'SHOW_ACTIVE',
    visible: visible
  })
export const showCompleted = visible => ({
    type: 'SHOW_COMPLETED',
    visible: visible
  })
export const deleteItems = () => ({
    type: 'DELETE_ITEMS'
  })