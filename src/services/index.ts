import axios from "axios";

const instance = axios.create({
    baseURL: "https://third-brain-tting.kro.kr/",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    }
})

export { instance as API }
