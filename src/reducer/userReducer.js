import { FETCH_USER_LOGIN_SUCCESS } from "../action/useAction";

const INITIAL_STATE = {
  account: {
    access_token: "",
    username: "",
    avatar: "",
    userId: 0,
  },
  isAuthenticated: false,
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_LOGIN_SUCCESS:
      console.log("Action: ", action);
      return {
        ...state,
        account: {
          access_token: action.payload.accessToken,
          userId: action.payload.data.user_id,
          username: action.payload.data.fullname,
          avatar: action.payload.data.url_avatar,
        },
        isAuthenticated: true,
      };

    default:
      return state;
  }
};
export default userReducer;
