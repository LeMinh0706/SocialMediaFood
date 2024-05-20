import axios from "./AxiosCustomize";

const postLogin = (userEmail, userPassword) => {
    return axios.post(`auth/login`, { email: userEmail, password: userPassword });
}

const postRegister = (userEmail, userPassword, userFullname) => {
    return axios.post(`auth/register`, { email: userEmail, password: userPassword, fullname: userFullname });
}



export { postLogin, postRegister }