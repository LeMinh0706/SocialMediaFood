import React, { useEffect, useState } from 'react'
import { upgradeAccount } from '../Services/AxiosUser';

const UpgradeButton = ({isPending, token}) => {
    const [upgradeButton, setUpgradeButton] = useState({
        text: "Upgrade",
        color: "blue",
        pending: false,
    })

    function changeButtonStyle(){
        setUpgradeButton((prev)=>{
            prev["text"] = "Pending ...";
            prev["color"] = "gray";
            prev["pending"] = true;
            return {...prev}
         })
    }

    const handleUpgrade = async() => {
        try {
            const res = await upgradeAccount(token)
            if(res && res.status == 201)
                changeButtonStyle()
        } catch (error) {
            
        }
    }
        
    useEffect(()=>{
        if(isPending==1)
        {
            changeButtonStyle()
        }
    },[])
    return (
        <div>
            <button 
                    disabled={upgradeButton.pending}
                    className={`px-3 py-2 font-medium flex items-center rounded-md text-white bg-${upgradeButton.color}-600`}
                    onClick={async()=>handleUpgrade()}
                    >
                    {upgradeButton.text}
            </button>
        </div>
    )
}

export default UpgradeButton