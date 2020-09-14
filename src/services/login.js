import axios from 'axios'

const baseUrl = 'api/login'

const login = async ({ username, password }) => {
  try {
    const response = await axios.post(baseUrl, { username, password })
    return response.data
  } catch (exception) {
    return exception.response.data
  }
}

export default { login }
