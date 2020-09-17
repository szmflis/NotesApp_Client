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
        headerAuth: note.auth,
        dueDate: note.dueDate
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

export const editNoteRedux = (id, content, auth, newDueDate) => {
  return async dispatch => {
    try {
      if (auth) {
        const responseData = await editNote({
          noteId: id,
          newContent: content,
          headerAuth: auth,
          newDueDate
        })
        dispatch({
          type: 'EDIT_NOTE',
          data: {
            id: responseData.id,
            content: responseData.content,
            dueDate: responseData.dueDate
          }
        })
      } else {
        dispatch({
          type: 'EDIT_NOTE',
          data: {
            id,
            content,
            dueDate: newDueDate
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
          return { ...note, content: action.data.content, dueDate: action.data.dueDate }
        }
        return note
      })
    default:
      return state
  }
}

export default noteReducer
