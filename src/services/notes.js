import axios from 'axios'
import urls from '../utils/api-urls'

const baseUrl = urls.notes
const userUrl = `${urls.users}/user`

export const loadUserNotes = async (id) => {
  const response = await axios.get(`${userUrl}/${id}/notes`)
  return response.data
}

export const addNote = async ({
  content, userId, headerAuth, dueDate
}) => {
  const config = {
    headers: { Authorization: `Bearer ${headerAuth}` }
  }

  const bodyParams = {
    content,
    userId,
    dueDate
  }

  const response = await axios.post(baseUrl, bodyParams, config)
  return response.data
}

export const deleteNote = async ({ noteId, headerAuth }) => {
  const config = {
    headers: { Authorization: `Bearer ${headerAuth}` }
  }

  const url = `${baseUrl}/${noteId}`
  const response = await axios.delete(url, config)
  return response
}

export const editNote = async ({
  noteId, newContent, headerAuth, newDueDate
}) => {
  const config = {
    headers: { Authorization: `Bearer ${headerAuth}` }
  }

  const url = `${baseUrl}/${noteId}`

  const bodyParams = {
    content: newContent,
    dueDate: newDueDate,
  }

  const response = await axios.put(url, bodyParams, config)
  return response.data
}
