import axiosOriginal from "axios";

const axios = axiosOriginal.create({
    // baseURL: "http://localhost:4000",
    baseURL: "http://10.5.0.202:4000",
});


export default axios;