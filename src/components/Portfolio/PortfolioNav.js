import { useContext } from "react"
import { profileCtx } from "../../context/profileContext"

const PortfolioNav = ()=>{
    const profilectx = useContext(profileCtx)
    const name ="bg-gray-200 px-5 py-1 rounded-t-2xl text-md"
    const name2= "bg-blue-600 px-5 py-1 rounded-t-2xl text-md text-white"
    const changeProfile = ()=>{
        profilectx.changeStatus('profile')
    }
    const changeSecurity = ()=>{
        profilectx.changeStatus('security')
    }
    return <div className='mt-5 w-full '>
        <button className={profilectx.status==='profile'?name2:name} onClick={changeProfile}>Profile</button>
        <button className={profilectx.status==='security'?name2:name} onClick={changeSecurity}>Security</button>
    </div>
}

export default PortfolioNav