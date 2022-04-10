export const fetchPro = async ()=>{
    const sendRequest = async ()=>{
        const response = await fetch("https://scsproject-14fe9-default-rtdb.firebaseio.com/product.json")
        if(!response.ok){
            throw new Error("failed to connect with database")
        }
        let result = []
        const res = await response.json()
        for (const r in res){
            result = [...result,{id:r,...res[r]}]
        }
        return result
    }
    const arr = await sendRequest().catch(err=>{
        alert(err.message)
    })
    return arr
}