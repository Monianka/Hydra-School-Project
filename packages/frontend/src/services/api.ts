import axios from 'axios';


const baseURL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL,
});

api.interceptors.request.use((config)=>{
  const adminToken = localStorage.getItem('adminToken')
  if(adminToken)
  {
    config.headers.Authorization = `Bearer ${adminToken}`; 
  }

  return config;
});

api.interceptors.response.use(
 ( response) => response,
 (error) =>{
  const status = error.response?.status;
  const adminToken = localStorage.getItem('adminToken');

  if(status === 401 && adminToken)
  {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    window.location.href = '/admin/login';

  }
  return Promise.reject(error);
 }
)

export default api;
