import qs from 'qs'
import axios from 'axios'
import store from 'src/store'
import * as types from 'src/store/mutation-types'
import router from 'src/router'

axios.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      // config.data = qs.stringify(config.data)
      config.headers['Content-Type'] = 'application/json'
    }
    if (store.state.token) {
      config.headers.Authorization = `token ${store.state.token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  })

// http response 拦截器

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回401 清除token信息并跳转到登录页面
          router.replace({
            path: '/login',
            query: {redirect: router.currentRoute.fullPath}
          })
      }
    }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    return Promise.reject(error.response) // 返回接口返回的错误信息
  }
)

export default axios
