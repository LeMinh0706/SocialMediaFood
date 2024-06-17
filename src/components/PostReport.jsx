import React from 'react'
import Avt from './Avt'

const PostReport = ({ name, time, avt, description, images }) => {
    return (
        <div className="w-[48rem] rounded-xl bg-white border p-3">
            <div className="flex w-full justify-between border-b p-2 items-center">
                <div className="flex items-center gap-5">
                    <Avt src={avt}></Avt>
                    <div>
                        <p className="font-medium">{name}</p>
                        <p className="text-xs font-lg text-gray-600">
                            {new Date(Number(time))
                                .toLocaleString("en-US", {
                                    timeZone: "Asia/Ho_Chi_Minh",
                                    hour12: false,
                                })
                                .replace(/ GMT.*$/, "")}
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <p className="mt-3">{description}</p>
                <div className="mt-3">{images}</div>

            </div>
        </div>
    )
}

export default PostReport