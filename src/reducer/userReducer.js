import { FETCH_USER_LOGIN_SUCCESS } from "../action/useAction";

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
                username: action.payload.data.fullname,
                avatar: action.payload.data.url_avatar,
            },
            isAuthenticated: true,
          }
        case 'counter/decremented':
          return { value: state.value - 1 }
        default:
          return state
      }
}
export default userReducer;