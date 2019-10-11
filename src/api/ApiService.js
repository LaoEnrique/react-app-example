import axios from "axios";

export default axios.create({
    baseURL: "https://unsplash.com",
    headers: {
        Authorization: 
        "Client-ID 3e831733061b40b9cb978a05f2dad122c7322c326bae7a809d85c428fefc9863"
    }
})