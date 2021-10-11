import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changePassword } from "../../store/auth-action"

const Security =()=>{
    const passwordForm = useRef()
    const [confirm,setConfirm] = useState(false)
    const token = useSelector(state=>state.auth.token)
    const dispatch = useDispatch()
    const changePasswordHandler =(event)=>{
        event.preventDefault()
        const password = passwordForm.current.value
        if(password===''){
            alert("Password cannot be blank")
            return
        }
        if(confirm){
            dispatch(changePassword(token,password))
            passwordForm.current.value = ''
        }else{
            alert("Please confirm your decision in checkbox below")
            return
        }
    }

    const confirmHandler = (event)=>{
        setConfirm(event.target.checked)
    }

    return <div className='w-full p-3 border rounded-sm grid grid-cols-5 gap-2 items-center'>
        <div className='col-span-6 text-xl my-4 font-bold text-purple-700 md:text-2xl'>CHANGE PASSWORD</div>
        <div className='md:text-lg text-base'>Password</div>
        <input className='col-start-2 col-span-5 bg-gray-100 p-2 px-3' type='password'ref={passwordForm}/>
        <div className='col-start-2 col-span-5 flex items-center'>
            <input type="checkbox" onChange={confirmHandler} checked={confirm}/>
            <p className="mx-2 text-sm">Do you agree to change password?</p>
        </div>
        <div className='col-start-5 flex items-center'>
            <button className='bg-blue-500 text-white py-2 px-3 rounded-xl text-sm md:text-base hover:bg-purple-900' onClick={changePasswordHandler}>change password</button>
        </div>
    </div>
}

export default Security