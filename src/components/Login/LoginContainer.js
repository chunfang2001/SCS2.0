import LoginForm from "./LoginForm"
import { useState } from 'react';

const LoginContainer = ()=>{
    const [loginPage,setLoginPage] = useState(true)

    const loginPageHandler = ()=>{
        setLoginPage(prev=>!prev)
    }

    return <div className="flex flex-col items-center w-full pt-40">
        <div className="bg-white p-5 rounded-lg flex-col flex items-center shadow-xl" style={{width:"28rem"}}>
            {loginPage&&<h1 className="text-4xl font-bold text-blue-900 font-sans mt-5">Login</h1>}
            {!loginPage&&<h1 className="text-4xl font-bold text-blue-900 font-sans mt-5">Register</h1>}
            <LoginForm onLoginPageHandler = {loginPageHandler} loginPage={loginPage}/>
        </div>
    </div>
}

export default LoginContainer