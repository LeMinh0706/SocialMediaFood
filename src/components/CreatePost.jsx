import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { createPost } from '../Services/AxiosPost';
import { fetchPost } from '../Services/Query/api';
import { toast } from 'react-toastify';

const CreatePost = () => {
    const token = useSelector(state => state.user.account.accessToken)
    const userId = useSelector(state => state.user.account.userId);

    const [file, setFile] = useState([]);
    const [description, setDescription] = useState('');

    console.log("File", file);
    // console.log("Des: ", description);
    const handleDesChange = (event) => {
        setDescription(event.target.value)
    }

    const handleFileChange = (event) => {
        setFile(event.target.files);
    };

    const handleNoContent = (event) => {
        toast.error("Bạn chưa thêm nội dung")
    }

    const onFileUpload = async () => {
        try {
            const data = await createPost(file, description, token, userId);
            toast.success("Đăng bài thành công!");
            // console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='p-5 flex flex-col items-center gap-7 bg-white w-[40rem] rounded-lg shadow-lg border'>
            <label className='text-2xl font-bold text-rose-600' htmlFor="">Đăng bài viết</label>
            <textarea className='p-3 focus:outline-none border-red-400 border-2 w-[30rem] resize-none' type="text" value={description} onChange={handleDesChange} placeholder="Viết những tâm tư của bạn" />
            <input className="mt-1 block w-[30rem] p-3 border-2 border-red-400 rounded-md shadow-sm focus:border-rose-800"
                type="file" multiple onChange={handleFileChange} />
            {(description !== '' || file[0] != null) ?
                <button className='p-4 bg-rose-700 text-white font-medium rounded-lg' onClick={onFileUpload}>Đăng bài</button>
                :
                <button className='p-4 bg-gray-700 text-white font-medium rounded-lg hover:opacity-100' onClick={handleNoContent}>Đăng bài</button>

            }
        </div>
    );
}

export default CreatePost