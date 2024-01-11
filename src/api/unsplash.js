import axios from "axios";

export default axios.create({
    baseURL : 'https://api.unsplash.com' ,
    headers : {
        Authorization: 'Client-ID 2Lgpmx8rEIhOuV09VgHpk4FjwLnAzr3GJvz_XPM8NWk'
      }
})