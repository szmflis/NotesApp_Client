import axios from 'axios'

const baseUrl = '/api/notes'

export const loadUserNotes = async (id) => {
  const response = await axios.get(`/api/users/user/${id}/notes`)
  return response.data
}

export const addNote = async ({ content, userId, headerAuth }) => {
  const config = {
    headers: { Authorization: `Bearer ${headerAuth}` }
  }

  const bodyParams = {
    content,
    userId
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

export const editNote = async ({ noteId, newContent, headerAuth }) => {
  const config = {
    headers: { Authorization: `Bearer ${headerAuth}` }
  }

  const url = `${baseUrl}/${noteId}`

  const bodyParams = {
    content: newContent
  }

  const response = await axios.put(url, bodyParams, config)
  return response.data
}
