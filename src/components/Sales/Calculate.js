import Item from "./Item"

const Calculate = (props)=>{
    const {items,total} = props.sales
    return <div className='col-span-2 mx-2 flex flex-col items-center mt-10 md:mt-0'>
    <h2 className='my-2 font-medium'>Sales Calculation</h2>
        <div className='border w-full flex flex-col justify-between' style={{height: "70vh"}}>      
            <div className='overflow-y-scroll' >   
                <div className='grid grid-cols-4 border-b'>
                    <div className='overflow-hidden p-2 font-medium text-indigo-700'>Code</div>
                    <div className='overflow-hidden p-2 font-medium text-indigo-700 flex justify-center'>Price</div>
                    <div className='overflow-hidden p-2 font-medium text-indigo-700 flex justify-center'>Quantity</div>
                    <div className='overflow-hidden p-2 font-medium text-indigo-700 flex justify-end'>Total</div>
                </div>  
                {items.map((obj)=>{
                    return <Item key={obj.code} code={obj.code} price={obj.price} quantity={obj.quantity} total={obj.price*obj.quantity}></Item>
                })}
            </div>
            <div className='flex justify-between m-2 p-2 border-t-2 border-black border-b-2'>
                <div>Total : </div>
                <div>RM <span className='font-medium text-red-600'>{total.toFixed(2)}</span></div>
            </div>
        </div>
    </div>
}

export default Calculate