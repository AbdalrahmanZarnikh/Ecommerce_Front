import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://ecommerce-back-4.onrender.com",
});

export default axiosInstance;


// baseURL: "http://localhost:7000",
// baseURL: "https://ecommerce-back-4.onrender.com",