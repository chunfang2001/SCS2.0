import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { authSliceAction } from "../../store/authslice"


const HeaderDrop = ()=>{
    const admin = useSelector(state=>state.auth.admin)
    const history = useHistory()
    const dispatch = useDispatch()

    const HomeNavi = ()=>{
        history.push('/')
    }
    const ProductNavi = ()=>{
        history.push('/product')
    }
    const SalesNavi = ()=>{
        history.push('/sales')
    }
    const Logout = ()=>{
        dispatch(authSliceAction.removeToken())
        dispatch(authSliceAction.removeAdmin())
        history.replace('/login')
    }
    return (<div className="flex divide-y divide-white bg-gradient-to-t from-blue-100 via-white to-blue-100 flex-col items-center lg:hidden border-b border-blue-300 h-full fixed">
    {!admin&&<div className="py-7 w-screen flex items-center flex-col cursor-pointer hover:bg-blue-100 "  onClick={HomeNavi}>
        <div className="font-bold">Home</div>
    </div>}
    {admin&&<div className="py-7 w-screen flex items-center flex-col cursor-pointer hover:bg-blue-100 " onClick={ProductNavi}>
        <div className="font-bold">Product</div>
    </div>}
    <div className="py-7 w-screen flex items-center flex-col cursor-pointer hover:bg-blue-100 " onClick={SalesNavi}>
        <div className="font-bold" >Sales</div>
    </div>
    <div className="py-7 w-screen flex items-center flex-col cursor-pointer hover:bg-blue-100 " onClick={Logout}>
        <div className="font-bold" >Log Out</div>
    </div>
  </div>)
}

export default HeaderDrop