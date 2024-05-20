import { FETCH_USER_LOGIN_SUCCESS,SEARCH_USER } from "../action/useAction";


const INITIAL_STATE = {
    account:{
        access_token: '',
        username: '',
        avatar: '',
    },
    isAuthenticated: false
};
const userReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case FETCH_USER_LOGIN_SUCCESS:
            console.log("Action: ", action);
          return {
            ...state, account:{
                accessToken: action.payload.accessToken,
                userId: action.payload.data.user_id,
                username: action.payload.data.fullname,
                avatar: action.payload.data.url_avatar,
                background: action.payload.data.url_background_profile,
            },
            isAuthenticated: true,
          }
        case SEARCH_USER :
        return{

        }
        default:
          return state
      }
}
export default userReducer;