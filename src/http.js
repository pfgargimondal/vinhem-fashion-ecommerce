import axios from 'axios';
export default axios.create({
    baseURL:"https://vinhem-ecommerce.workstream.club/api/",
    headers:{
        "Content-Type":"application/json"
    }
})