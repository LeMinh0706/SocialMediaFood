import axios from "axios";
import store from '../redux/store.js'

const instance = axios.create({
    baseURL: 'http://foodsocial.camenryder.xyz/',
    timeout: 1000
});

instance.interceptors.request.use(function (config) {
    const state = store.getState();
    const access_Token = state.user.account.accessToken;
    if (access_Token) {
        config.headers['Authorization'] = `Bearer ${access_Token}`;
    }
    // console.log("Access token: ", access_Token);
    return config;
}, function (error) {
    return Promise.reject(error);
});


instance.interceptors.response.use(function (response) {
    console.log("itercepter: ", response);

    return response;
}, function (error) {

    let res = {};

    if (error.reponse) {
        res.data = error.reponse.data;
        res.status = error.reponse.status;

    } else if (error.request) {
        console.log(error.request);
    } else {
        console.log("Error: ", error.message);
    }
    return res;
    // return Promise.reject(error);
});

export default instance;