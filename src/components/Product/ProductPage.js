import Card from '../UI/Card'
import ProductList from './ProductList'
import { useState,useEffect } from 'react'
import AddProduct from './AddProduct'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPro } from '../../lib/fetchPro'
import { saleSliceAction } from '../../store/saleslice'

const ProductPage = ()=>{
    const [updated,setUpdated] = useState(true)
    const [createPro,setCreatePro] = useState(false)
    const dispatch = useDispatch()
    const items = useSelector(state=>state.sale.item)

    const updatedHandler = ()=>{
        setUpdated(true)
    }
    const changePageHandler = ()=>{
        setCreatePro(state=>!state)
    }
    useEffect(()=>{
        let mount = true
        let timer
        const getProduct = async()=>{
            let productItem = []
            productItem = await fetchPro()
            if(mount){
                setUpdated(false)
                dispatch(saleSliceAction.replaceProduct({
                    product:productItem
                }))
            }  
        } 
        
        if(updated){
            timer = setTimeout(getProduct,500)
        }

        return () => { 
            mount =false
            clearInterval(timer)
        };
    },[updated,dispatch])
    const classL1 = 'bg-gray-100 rounded-l-xl p-2 border-r border-white hover:bg-blue-200'
    const classL2 = 'rounded-l-xl p-2 border-r border-white bg-blue-600 text-white'
    const classR1 = 'bg-gray-100 rounded-r-xl p-2 border-r border-white hover:bg-blue-200'
    const classR2 = 'rounded-r-xl p-2 border-r border-white bg-blue-600 text-white'
    return <Card>
        <div className="mx-4 bg-white rounded-t-2xl p-5 flex-col flex items-center shadow-xl mt-3 " >
            <h3 className='text-blue-700 font-bold text-3xl font-serif'>{createPro?"Add Product":"All Product"}</h3>
            <br></br>
            <div className="rounded-2xl grid grid-cols-2 shadow-md w-64 mx-auto mt-5">
                <button className={createPro===false?classL2:classL1} onClick={changePageHandler}>Product List</button>
                <button className={createPro===true?classR2:classR1} onClick={changePageHandler}>Add Product</button>
            </div>
            <br></br>
            {!createPro&&<ProductList onUpdate={updatedHandler} items={items} onCreate={changePageHandler}></ProductList>}
            {createPro&&<AddProduct onUpdate={updatedHandler} onCreate={changePageHandler}></AddProduct>}
        </div>
    </Card>
}

export default ProductPage

