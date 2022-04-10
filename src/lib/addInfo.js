export const addInfo = async(info) =>{
    const sendRequest = async()=>{
        const response = await fetch('https://scsproject-14fe9-default-rtdb.firebaseio.com/user.json',{
            method:"POST",
            body:JSON.stringify({
                name:info.name,
                email:info.email,
                contact:info.contact,
                total:0
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