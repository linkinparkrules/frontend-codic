import axios from 'axios';

const http = axios.create({
    // baseURL: "https://codic-mindx.herokuapp.com/"
    baseURL: "https://localhost:5001/"
});

// this code runs before you send request to baseURL
// if localStorage has token, add that token to headers.authorization
http.interceptors.request.use((config) => {
    if(localStorage.getItem("jwt")) {
        config.headers.authorization = localStorage.getItem("jwt");
    } else if (sessionStorage.getItem("jwt")) {
        config.headers.authorization = sessionStorage.getItem("jwt");
    }
    return(config)
})

export default http;