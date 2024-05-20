import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { removePost } from '../Services/AxiosPost';
import { toast } from 'react-toastify';
import ModalUpdate from './ModalUpdate';

const Dropdown = ({ iduser, idpost, token, postDetail }) => {
    const [isOpen, setIsOpen] = useState(false);
    const id = useSelector(state => state.user.account.userId)
    token = useSelector(state => state.user.account.accessToken)
    const [isOpenUpdate, setIsOpenUpdate] = useState(false);

    // console.log(postDetail);


    const openModalUpdate = () => {
        setIsOpenUpdate(true);
    };

    const closeModalUpdate = () => {
        setIsOpenUpdate(false);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    // console.log("Token drop: ", token);

    const handleUpdate = () => {
        alert("Update: " + iduser + 'UserId - IdPost' + idpost)

    }

    const handleRemove = async () => {
        try {
            alert(iduser + 'UserId - IdPost' + idpost)
            let data = await removePost(idpost, iduser, token);
            toast.success("Xóa thành công");
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={toggleDropdown}
                className="inline-flex justify-center w-full px-4 py-2 font-medium text-sm leading-5 rounded-md focus:outline-none"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                </svg>
            </button>

            {isOpen && (
                <div className=" absolute mt-1 w-36 rounded-md border shadow-lg bg-white">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <button className="block w-full text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"

                        >Báo cáo bài viết</button>
                        {iduser === id ?
                            <>
                                <button className="block w-full text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={openModalUpdate}
                                >Sửa bài viết</button>
                                {isOpenUpdate && <ModalUpdate closeModal={closeModalUpdate} post={postDetail} />}
                                <button className="block w-full text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={handleRemove}
                                >Xóa bài viết</button>
                            </>
                            : ""}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dropdown