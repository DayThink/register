import axios from 'axios';

// 创建axios实例
const fetch = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000 // 请求超时时间
});

// request拦截器
fetch.interceptors.request.use(config => {
// 让每个请求携带token--['token']为自定义key
  var token = 'bc6f0f2b3fe1b70b5a9d0d99219d7202';
  var name = '15035876023'
  Object.assign(config.headers,
    { 'x-token': token,
      'username': name
    });
  return config;
},error =>{
  console.log(error);
  Promise.reject(error);
});

// respone拦截器
fetch.interceptors.response.use(
  response => response,
  error =>{
    console.log('err' + error);// for debug
    return Promise.reject(error);
  });

export default fetch;
