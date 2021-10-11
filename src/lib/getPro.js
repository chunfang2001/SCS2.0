export const getPro = async(id)=>{
    const sendRequest = async() =>{
        const response = await fetch(`https://scs-project-d07b8-default-rtdb.firebaseio.com/product/${id}.json`)
        if(!response.ok){
            throw new Error("fail to get ")
        }
        const data = await response.json()
        return data
    }
    const r = await sendRequest()
    return r
}
