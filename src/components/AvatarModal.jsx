import React from 'react'
import { useState } from "react";
import { updateAvatar } from "../Services/AxiosUser";
import { useDispatch, useSelector } from "react-redux";

const AvatarModal = ({ closeModal, fetchProfile }) => {
    const userId = useSelector(state => state.user.account.userId)
    const token = useSelector(state => state.user.account.accessToken)
    const [file, setFile] = useState([])
    const dispatch = useDispatch()
    console.log(file);
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };
    const handleUpload = async (e) => {
        e.preventDefault();
        try {
            let res = await updateAvatar(token, userId, file)
            console.log("Check res: ", res.data.data.url_avatar);
            // await fetchProfile();
            window.location.reload()
            closeModal()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        // <div className='pt-24 flex items-center justify-center'>
        //     <input type="file" onChange={handleFileChange} />
        //     <button onClick={handleUpload}>Upload</button>
        // </div>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">Update your avatar</h2>
                <form onSubmit={handleUpload}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Avatar:</label>
                        <input type="file" onChange={handleFileChange} required />
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
    )
}

export default AvatarModal