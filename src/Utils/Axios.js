import axios from 'axios';

const http = axios.create({
    baseURL: "https://codic-mindx.herokuapp.com/"
});

export default http;