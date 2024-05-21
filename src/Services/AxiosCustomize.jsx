import axios from "axios";
import store from '../redux/store.js'

const instance = axios.create({
    baseURL: 'http://foodsocial.camenryder.xyz/',
    timeout: 5000
});



// instance.interceptors.request.use(function (config) {
//     console.log("Access token: ", access_Token);
//     const access_token = store.getState().user.account.accessToken;
//     if (access_token) {
//         config.headers.Authorization = `Bearer ${access_token}`;
//     }
//     console.log("Token: ", access_token);
//     return config;
// }, function (error) {
//     return Promise.reject(error);
// });


instance.interceptors.response.use(function (response) {
    // console.log("itercepter: ", response);

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