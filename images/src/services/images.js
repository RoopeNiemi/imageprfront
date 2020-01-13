import axios from 'axios'
const baseUrl = 'http://localhost:5000'

const getAll = () => {
  return axios.get(baseUrl)
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

export default { 
  getAll: getAll, 
  search : search
}