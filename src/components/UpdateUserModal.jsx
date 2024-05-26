import React, { useEffect, useState } from 'react'
import { updateProfile } from '../Services/AxiosUser'
import { useSelector } from 'react-redux'

const UpdateUserModal = ({ closeModal, props, fetchUserProfile }) => {
    const userid = useSelector(state => state.user.account.userId)
    const token = useSelector(state => state.user.account.accessToken)

    const [myName, setMyName] = useState(props.fullname || '')
    const [myCountry, setMyCountry] = useState(props.country || '')
    const [myLanguage, setMyLanguage] = useState(props.language || '')
    const [myGender, setMyGender] = useState(props.gender || 0)

    console.log(props);
    // useEffect(() => {
    //     setMyName(props.fullname || null);
    //     setMyCountry(props.country || null);
    //     setMyLanguage(props.language || null);
    //     setMyGender(props.gender || 0);
    // }, [props.fullname, props.country, props.language, props.gender]);

    // console.log(myName, "-", myCountry, "-", myLanguage, "-", myGender);
    console.log(token);
    console.log(typeof myGender);
    const handleNameChange = (e) => {
        setMyName(e.target.value)
    }

    const handleCountryChange = (e) => {
        setMyCountry(String(e.target.value))
    }

    const handleLanguageChange = (e) => {
        setMyLanguage(String(e.target.value))
    }

    const handleGenderChange = (e) => {
        setMyGender(Number(e.target.value))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await updateProfile(token, userid, myName, myCountry, myLanguage, myGender)
            // console.log("Check res: ", res);
            closeModal()
            await fetchUserProfile()
        } catch (error) {
            console.log(error);
        }
    }
    // console.log(typeof myCountry);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">Update your infomation</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Name:</label>
                        <input
                            type="text"
                            value={myName}
                            className="w-full px-3 py-2 border rounded"
                            onChange={handleNameChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Country:</label>
                        <input
                            type="text"
                            value={myCountry}
                            className="w-full px-3 py-2 border rounded"
                            onChange={handleCountryChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Language:</label>
                        <input
                            type="text"
                            value={myLanguage}
                            className="w-full px-3 py-2 border rounded"
                            onChange={handleLanguageChange}
                        />
                    </div>
                    <div className='mb-4'>
                        <label className="block text-gray-700 mb-2">Gender</label>
                        <select
                            value={myGender}
                            onChange={handleGenderChange}
                            className="w-full p-2 border border-gray-300 rounded mt-2"
                        >
                            <option value="1">Male</option>
                            <option value="0">Female</option>
                        </select>
                        {/* <input type="number" value={myGender} onChange={handleGenderChange} /> */}
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

export default UpdateUserModal