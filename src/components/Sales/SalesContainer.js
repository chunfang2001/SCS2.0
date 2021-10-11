import AllProduct from "./AllProduct"
import Calculate from "./Calculate"
import Card from '../UI/Card'
import { useReducer } from "react"
import { Prompt } from 'react-router-dom'
import { useState } from "react"

const saleState ={
    items:[],
    total:0
}

const saleReducer = (state,action)=>{
    if(action.type==='addItem'){
        let found = false
        let arr = state.items.map((obj)=>{
            if(obj.code===action.product.code){
                found = true
                return action.product
            }
            return obj
        })
        if(!found){
            arr = [...arr,action.product]
        }
        let total = 0
        arr = arr.filter((obj)=>{
            total+= obj.price*obj.quantity
            return parseInt(obj.quantity)!==0
        })
        return {items:arr,total:total}
    }
    if(action.type==='clear'){
        return {
            items:[],
            total:0
        }
    }
    return state
}
const SalesContainer = ()=>{
    const [sales, dispatchSales] = useReducer(saleReducer, saleState)
    const [isEntering,setIsEntering] = useState(false)
    
    const addProduct = (product)=>{
        dispatchSales({type:"addItem",product})
        setIsEntering(true)
    }
    const reduceProduct = (product)=>{
        setIsEntering(true)
        dispatchSales({type:"reduceItem",product})
    }
    const clearProduct = ()=>{
        setIsEntering(false)
        dispatchSales({type:'clear'})
    }

    return <Card>
        <Prompt
            when={isEntering}
            message="The data will be gone. Are you sure you want to leave now?"
            />
        <div className='rounded-xl bg-white p-3 flex flex-col items-center'>
            <h3 className='text-blue-700 font-bold text-3xl font-serif'>Sales</h3>
            <div className='md:grid md:grid-cols-5 mt-3 w-full flex flex-col justify-center'>
                <AllProduct onAdd={addProduct} onReduce={reduceProduct} isEntering={isEntering}/>
                <Calculate sales={sales}/>
            </div>
            <div className='w-80 mx-10'>
                <button className='bg-red-600 text-white mt-4 px-3 py-2 rounded-xl w-full font-medium hover:bg-red-900' onClick={clearProduct} >Clear All</button>
            </div>
        </div>
    </Card>
    
}

export default SalesContainer