import { useState } from "react";
import Avt from "./Avt";
import { Modal } from "../modal/CommentModal";
import { Comment } from "../modal/CommentModal";
import { useSelector } from "react-redux";
import {
  createCommentsUser,
  createReactPost,
  deleteCommentsUser,
  removeReactPost,
  viewCommentsUser,
} from "../Services/AxiosPost";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// eslint-disable-next-line react/prop-types
const Post = ({
  post_id,
  avt,
  name,
  time,
  description,
  images,
  totalLike,
  totalComment,
}) => {

  const [comments, setComments] = useState(totalComment);
  const [showModal, setShowModal] = useState(false);
  const accessToken = useSelector((state) => state.user.account.access_token);
  const user_id = useSelector((state) => state.user.account.userId);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const [liked, setLiked] = useState(false);
  const [react, setReact] = useState(totalLike);
  const [listComment, setListComment] = useState([]);
  const navigate = useNavigate();
  const handleShowModalComment = async () => {
    // if (!isAuthenticated) { 
    //   navigate("login");
    //   toast.warning("Vui lòng đăng nhập để thao tác");
    // } else {
      const data = await viewCommentsUser(post_id, 1);
      setListComment(data["data"]["data"]);
      setShowModal(true);
    // }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://camenryder.xyz/react-post/get-total-react/${post_id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error("There was an error fetching the data: " + error.message);
    }
  };
  if (isAuthenticated) {
    // set like default
    fetchData()
      .then((data) => {
        console.log("Fetched react data:", data["data"]["listData"].length);
        data["data"]["listData"].forEach((e) => {
          if (e["User"]["user_id"] == user_id) {
            setLiked(true);
          }
        });
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const onDeleteComment = async (post_id_delete, accessToken, user_id) => {
    console.log(post_id_delete);
    console.log(accessToken);
    console.log(user_id);
    const data = await deleteCommentsUser(post_id_delete, accessToken, user_id);
    if (data.statusCode == 200) {
      const data = await viewCommentsUser(post_id, 1, accessToken);
      setListComment(data["data"]["data"]);
      setComments(data["data"]["data"].length);
      toast.success("Xóa bình luận thành công");
    }
  };
  const onHandleComment = async (content, file) => {
    const data = await createCommentsUser(
      post_id,
      file,
      content,
      accessToken,
      user_id
    );
    if (data.statusCode == 200) {
      const data = await viewCommentsUser(post_id, 1, accessToken);
      setListComment(data["data"]["data"]);
      setComments(data["data"]["data"].length);
    }
    // setComments(comments + 1);
  };

  const handleLike = async () => {
    if (!isAuthenticated) {
      navigate("login");
      toast.warning("Vui lòng đăng nhập để thao tác");
    } else {
      if (liked) {
        const data = await removeReactPost(post_id, accessToken, user_id);
        if (data.statusCode == 200) {
          setReact(react - 1);
        }
      } else {
        const data = await createReactPost(post_id, accessToken, user_id);
        if (data.statusCode == 200) {
          setReact(react + 1);
        }
      }
      setLiked(!liked);
    }
  };

  return (
    <div className="w-2/5 rounded-xl bg-white border p-3">
      <div className="flex w-full justify-between border-b p-2 items-center">
        <div className="flex items-center gap-5">
          <Avt src={avt}></Avt>
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs font-lg text-gray-600">
              {new Date(Number(time))
                .toLocaleString("en-US", {
                  timeZone: "Asia/Ho_Chi_Minh",
                  hour12: false,
                })
                .replace(/ GMT.*$/, "")}
            </p>
          </div>
        </div>
        <div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <p className="mt-3">{description}</p>
        <div className="mt-3">{images}</div>
      </div>
      <div className="flex justify-around border-t mt-3 border-b p-1">
        <button
          onClick={async () => handleLike()}
          className="hover:bg-gray-200 text-gray-500 text-sm font-medium w-1/3 p-1 rounded-lg flex items-center justify-center gap-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`h-6 w-6 ${!liked ? "" : "text-red-400"}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          <p className={`${!liked ? "" : "text-red-400"}`}>{react} Like</p>
        </button>

        {/* <button
          className={`mt-4 px-4 py-2 rounded ${liked ? 'bg-red-500' : 'bg-blue-500'} text-white`}
          onClick={handleLike}
        >
          {liked ? 'Unlike' : 'Like'}
        </button> */}

        <button
          onClick={handleShowModalComment}
          className="hover:bg-gray-200 text-gray-500 text-sm font-medium w-1/3 p-1 rounded-lg flex items-center justify-center gap-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
          {comments} Comment
        </button>
      </div>
      <Modal
        onHandleComment={onHandleComment}
        show={showModal}
        post_id={post_id}
        accessToken={accessToken}
        handleClose={handleCloseModal}
      >
        <div className="space-y-4">
          {listComment.map((comment) => {
            console.log(comment["PostImage"]);
            let image = null;
            if (comment["PostImage"][0] != null) {
              image = comment["PostImage"][0]["url_image"];
            }
            return (
              <Comment
                key={comment.post_id}
                post_id={comment.post_id}
                user_id={comment.User.user_id}
                avatar={comment.User.url_avatar}
                username={comment.User.fullname}
                time={comment.date_create_post}
                content={comment.description}
                onDeleteComment={onDeleteComment}
                // onRepairComment= {}
                image={image}
              />
            );
          })}

          {/* Add more comments here */}
        </div>
      </Modal>
    </div>
  );
};

export default Post;
