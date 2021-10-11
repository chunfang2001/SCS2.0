const Item = (props)=>{
    return <div className='grid grid-cols-4'>
        <div className='p-2 overflow-hidden'>{props.code}</div>
        <div className='p-2 flex justify-center overflow-hidden'>{props.price}</div>
        <div className='p-2 flex justify-center overflow-hidden'>{props.quantity}</div>
        <div className='p-2 flex justify-end overflow-hidden'>{props.total.toFixed(2)}</div>
    </div>
}

export default Item