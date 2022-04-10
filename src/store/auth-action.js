import { addInfo } from "../lib/addInfo"
import { authSliceAction } from "./authslice"

const {React_App_Firebase_API} = process.env

export const login =  (email,password) =>{
    return async (dispatch) =>{
        const sendRequest = async ()=> {
            const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${React_App_Firebase_API}`,{
                method:'POST',
                body:JSON.stringify({
                    email:email,
                    password:password,
                    returnSecureToken:true
                }),
                headers:{
                    "Content-Type": "application/json"
                }
            })
            if(!response.ok){
                throw new Error("Authorization fail")
            }else{
                const data = await response.json()
                dispatch(authSliceAction.setToken({
                    token:data.idToken,
                    email:data.email
                }))
                return data.idToken
            }
            
        }
        await sendRequest().catch(err=>{
            alert(err.message)
        })
    }
}

export const register = (name,email,password)=>{
    return async (dispatch)=>{
        const sendRequest = async()=>{
            const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${React_App_Firebase_API}`,{
                method:"POST",
                body:JSON.stringify({
                    email:email,
                    password:password,
                    returnSecureToken:true
                }),
                headers:{
                    "Content-Type": "application/json"
                } 
            })
            console.log(response)
            if(!response.ok){
                throw new Error("Registration fail")
            }else{
                console.log("A")
                const data = await response.json()
                const addUser = async (info)=>{
                    await addInfo(info)
                }
                await addUser({
                    name:name,
                    email:email,
                    contact:'-',
                })
                dispatch(authSliceAction.setToken({
                    token:data.idToken,
                    email:data.email
                }))
            }
        }
        await sendRequest().catch(err=>{
            alert(err.message)
        })
    }
}

export const changePassword = (token,password)=>{
    return async(dispatch)=>{
        const sendRequest=async ()=>{
            const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${React_App_Firebase_API}`,{
                method:"POST",
                body:JSON.stringify({
                    idToken:token,
                    password:password,
                    returnSecureToken:false
                }),
                headers:{
                    "Content-Type": "application/json"
                } 
            })
            if(!response.ok){
                throw new Error("Authorization error")
            }else{
                alert("Password changed successfully")
            }
        }
        sendRequest().catch(err=>{
            alert(err.message)
        })
    }
}