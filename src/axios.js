import axios from "axios";

// Create an instance of Axios
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api", // Adjust this to match your server's base URL
  withCredentials: true, // This is the important part, which includes credentials in requests
});

export default axiosInstance;
