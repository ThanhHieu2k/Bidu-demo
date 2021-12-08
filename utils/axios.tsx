import axios from 'axios'

const Axios = axios.create({
  baseURL : process.env.API_ENDPOINT
})

Axios.interceptors.request.use(
  function(config) {
    config.headers["Access-Control-Allow-Origin"]="*";

    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
)


export default Axios;