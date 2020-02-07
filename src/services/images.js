import axios from 'axios'
const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:5000"

let token = null
const setToken = newToken => {
    token = `Bearer ${newToken}`
  }

const getAll = ()=> {
  return axios.get(`${baseUrl}/index`)
}

const search = (minLon, maxLon, minLat, maxLat) => {
    return axios.get(`${baseUrl}/search`, {
        params : {
            min_lon:minLon,
            max_lon:maxLon,
            min_lat:minLat,
            max_lat:maxLat
        }
    })}

const upload = (event) => {
  const config = {
        headers: { Authorization: token },  
  }
  const data = new FormData();
  data.append('file', event.target.image.files[0]);
  return axios.post(`${baseUrl}/upload`, data, config)
}

const login = async (username, password) => {
  const data = {
    username: username,
    password: password
  }
  const response = await axios.post(`${baseUrl}/login`, data)
  return response.data
}

const register = (username, password) => {
  const data = {
    username: username,
    password: password
  }
  const response = axios.post(`${baseUrl}/register`, data)
  return response.data
}


const getImageSource = (image) => {
  return `${baseUrl}${image}`
}

export default { 
  getAll: getAll, 
  search : search,
  upload : upload,
  login: login, setToken,
  register: register,
  getImageSource: getImageSource
}