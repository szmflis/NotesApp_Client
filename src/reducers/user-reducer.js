const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.data
    default:
      return state
  }
}

export const setUser = (user) => {
  return dispatch => {
    dispatch({
      type: 'SET_USER',
      data: user
    })
    if (user) {
      window.localStorage.setItem(
        'loggedUser', JSON.stringify(user)
      )
    }
  }
}

export default userReducer
