import axios from "axios";

/**base url to make requests */

const instance = axios.create({
    baseURL: "https://api.unsplash.com",
})

//  use GET to request 
// instance.get('/random')


export default instance;