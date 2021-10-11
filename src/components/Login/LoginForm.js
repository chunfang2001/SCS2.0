import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login,register } from '../../store/auth-action';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Admin from './Admin';

const LoginForm = (props)=>{
    const emailForm = useRef()
    const passwordForm = useRef()
    const nameForm = useRef()
    const dispatch = useDispatch()
    const [adminLogin ,setAdminLogin] = useState(false)

    const adminLoginHandler = ()=>{
        setAdminLogin(state=>!state)
    }
    const loginHandler = (event)=>{
        const email = emailForm.current.value
        const password = passwordForm.current.value
        event.preventDefault()
        dispatch(login(email,password))
    }
    const signupHandler = (event)=>{
        const email = emailForm.current.value
        const password = passwordForm.current.value
        const name = nameForm.current.value
        event.preventDefault()
        dispatch(register(name,email,password))
    }
    return <form className="mt-10">
        {!props.loginPage&&<div className="font-sans text-lg">Name</div>}
        {!props.loginPage&&<div className="flex items-center justify-between mt-1 p-3 shadow-md rounded bg-gray-50 focus-within:shadow-xl">
            <PermIdentityIcon className="text-blue-800"/>
            <input type="text" className="border-black border-opacity-100  w-72 ml-3 outline-none p-2 bg-gray-50 " placeholder="Name" ref={nameForm}/>
        </div>}
        <div className="font-sans text-lg mt-5">Email</div>
        <div className="flex items-center justify-between mt-1 p-3 shadow-md rounded bg-gray-50 focus-within:shadow-xl">
            <EmailIcon className="text-blue-800"/>
            <input type="text" className="border-black border-opacity-100  w-72 ml-3 outline-none p-2 bg-gray-50 " placeholder="Email" ref={emailForm}/>
        </div>
        <div className="font-sans text-lg mt-5">Password</div>
        <div className="flex items-center justify-between mt-1 p-3 shadow-md rounded bg-gray-50 focus-within:shadow-xl">
            <VpnKeyIcon className="text-blue-800"/>
            <input type="password" className="border-black border-opacity-100  w-72 ml-3 outline-none p-2 bg-gray-50" placeholder="Password" ref={passwordForm}/>
        </div>
        <div className="flex items-center flex-col p-3">
            <div className="text-blue-600 underline cursor-pointer" onClick={props.onLoginPageHandler}>{props.loginPage?"Register now":"Login now"}</div>
        </div>
        
        <div className="flex items-center flex-col mt-1 p-3">
            {props.loginPage&&<button className="bg-gradient-to-r from-blue-500 to-purple-500 px-10 py-3 rounded-xl text-gray-50 font-bold hover:from-yellow-400 hover:to-red-500 shadow-lg" onClick={loginHandler}>Login</button>}
            {!props.loginPage&&<button className="bg-gradient-to-r from-blue-500 to-purple-500 px-10 py-3 rounded-xl text-gray-50 font-bold hover:from-yellow-400 hover:to-red-500 shadow-lg" onClick={signupHandler}>Register</button>}
        </div>
        <div className="flex items-center flex-col">
            <div className="text-blue-600 underline cursor-pointer" onClick={adminLoginHandler}>Login as admin</div>
        </div>
        {adminLogin&&<Admin onAdminLogin={adminLoginHandler}></Admin>}
    </form>
}

export default LoginForm