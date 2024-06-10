import React, { useEffect, useState } from 'react'
import { reportPost } from '../Services/AxiosPost';

const ModalReport = ({closeModal, postId, userId, token}) => {

    const [issueList, setIssueList] = useState([])

    let uncheckedIssue;

    function handleList(value){
        return value!=uncheckedIssue;
    }

    const handleCheckBoxChange = (e) => {
        let value = parseInt(e.target.value)
        if(e.target.checked)
        {    
            setIssueList(prevList => [...prevList, value])
        }
        else
        {
            uncheckedIssue = value
            setIssueList((prevList) => prevList.filter(handleList))
        }
    }

    useEffect(()=>{
        console.log("List of issue: ",issueList)
    },[issueList])

    const handleReportSubmit = async() => {
        try {
            const res = await reportPost(postId, issueList, userId, token)
            console.log(res)
            if(res && res.statusCode==200)
                closeModal()
        } catch (error) {
            
        }
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-96 flex flex-col gap-5">
                <h2>Vi phạm</h2>
                <div class="flex items-center mb-4">
                    <input id="default-checkbox" type="checkbox" value="1" onChange={handleCheckBoxChange} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-600">Tên người dùng không phù hợp</label>
                </div>
                <div class="flex items-center mb-4">
                    <input id="default-checkbox" type="checkbox" value="2" onChange={handleCheckBoxChange} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-600">Nội dung không phù hợp</label>
                </div>
                <div class="flex items-center mb-4">
                    <input id="default-checkbox" type="checkbox" value="3" onChange={handleCheckBoxChange} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-600">Từ ngữ nhạy cảm</label>
                </div>
                <div class="flex items-center mb-4">
                    <input id="default-checkbox" type="checkbox" value="4" onChange={handleCheckBoxChange} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-600">Hình ảnh không phù hợp</label>
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
                            onClick={async()=>handleReportSubmit()}
                        >
                            Submit
                        </button>
                    </div>
            </div>
        </div>
    );
}

export default ModalReport