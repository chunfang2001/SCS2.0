import { useEffect, useState } from "react"
import { fetchPro } from "../../lib/fetchPro"
import ProItem from "./ProItem"

const AllProduct = (props)=>{
    const [items,setItems] = useState([])
    
    useEffect(()=>{
        let mount = true
        const getProduct = async()=>{
            const products = await fetchPro()
            if(mount===true){
                setItems(products)
            }
        }
        getProduct()
        return ()=>{
            mount=false
        }
    },[])

    
    return(
        <div className='col-span-3 mx-2 flex flex-col items-center '>
            <h2 className='my-2 font-medium'>Product List</h2>
            <div className='border rounded overflow-y-scroll w-full' style={{height: "70vh"}}>
                <div className='grid w-full grid-cols-5 overflow-hidden border-b' >
                    <div className='overflow-hidden p-2 font-medium text-indigo-700'>Code</div>
                    <div className='overflow-hidden p-2 font-medium text-indigo-700'>Name</div>
                    <div className='overflow-hidden p-2 flex justify-end font-medium text-indigo-700'>Price</div>
                    <div className='overflow-hidden p-2 flex col-span-2 justify-center font-medium text-indigo-700'>Control</div>
                </div>
                {items.map((obj)=>{
                    return <ProItem isEntering={props.isEntering} code={obj.code} name={obj.name} price={obj.price} key={obj.code} onAdd={props.onAdd} onReduce={props.onReduce}/>
                })}
            </div>
        </div>
    )
}

export default AllProduct