const initialState = null

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.data
    default:
      return state
  }
}

export const setNotification = (notification) => {
  return async dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      data: notification
    })

    setTimeout(() => {
      dispatch({
        type: 'SET_NOTIFICATION',
        data: null
      })
    }, 4000)
  }
}

export default notificationReducer
