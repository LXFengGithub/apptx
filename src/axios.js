// axios拦截器
import axios from 'axios'
axios.defaults.baseURL = "http://192.168.0.149:7073"
axios.interceptors.request.use(function (config) {
  // console.log(config)
  // axios.defaults.headers.common['token'] = "c9b5aa67-6fc5-4e89-b63b-f3a5dbdc16";
  config.params = {
    ...config.params, // 利用结构赋值   把之前也放在这，然后拼接这个数据。防止被覆盖
    // token: "c9b5aa67-6fc5-4e89-b63b-f3a5dbdc1699"
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

export default axios
