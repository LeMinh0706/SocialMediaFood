import React, { useState } from 'react'
import { useSelector } from 'react-redux';
// import { createPost } from '../Services/AxiosPost';
import axios from 'axios';
import { createPost } from '../Services/AxiosPost';

const Test = () => {
    const token = useSelector(state => state.user.account.accessToken)
    const userId = useSelector(state => state.user.account.userId);
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");

    const handlDesChange = (event) => {
        setDescription(event.target.value);
    };

    const onFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    console.log(description);
    const onFileUpload = async () => {
        try {
            const data = await createPost(userId, token, description, file);
            setMessage("File uploaded successfully!");
            console.log("data: ", data);
        } catch (error) {
            setMessage(error.message);
            console.error(error);
        }
    };


    return (
        <div className='pt-24'>
            <h2>Upload a File</h2>
            <input type="text" onChange={handlDesChange} />
            <input type="file" onChange={onFileChange} />

            <button onClick={onFileUpload}>Upload</button>
            <p>{message}</p>
        </div>
    );
}

export default Test