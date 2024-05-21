import {
  FETCH_POST_DATA_COUNTINUE,
  FETCH_POST_DATA_FISRT,
} from "../action/postAction";

const INITIAL_STATE = [
  {
    post_id: 0,
    description: "",
    create_at_post: "",
    user_id: 0,
    full_name: "",
    avatar_url: "",
    postImages: [
      {
        post_image_id: 0,
        url_post_image: "",
      },
    ],
    totalLike: 0,
    totalComment: 0,
    commentDetail: [
      {
        post_id: 0,
        description: "",
        create_at_post: "",
        user_id: 0,
        full_name: "",
        avatar_url: "",
        postImages: [
          {
            post_image_id: 0,
            url_image: "",
          },
        ],
      },
    ],
  },
];
export const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POST_DATA_FISRT:
      return [action.payload];

    case FETCH_POST_DATA_COUNTINUE:
      console.log("Action: ", action);
      return {
        ...state.data,
        action,
      };

    // case UPDATE_POST_HOME:
    //   console.log("Action: ", action);
    //   return {
    //     ...state,
    //     action,
    //   };

    default:
      return state;
  }
};
