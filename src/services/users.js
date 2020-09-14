import axios from 'axios'

const baseUrl = '/api/users'

const register = async ({ username, password, name }) => {
  try {
    const response = await axios.post(baseUrl, { username, password, name })
    return response.data
  } catch (exception) {
    return exception.response.data
  }
}

export default { register }
