import React from 'react'

const ModalFollowing = (props) => {

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-96">
                {/* <button onClick={fetch}>fetch</button> */}
                <h2 className="text-xl font-bold mb-4">Following </h2>
                <p className='text-sm text-gray-700'> total</p>
                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={props.closeModal}
                        className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
  )
}

export default ModalFollowing
