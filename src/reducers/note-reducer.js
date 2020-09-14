import { addNote, deleteNote, editNote } from '../services/notes'

export const initializeNotes = (notesArray) => {
  return {
    type: 'INIT_NOTES',
    data: notesArray
  }
}

export const addNoteRedux = (note) => {
  return async dispatch => {
    if (!note.userId) {
      dispatch({
        type: 'ADD_NOTE',
        data: note
      })
    } else {
      const responseData = await addNote({
        content: note.content,
        userId: note.userId,
        headerAuth: note.auth
      })

      dispatch({
        type: 'ADD_NOTE',
        data: responseData
      })
    }
  }
}

export const deleteNoteRedux = (id, auth) => {
  return async dispatch => {
    try {
      const responseData = await deleteNote({
        noteId: id,
        headerAuth: auth
      })

      if (responseData.status === 204) {
        dispatch({
          type: 'DEL_NOTE',
          data: id
        })
      }
    } catch (exception) {
      console.log(exception)
      // TODO make exception component
    }
  }
}

export const deleteNoteUnloggedUser = (id) => {
  return {
    type: 'DEL_NOTE',
    data: id
  }
}

export const editNoteRedux = (id, content, auth) => {
  return async dispatch => {
    try {
      if (auth) {
        const responseData = await editNote({
          noteId: id,
          newContent: content,
          headerAuth: auth
        })
        dispatch({
          type: 'EDIT_NOTE',
          data: {
            id: responseData.id,
            content: responseData.content
          }
        })
      } else {
        dispatch({
          type: 'EDIT_NOTE',
          data: {
            id,
            content
          }
        })
      }
    } catch (exception) {
      console.log(exception)
    }
  }
}

const noteReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_NOTES':
      return action.data
    case 'ADD_NOTE':
      return state.concat(action.data)
    case 'DEL_NOTE':
      return state.filter(noteObj => noteObj.id !== action.data)
    case 'EDIT_NOTE':
      return state.map(note => {
        if (note.id === action.data.id) {
          return { ...note, content: action.data.content }
        }
        return note
      })
    default:
      return state
  }
}

export default noteReducer
