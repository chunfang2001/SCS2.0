export const changeInfo = async(info) =>{
    const sendRequest = async()=>{
        const response = await fetch(`https://scsproject-14fe9-default-rtdb.firebaseio.com/user/${info.id}.json`,{
            method:"PUT",
            body:JSON.stringify({
                id:info.id,
                name:info.name,
                email:info.email,
                contact:info.contact,
                total:info.total
            }),
            headers:{
                "Content-Type": "application/json"
            }
        })
        if(!response.ok){
            throw new Error("failed to connect to database")
        }
    }
    await sendRequest()
}