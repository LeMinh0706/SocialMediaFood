import React, { useState } from 'react'
import { updatePost } from '../Services/AxiosPost';
import { useSelector } from 'react-redux';

const ModalUpdate = ({ closeModal, post }) => {
    const [description, setDescription] = useState(post?.description || '');
    const [images, setImages] = useState([]);

    const token = useSelector(state => state.user.account.accessToken)


    // console.log(post.postid);
    // console.log(description);
    // console.log("Image: ", images);
    //gọi api đăng ký 2 tấm hình => url
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleImageChange = (e) => {
        setImages(e.target.files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updatePost(images, description, token, post.postid)
            closeModal();
        } catch (error) {

        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">Update Description and Image for </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Description</label>
                        <input
                            type="text"
                            value={description}
                            onChange={handleDescriptionChange}
                            className="w-full px-3 py-2 border rounded"
                            placeholder="Enter description"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Image</label>
                        <input
                            type="file"
                            multiple
                            onChange={handleImageChange}
                            className="w-full px-3 py-2 border rounded"
                        />
                        <div className='flex'>
                            {/* {post.images.map((item) => (
                                <img key={item.props.src} className='w-1/5 object-cover' src={item.props.src} alt="" />
                            ))} */}
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                        >
                            Close
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ModalUpdate