import axios from 'axios'
import urls from '../utils/api-urls'

const baseUrl = urls.login

const login = async ({ username, password }) => {
  try {
    const response = await axios.post(baseUrl, { username, password })
    return response.data
  } catch (exception) {
    return exception.response.data
  }
}

export default { login }
