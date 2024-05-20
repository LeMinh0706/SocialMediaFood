const FETCH_USER_LOGIN_SUCCESS = "FETCH_USER_LOGIN_SUCCESS";
const GET_TOKEN = "GET_TOKEN";
const doLogin = (data) => {
  return {
    type: FETCH_USER_LOGIN_SUCCESS,
    payload: data,
  };
};

const setToken = (token) => {
  return {
    type: "SET_TOKEN",
    payload: token,
  };
};
const getToken = () => {
  return {
    type: GET_TOKEN,
  };
};

export { doLogin, FETCH_USER_LOGIN_SUCCESS, setToken  , GET_TOKEN , getToken };
