import NotProduct from "./NotProduct"
import ProductItem from "./ProductItem"
// const DummyProduct = []

const ProductList = (props)=>{
    return <div className='w-full'>
        <div className='grid grid-cols-5 w-full border border-black rounded-t-md'>
            <div className='col-start-1  text-xl font-medium p-3'>Code</div>
            <div className=' text-xl border-r col-span-3 px-3 border-l border-black font-medium p-3'>Name</div>
            <div className='col-start-5 flex flex-col items-center text-xl font-medium p-3'>Price</div>
        </div>
        {props.items.length===0&&<NotProduct onCreate={props.onCreate}/>}
        {props.items.map((obj)=><ProductItem id={obj.id} code={obj.code} name={obj.name} price={obj.price} key={obj.code} onUpdate={props.onUpdate}></ProductItem>)}
        </div>
}

export default ProductList