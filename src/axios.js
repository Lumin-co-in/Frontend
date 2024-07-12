import axios from 'axios';

// Create an instance of Axios
const axiosInstance = axios.create({
  baseURL: 'https://lumin-backend-v1.onrender.com/api',
  withCredentials: true,
});

export default axiosInstance;
