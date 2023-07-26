import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3330" // já cria uma base quando for chamar todas requições
});