import React from 'react'
import { useState } from 'react';
import { postRegister } from '../Services/AuthService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterForm = ({ backLogin }) => {

    const [email, setEmail] = useState('');
    const [fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleFullnameChange = (event) => {
        setFullname(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Username: ', fullname);
    };
    const handleRegister = async () => {
        let res = await postRegister(email, password, fullname)
        console.log("Check res: ", res);
        toast.success("Đăng ký thành công!")
        backLogin()
    }


    return (
        <form className='mt-10 flex flex-col items-center gap-5' onSubmit={handleSubmit}>
            <p className="text-lg font-semibold border-b-2 border-black">Register</p>
            <div className='w-1/4'>
                <label className='text-start block' htmlFor='emailRe'>
                    Email:
                </label>
                <input className='w-full text-sm border-violet-500 ml-2 rounded-lg p-2 border-2 mt-3' id='emailRe' type="email" value={email} onChange={handleEmailChange} />
            </div>
            <div className='w-1/4'>
                <label className='text-start block' htmlFor='passwordRegister'>
                    Password:
                </label>
                <input className='w-full text-sm border-violet-500 ml-2 rounded-lg p-2 border-2 mt-3' id='passwordRegister' type="password" value={password} onChange={handlePasswordChange} />
            </div>
            <div className='w-1/4'>
                <label className='text-start block' htmlFor='username'>
                    Fullname:
                </label>
                <input className='w-full text-sm border-violet-500 ml-2 rounded-lg p-2 border-2 mt-3' id='username' type="text" value={fullname} onChange={handleFullnameChange} />
            </div>
            <button
                className='mt-3 p-2 bg-fuchsia-300 border text-lg font-medium rounded-md text-slate-700'
                type="submit"
                onClick={handleRegister}
            >Đăng ký</button>
        </form>
    )
}

export default RegisterForm