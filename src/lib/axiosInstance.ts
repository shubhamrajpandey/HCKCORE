import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://herald-hub-backend.onrender.com", // your API base
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
