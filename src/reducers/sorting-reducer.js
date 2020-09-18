export const changeSortingOrder = (order) => {
  return {
    type: 'CHANGE_ORDER',
    data: order
  }
}

const sortingReducer = (state = 'dateAsc', action) => {
  switch (action.type) {
    case 'CHANGE_ORDER':
      return action.data
    default:
      return state
  }
}

export default sortingReducer
