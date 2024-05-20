import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Modal = ({ show, handleClose, children }) => {
  if (!show) {
    return null;
  }

  const [comment, setComment] = useState("");

  const handleOverlayClick = (e) => {
    // Kiểm tra nếu nhấn vào overlay (vùng bên ngoài modal)
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  return (
    // <div
    //   onClick={handleOverlayClick}
    //   className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
    // >
    //   <div className="relative w-1/2 h-2/3 p-5 border shadow-lg rounded-md bg-white">
    //     <div className="mt-3 text-center">
    //       <h3 className="text-lg leading-6 font-medium text-gray-900">
    //         Modal Title
    //       </h3>
    //       <div className="mt-2 px-7 py-3">
    //         <p className="text-sm text-gray-500">{children}</p>
    //       </div>
    //       <div className="items-center px-4 py-3">
    //         <button
    //           onClick={handleClose}
    //           className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
    //         >
    //           Close
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // version 2
    // <div
    //   onClick={handleOverlayClick}
    //   className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
    // >
    //   <div className="relative w-1/2 h-2/3 p-5 border shadow-lg rounded-md bg-white flex flex-col">
    //     <div className="flex-grow overflow-y-auto p-3">
    //       <div className="mt-3 text-center">
    //         <h3 className="text-lg leading-6 font-medium text-gray-900">
    //           Modal Title
    //         </h3>
    //         <div className="mt-2">
    //           <p className="text-sm text-gray-500">{children}</p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="border-t p-3">
    //       <textarea
    //         className="w-full p-2 border rounded-md"
    //         placeholder="Write a comment..."
    //       />
    //       <div className="flex justify-end mt-2">
    //         <button
    //           onClick={handleClose}
    //           className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
    //         >
    //           Send
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    //version 3

    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
    >
      <div className="relative w-1/2 h-2/3 p-5 border shadow-lg rounded-md bg-white flex flex-col">
        <div className="flex-grow overflow-y-auto p-3">
          <div className="mt-3 text-center">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Modal Title
            </h3>
            <div className="mt-2">
              <p className="text-sm text-gray-500">{children}</p>
            </div>
          </div>
        </div>
        <div className="border-t p-3 flex items-center">
          <textarea
            className="flex-grow p-2 border rounded-md"
            placeholder="Write a comment..."
            value={comment}
            onChange={handleCommentChange}
          />
          <button
            className="ml-2 p-2 bg-gray-300 text-white rounded-full shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            disabled={!comment.trim()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
          <button
            className="ml-2 p-2 bg-blue-500 text-white rounded-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            disabled={!comment.trim()}
            onClick={handleClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
