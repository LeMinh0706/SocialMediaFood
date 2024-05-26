import { useSelector } from "react-redux";
import { createDinerPost } from "../Services/AxiosDinerPost";
import { toast } from 'react-toastify';
import { useState } from "react";
const CreateDiner = () => {
    const token = useSelector(state => state.user.account.accessToken)
    const userId = useSelector(state => state.user.account.userId);

    const [file, setFile] = useState([]);
    const [dinerName, setDinerName] = useState('');
    const [dinerAddress, setDinerAddress] = useState('');
    const [description, setDescription] = useState('');

    console.log("File", file);

    const handleDinerName = (event) => {
        setDinerName(event.target.value)
    }

    const handleDinerAddress = (event) => {
        setDinerAddress(event.target.value)
    }

    const handleDescription = (event) => {
        setDescription(event.target.value)
    }

    const handleFileChange = (event) => {
        setFile(event.target.files);
    };

    const handleNoContent = () => {
        toast.error("Bạn chưa thêm nội dung")
    }

    const onFileUpload = async () => {
        try {
            const data = await createDinerPost(file, dinerName, dinerAddress, description, token, userId);
            toast.success("Đăng bài thành công!");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='p-5 flex flex-col items-center gap-7 bg-white w-[40rem] rounded-lg shadow-lg border'>
            <label className='text-2xl font-bold text-rose-600' htmlFor="">Tên quán</label>
            <input className="diner-name" type="text" placeholder="Nhập tên quán" onChange={handleDinerName}></input>
            <label className='text-2xl font-bold text-rose-600' htmlFor="">Địa chỉ</label>
            <input className="diner-name" type="text" placeholder="Nhập địa chỉ của quán" onChange={handleDinerAddress}></input>
            <textarea className='p-3 focus:outline-none border-red-400 border-2 w-[30rem] resize-none' type="text" value={description} onChange={handleDescription} placeholder="Mô tả về quán" />
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

export default CreateDiner