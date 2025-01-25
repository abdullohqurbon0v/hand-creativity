import axios from 'axios'


export const backend = axios.create({
     baseURL: "API URL",
     timeout: 10000
})