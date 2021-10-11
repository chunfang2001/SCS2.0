const NotProduct = (props)=>{
    return <div className='w-full p-3 border flex flex-col items-center rounded-b-md'>
        <div>
            <h3>Don't have product yet</h3>
            <h3>Click <span className='text-indigo-700 hover:underline cursor-pointer font-bold' onClick={props.onCreate}>this</span> to create new product</h3>
        </div>
    </div>
}

export default NotProduct