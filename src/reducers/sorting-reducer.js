export const changeSortingOrder = (order) => {
  return {
    type: 'CHANGE_ORDER',
    data: order
  }
}

const sortingReducer = (state = 'dateDesc', action) => {
  switch (action.type) {
    case 'CHANGE_ORDER':
      return action.data
    default:
      return state
  }
}

export default sortingReducer
