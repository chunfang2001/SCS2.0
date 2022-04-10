import { useEffect, useRef, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router'
import { getPro } from '../../lib/getPro'
import Card from '../UI/Card'

const Edit = ()=>{
    const [item,setItem]  = useState({
        code:'',
        name:'',
        price:''
    })
    const codeForm = useRef()
    const nameForm = useRef()
    const priceForm = useRef()
    const history = useHistory()

    const match = useRouteMatch()
    const param = match.params

    useEffect(()=>{
        const getProduct = async()=>{
            const product =await getPro(param.productId)
            setItem(product)
        }
        getProduct()
    },[param.productId])

    useEffect(()=>{
        codeForm.current.value=item.code
        nameForm.current.value=item.name
        priceForm.current.value= item.price
    },[item])
    
    const cancelHandler = (event)=>{
        event.preventDefault()
        history.push('/product')
    }

    const changeHandler = async(event)=>{
        event.preventDefault()
        const sendRequest = async() =>{
            const response = await fetch(`https://scsproject-14fe9-default-rtdb.firebaseio.com/product/${param.productId}.json`,{
                method:'PUT',
                body:JSON.stringify({
                    code:codeForm.current.value,
                    name:nameForm.current.value,
                    price:priceForm.current.value
                }),
                headers:{
                    "Content-Type":'application/json'
                }
            })
            if(!response.ok){
                throw new Error("fail to get ")
            }
        }   
        await sendRequest()        
        history.push('/product')
    }
    return <Card>
        <div className='bg-white flex flex-col items-center rounded-t-md p-3'>
            <h3 className='text-blue-700 font-bold text-3xl font-serif'>Edit Product</h3>
            <form className='w-full p-3 border rounded-sm grid grid-cols-5 gap-2 items-center'>
                <div className='md:text-lg text-base'>Code</div>
                <input className='col-start-2 col-span-5 bg-gray-100 p-2 px-3' placeholder='Code' ref={codeForm}></input>
                <div className='md:text-lg text-base'>Product Name</div>
                <input className='col-start-2 col-span-5 bg-gray-100 p-2 px-3' placeholder='Product Name' ref={nameForm}></input>
                <div className='md:text-lg text-base'>Price</div>
                <input className='col-start-2 col-span-5 bg-gray-100 p-2 px-3 w-1/4' placeholder='Price' type='number' min='0' step='0.01' ref={priceForm}></input>
                <div className='col-start-5 flex '>
                    <button className='text-white w-20 rounded-md py-2 font-medium bg-red-500 mx-3 hover:bg-red-900' onClick={cancelHandler}>Cancel</button>
                    <button className='text-white w-20 rounded-md py-2 font-medium bg-green-700 hover:bg-green-900' onClick={changeHandler}>Confirm</button>
                </div>
            </form>
        </div>
    </Card>
}

export default Edit