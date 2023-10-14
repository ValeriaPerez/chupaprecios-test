import axios from 'axios';
// config
import { HOST_API } from './config-global';

// ----------------------------------------------------------------------
let token = '';
fetch('https://chupaprecios.com.mx/rest/V1/integration/admin/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: 'candidatoFront',
      password: 'Ch8t45t!f'
    })
  })
   .then(response => response.json())
   .then(json => token = json)
   .catch(error => console.error(error))
// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: HOST_API });

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const fetcher = async (args) => {
  let requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      Cookie: 'PHPSESSID=0e2ba61cc0e209a3178786f4ea239ccc',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    redirect: 'follow'
  };
  const [url] = Array.isArray(args) ? args : [args];

  const res = await axiosInstance.get(url, requestOptions);

  return res.data;
};

// ----------------------------------------------------------------------

export const endpoints = {
  detail: 'https://chupaprecios.com.mx/rest/V1/chupaprecios/productdetail',
  products: 'https://chupaprecios.com.mx/rest/V1/chupaprecios/customcatalog',
  token: 'https://chupaprecios.com.mx/rest/V1/integration/admin/token',
};
