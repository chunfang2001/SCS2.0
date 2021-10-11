import { useEffect, useRef } from "react"

const ProItem = (props)=>{
    const numberForm = useRef()
    const proNumHandler = (event)=>{
        numberForm.current.value= Math.ceil(event.target.value)

        props.onAdd({
            code:props.code,
            name:props.name,
            price:props.price,
            quantity: numberForm.current.value
        })
    }

    const proNumParamHandler = (number)=>{
        if(parseInt(numberForm.current.value)+number<0){
            return 
        }else{
            numberForm.current.value = parseInt(numberForm.current.value)+number
            props.onAdd({
                code:props.code,
                name:props.name,
                price:props.price,
                quantity:numberForm.current.value
            })
        }
    }

    useEffect(()=>{
        if(!props.isEntering){
            numberForm.current.value = 0
        }
    },[props.isEntering])

    return <div className='grid w-full grid-cols-5 overflow-hidden'>
        <div className='overflow-hidden p-2'>{props.code}</div>
        <div className='overflow-hidden p-2'>{props.name}</div>
        <div className='overflow-hidden p-2 flex justify-end'>{props.price}</div>
        <div className='overflow-hidden p-2 flex justify-center col-span-2'>
             <button className='bg-red-500 text-white w-6 rounded-md ' onClick={()=>{proNumParamHandler(-1)}}>-</button>
             <input type='number' min='0' step='1' className='border text-center w-14 mx-1' placeholder='0' onChange={proNumHandler} ref={numberForm} defaultValue='0'/>
             <button className='bg-blue-500 text-white w-6 rounded-md' onClick={()=>{proNumParamHandler(1)}}>+</button>
        </div>
    </div>
}

export default ProItem