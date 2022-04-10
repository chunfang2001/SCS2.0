export const addPro = async (product)=>{
    const sendRequest = async ()=>{
        const response = await fetch("https://scsproject-14fe9-default-rtdb.firebaseio.com/product.json",{
            method:"POST",
            body:JSON.stringify(product),
            headers:{
                "Content-Type": "application/json"
            }
        })
        if(!response.ok){
            throw new Error("Cannot connect to database")
        }
    }
    await sendRequest().catch(err=>{
        alert(err.message)
    })
}

