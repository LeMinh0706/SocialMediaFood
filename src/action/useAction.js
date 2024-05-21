const FETCH_USER_LOGIN_SUCCESS = 'FETCH_USER_LOGIN_SUCCESS';
const SEARCH_USER = 'SEARCH_USER'

const doLogin = (data) =>{
    return{
        type: FETCH_USER_LOGIN_SUCCESS,
        payload: data
    }
}

const doSearch = (data) =>{
    return{
        type: SEARCH_USER,
        payload: data
    }
}


export {doLogin, FETCH_USER_LOGIN_SUCCESS, SEARCH_USER, doSearch};