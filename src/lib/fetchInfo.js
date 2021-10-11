export const fetchInfo = async (email)=>{
    const sendRequest = async() =>{
        const response = await fetch("https://scs-project-d07b8-default-rtdb.firebaseio.com/user.json")
        const res = await response.json()
        let arr = []
        for (const r in res){
            arr = [...arr,{id:r,...res[r]}]
        }
        const a = arr.filter((obj)=>obj.email===email)
        return a[0]
    }
    const data = await sendRequest()
    return data
}