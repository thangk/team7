import axios from "axios";



export default axios.create({
    // baseURL: 'http://localhost:4000'
    baseURL: 'https://team7-backend.herokuapp.com'
})