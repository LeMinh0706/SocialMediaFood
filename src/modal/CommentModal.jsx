/* eslint-disable react/prop-types */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
// import axios from "./AxiosCustomize";
// eslint-disable-next-line react/prop-types
export const Modal = ({ show, handleClose, children, onHandleComment }) => {
  const [commentText, setCommentText] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  if (!show) {
    return null;
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handlefaPaperclip = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    setSelectedFile(file);
  };

  const handleSendComment = async () => {
    await onHandleComment(commentText, selectedFile);
    setCommentText("");
    setSelectedFile(null);
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
    >
      <div className="relative w-1/2 h-2/3 p-4 border shadow-lg rounded-md bg-white flex flex-col">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Bình luận của bài viết
        </h3>
        <div className="flex-grow overflow-y-auto p-2">
          <div className="mt-2 text-left">
            <div className="mt-2">
              <p className="text-sm text-gray-500">{children}</p>
            </div>
          </div>
        </div>
        {isAuthenticated ? (
          <>
            <div className="border-t p-2 flex items-center">
              <textarea
                className="flex-grow p-2 border rounded-md"
                placeholder="Write a comment..."
                value={commentText}
                onChange={handleCommentChange}
              />
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <button
                onClick={handlefaPaperclip}
                className="ml-1 p-2 bg-gray-300 text-white rounded-full shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                <FontAwesomeIcon icon={faPaperclip} className="w-4 h-4" />
              </button>
              <button
                className={`ml-1 p-2 rounded-full shadow-sm focus:outline-none focus:ring-2 ${
                  commentText.trim()
                    ? "bg-blue-500 hover:bg-blue-700 focus:ring-blue-300 text-white"
                    : "bg-gray-300 text-gray-400"
                }`}
                disabled={!commentText.trim()}
                onClick={async () => await handleSendComment()}
              >
                <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4" />
              </button>
            </div>
          </>
        ) : (
          <> </>
        )}
      </div>
    </div>
  );
};

export const Comment = ({
  user_id,
  post_id,
  avatar,
  username,
  time,
  content,
  image,
  onDeleteComment,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showSnackBar, setShowSnackBar] = useState(false);
  const accessToken = useSelector((state) => state.user.account.access_token);
  const handleConfirm = async () => {
    // Handle confirm action here
    await onDeleteComment(post_id, accessToken, user_id);
    setShowSnackBar(false);
  };

  const handleCancel = () => {
    // Handle cancel action here

    setShowSnackBar(false);
  };

  const yours_user_id = useSelector((state) => state.user.account.userId);
  const isYoursPost = user_id === yours_user_id ? true : false;
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex items-start space-x-4 p-4 border-b border-gray-200 relative">
      <img
        src={avatar}
        alt={`${username}'s avatar`}
        className="w-10 h-10 rounded-full"
      />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-gray-900">{username}</h4>
          <span className="text-sm text-gray-500">{time}</span>
        </div>
        <p className="mt-1 text-gray-700">{content}</p>
        {image && (
          <div className="mt-2">
            <img
              src={image}
              alt="Comment attachment"
              className="max-w-full h-auto rounded-md"
            />
          </div>
        )}
      </div>
      {isYoursPost ? (
        <>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
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
                  d="M12 6.75a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 5.25a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 5.25a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                <ul className="py-1">
                  <li>
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Edit
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setShowSnackBar(true)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Delete
                    </button>
                    {showSnackBar && (
                      <SnackBar
                        message="Do you agree with this action?"
                        onConfirm={async () => handleConfirm()}
                        onCancel={handleCancel}
                      />
                    )}
                  </li>
                </ul>
              </div>
            )}
          </div>
        </>
      ) : (
        <div />
      )}
    </div>
  );
};

export const SnackBar = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <p className="text-lg text-center mb-4">{message}</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onConfirm}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Confirm
          </button>
          <button
            onClick={onCancel}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export const ModalReacts = ({ show, onClose, likers }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-5 w-1/3">
        <h2 className="text-lg font-semibold mb-4">People who liked this</h2>
        <ul className="max-h-60 overflow-y-auto">
          {likers.map((liker, index) => (
            <li key={index} className="py-2 border-b border-gray-200">
              {liker.User.fullName}
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};
