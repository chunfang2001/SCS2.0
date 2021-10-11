import { createContext, useState } from "react";

export const profileCtx = createContext({
    status: 'profile',
    changeStatus: ()=>{}
})

const ProfileContext = (props)=>{
    const [status,setState] = useState('profile')
    const changeStatus = (status)=>{
        setState(status)
    }
    const ctx = {
        status:status,
        changeStatus: changeStatus
    }
    return (
    <profileCtx.Provider value={ctx}>
        {props.children}
    </profileCtx.Provider>
    )
}

export default ProfileContext