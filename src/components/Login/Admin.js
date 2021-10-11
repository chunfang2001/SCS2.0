import ReactDOM from 'react-dom';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { authSliceAction } from '../../store/authslice';

const Admin = (props)=>{
    return <>
        {ReactDOM.createPortal(<AdminBackground onAdminLogin = {props.onAdminLogin}/>,document.getElementById('modal'))}
        {ReactDOM.createPortal(<AdminForm/>,document.getElementById('modal'))}
    </>
}

const AdminBackground =(props)=>{
    return <div className='w-screen h-screen top-0 left-0 fixed bg-gray-900 opacity-70' onClick={props.onAdminLogin}>
        {props.children}
    </div>
}

const AdminForm = ()=>{
    const emailForm = useRef()
    const passwordForm = useRef()
    const dispatch = useDispatch()

    const adminLoginHandler = (event)=>{
        event.preventDefault()
        dispatch(authSliceAction.setToken({
            token:"admin"
        }))
        dispatch(authSliceAction.setAdmin())
        if(emailForm.current.value ==='chunfang' && passwordForm.current.value==='123456'){
            dispatch(authSliceAction.setToken({
                token:"admin"
            }))
            dispatch(authSliceAction.setAdmin())
        }else{
            alert("Authorization fail")
        } 
    }
    
    return (
        <div className='bg-white mt-40 p-10 flex-col flex items-center rounded-xl shadow-2xl fixed' style={{width:"28rem",left:"50%",transform:"translate(-50%)"}}>
            <h1 className="text-4xl font-bold text-blue-900 font-sans mt-5">Admin</h1>
            <form className='mt-10'> 
                <div className="font-sans text-lg">Email</div>
                <div className="flex items-center justify-between mt-1 p-3 shadow-md rounded bg-gray-50 focus-within:shadow-xl">
                    <EmailIcon className="text-blue-800"/>
                    <input type="text" className="border-black border-opacity-100  w-72 ml-3 outline-none p-2 bg-gray-50 " placeholder="Email" ref={emailForm} />
                </div>
                <div className="font-sans text-lg mt-5">Password</div>
                <div className="flex items-center justify-between mt-1 p-3 shadow-md rounded bg-gray-50 focus-within:shadow-xl">
                    <VpnKeyIcon className="text-blue-800"/>
                    <input type="password" className="border-black border-opacity-100  w-72 ml-3 outline-none p-2 bg-gray-50" placeholder="Password" ref={passwordForm}/>
                </div>
                <div className='mt-6 flex flex-col items-center'>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-10 py-3 rounded-xl text-gray-50 font-bold hover:from-yellow-400 hover:to-red-500 shadow-lg" onClick={adminLoginHandler}>Admin Login</button>
                </div>
            </form>
        </div>

    )
}

export default Admin