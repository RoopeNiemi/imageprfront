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

const upload = (event) => {
  const data = new FormData();
  data.append('file', event.target.image.files[0]);
  return axios.post(`${baseUrl}/upload`, data)
}

export default { 
  getAll: getAll, 
  search : search,
  upload : upload
}