import {  useRef } from "react"
import { addPro } from "../../lib/addPro"

const AddProduct = (props)=>{
    const codeForm = useRef()
    const nameForm = useRef()
    const priceForm = useRef()

    const addProduct = async (event)=>{
        event.preventDefault()
        if(codeForm.current.value===''){
            alert("code cannot be empty")
            return
        }
        if(nameForm.current.value===''){
            alert("name cannot be empty")
            return
        }
        if(priceForm.current.value===''){
            alert("price cannot be empty")
            return
        }
        const product = {
            code:codeForm.current.value,
            name:nameForm.current.value,
            price:parseFloat(priceForm.current.value).toFixed(2)
        }
        await addPro(product)
        
        props.onUpdate()
        codeForm.current.value = ''
        nameForm.current.value = ''
        priceForm.current.value = ''
        props.onCreate()
        
    }

    return <form className='w-full p-3 border rounded-sm grid grid-cols-5 gap-2 items-center'>
        <div className='md:text-lg text-base'>Code</div>
        <input className='col-start-2 col-span-5 bg-gray-100 p-2 px-3' placeholder='Code' ref={codeForm}></input>
        <div className='md:text-lg text-base'>Product Name</div>
        <input className='col-start-2 col-span-5 bg-gray-100 p-2 px-3' placeholder='Product Name' ref={nameForm}></input>
        <div className='md:text-lg text-base'>Price</div>
        <input className='col-start-2 col-span-5 bg-gray-100 p-2 px-3 w-1/4' placeholder='Price' type='number' min='0' step='0.01' ref={priceForm}></input>
        <div className='col-start-5 flex mx-auto mr-0'>
            <button className='bg-blue-500 text-white py-2 px-3 rounded-xl text-sm md:text-base hover:bg-purple-900 ' onClick={addProduct}>Add product</button>
        </div>
    </form>
}

export default AddProduct