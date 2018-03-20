import axios from 'axios'

const instance = axios.create({
  baseUrl: "https://vuejs-http-10974.firebaseio.com"
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance