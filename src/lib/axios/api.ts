import axios from "axios";

const url = (() => {
    const nodeenv = process.env.NODE_ENV;
    const isLocal = process.env.LOCAL === 'true';
    let url;
    if (nodeenv === 'production') {
        url = ''
    } else if (nodeenv === 'development') {
        url = isLocal ? 'http://localhost:8090' : ''
    } else {
        url = ''
    }
    return url;
})()

export const apiAxios = axios.create({
    baseURL: url,
    headers: {
        "GLID" : "unknown"
    }
})