export const FETCH_POST_DATA_FISRT = "FETCH_POST_DATA_FISRT";
export const FETCH_POST_DATA_COUNTINUE = "FETCH_POST_DATA_COUNTINUE";
export const UPDATE_POST_HOME = "UPDATE_POST_HOME";

/*

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
            url_post_image: "",
          },
        ],
      },
    ],

*/
// trả về cục response.data =>  reponse[data][data]
export const getPostFisrt = (data) => {
  const listData = data.map((item) => ({
    post_id: item["post_id"],
    user_id: item["user_id"],
    create_at_post: item["date_create_post"],
    description: item["description"],
    totalLike: item["Total react"],
    full_name: item["User"]["fullname"],
    avatar_url: item["User"]["url_avatar"],
    totalComment: item["Total comment"],
    postImages: item["PostImage"].map((e) => ({
      post_image_id: e["post_image_id"],
      url_image: e["url_image"],
    })),
  }));
  return {
    type: FETCH_POST_DATA_FISRT,
    payload: listData,
  };
};


export const updatePosts = (data ) => {

}
