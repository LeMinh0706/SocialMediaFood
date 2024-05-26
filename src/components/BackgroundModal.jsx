import React from 'react'
import { useState } from "react";
import { updateBackground } from "../Services/AxiosUser";
import { useSelector } from "react-redux";

const BackgroundModal = ({ closeModal, fetchProfile }) => {

    const userId = useSelector(state => state.user.account.userId)
    const token = useSelector(state => state.user.account.accessToken)
    const [file, setFile] = useState([])

    console.log(file);
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };
    const handleUpload = async () => {
        let res = await updateBackground(token, userId, file)
        console.log("Check res: ", res);
    }
    return (
        <div className='pt-24 flex items-center justify-center'>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    )
}

export default BackgroundModal