import axios from "axios";

export default axios.create({
    baseURL: "https://unsplash.com",
    headers: {
        Authorization: 
        "Client-ID {id}" //you need create a new application en unsplash developer, replace id by access key
    }
})