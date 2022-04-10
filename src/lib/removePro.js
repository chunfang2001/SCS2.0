export const removePro = async(id)=>{
    const sendRequest = async ()=>{
        const response = await fetch(`https://scsproject-14fe9-default-rtdb.firebaseio.com/product/${id}.json`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        if(!response.ok){
            throw new Error("Failed to delete product")
        }
    }
    await sendRequest()
}