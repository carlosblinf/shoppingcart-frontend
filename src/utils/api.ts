import axios from "axios";

const BASE_URL = "http://localhost:8080/api/";
const API_TIMEOUT = 30000;

export const api = axios.create({
    timeout: API_TIMEOUT,
    baseURL: BASE_URL,
    headers: {
        Accept: 'application/json'
    }
})