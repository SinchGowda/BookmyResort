import axios from "axios";
{/*send HTTP requests from React to Spring Boot backend.*/}
export const API_URL = "http://localhost:8085/stay"

export const getErrorMessage =(error)=>{
    {/*"Give me the backend error message if it exists; otherwise give me a default error message."*/}
    return error?.response?.data?.error ? error?.response?.data?.error : "Something went Wrong Check Once";
}


const apiClient = axios.create({
    baseURL:API_URL
})

apiClient.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token'); 
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;  
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export const axiosInstance = apiClient 