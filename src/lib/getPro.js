export const getPro = async(id)=>{
    const sendRequest = async() =>{
        const response = await fetch(`https://scsproject-14fe9-default-rtdb.firebaseio.com/product/${id}.json`)
        if(!response.ok){
            throw new Error("fail to get ")
        }
        const data = await response.json()
        return data
    }
    const r = await sendRequest()
    return r
}
