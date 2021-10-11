import ClearIcon from '@mui/icons-material/Clear';
import { removePro } from '../../lib/removePro';
import CreateIcon from '@mui/icons-material/Create';
import { Link, useRouteMatch } from 'react-router-dom';

const ProductItem = (props)=>{
    const match = useRouteMatch()
    const removeHandler = async (id)=>{
        await removePro(id)
        props.onUpdate()
    }
    return <div className='grid grid-cols-5 w-full border  border-t-0'>
        <div className='col-start-1 font-medium text-indigo-700 p-3 overflow-hidden'>{props.code}</div>
        <div className='px-3 font-medium text-indigo-700 border-l border-r  col-span-3 p-3 overflow-hidden flex justify-between items-center'>
            <div>{props.name}</div>
            <div>
                <Link to={`${match.path}/${props.id}`}>
                    <CreateIcon className='text-gray-500 cursor-pointer hover:text-gray-700 hover:bg-gray-200 transition-all rounded-full'/>
                </Link>
                <ClearIcon className='text-red-600 hover:bg-red-300 transition-all rounded-full cursor-pointer'  onClick={()=>{removeHandler(props.id)}}/>
                </div>
        </div>
        <div className='col-start-5 flex flex-col items-center font-medium text-indigo-700 p-3 overflow-hidden'>{props.price}</div>
    </div>
}

export default ProductItem