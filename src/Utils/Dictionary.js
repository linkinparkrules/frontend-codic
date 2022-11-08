import axios from "axios";

const dictionaryAPI = axios.create({
    baseURL: "https://api.dictionaryapi.dev/api/v2/entries/en/"
})

export default dictionaryAPI;