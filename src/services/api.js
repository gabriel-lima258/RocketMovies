import axios from "axios";

export const api = axios.create({
    // já cria uma base quando for chamar todas requições
    baseURL: 'https://rocketmovies-api-y99n.onrender.com' 
});