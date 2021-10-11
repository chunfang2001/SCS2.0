import { useEffect, useState } from "react"
import { fetchInfo } from "../../lib/fetchInfo"
import { useSelector } from "react-redux";
import { changeInfo } from "../../lib/changeInfo";

const Profile = ()=>{
    const email = useSelector(state=>state.auth.email)
    const [personalInfo, setPersonalInfo] = useState({})
    const [updated,setUpdated]= useState(true)

    const [name,setName] = useState('')
    const [contact,setContact] = useState('')
    const [edit,setEdit]= useState(false)

    const editHandler = ()=>{
        setEdit(state=>!state)
        setName(personalInfo.name)
        setContact(personalInfo.contact)
    }
    const nameHandler = (event)=>{
        setName(event.target.value)
    }
    const contactHandler = (event)=>{
        setContact(event.target.value)
    }
    const changeInfoHandler = async()=>{
        await changeInfo({
            id:personalInfo.id,
            name:name,
            email:personalInfo.email,
            contact:contact,
            total:personalInfo.total
        })
        setUpdated(true)
        setEdit(state=>!state)
        alert("Updated Successfully")
    }

    useEffect(()=>{
        let mount = true
        const getInfo = async()=>{
            const data = await fetchInfo(email)
            if(mount){
                setPersonalInfo(data)
                setName(data.name)
                setContact(data.contact)
                setUpdated(false)
            }    
        }
        if(updated){
            getInfo()
        }
        return ()=>{
            mount = false
        }
    },[email,updated])

    return <div className='w-full p-3 border rounded-sm grid grid-cols-5 gap-2 items-center'>
        <div className='col-span-6 text-xl my-4 font-bold text-purple-700 md:text-2xl'>PROFILE</div>
        <div className='md:text-lg text-base' >Email</div>
        <div className='col-start-2 col-span-5 bg-gray-100 p-2 px-3 overflow-hidden'>{personalInfo.email}</div>
        <div className='md:text-lg text-base'>Name</div>
        {!edit&&<div className='col-start-2 col-span-5 bg-gray-100 p-2 px-3'>{personalInfo.name}</div>}
        {edit&&<input type="text" className='col-start-2 col-span-5 bg-gray-100 p-2 px-3 border border-blue-500' value={name} onChange={nameHandler}/>}
        <div className='md:text-lg text-base' >Contact Number</div>
        {!edit&&<div className='col-start-2 col-span-5 bg-gray-100 p-2 px-3 overflow-hidden'>{personalInfo.contact}</div>}
        {edit&&<input type="text" className='col-start-2 col-span-5 bg-gray-100 p-2 px-3 border border-blue-500'value={contact} onChange={contactHandler}/>}
        <div className='flex justify-end col-span-5 mt-5'>
            {!edit&&<button className='bg-gradient-to-r from-blue-500 to to-indigo-800 text-white w-20 rounded-md py-2 hover:from-pink-400 hover:to-purple-700 font-medium' onClick={editHandler}>Edit</button>}
            {edit&&<button className='text-white w-20 rounded-md py-2 font-medium bg-red-500 mx-3 hover:bg-red-900' onClick={editHandler}>Cancel</button>}
            {edit&&<button className='text-white w-20 rounded-md py-2 font-medium bg-green-700 hover:bg-green-900' onClick={changeInfoHandler}>Confirm</button>}
        </div>
        <button></button>
    </div>
}

export default Profile