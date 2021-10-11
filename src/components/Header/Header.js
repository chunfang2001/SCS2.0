import HeaderChoice from "./HeaderChoice";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HeaderDrop from "./HeaderDrop";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSliceAction } from "../../store/authslice";
import { useHistory } from "react-router";

const Header = ()=>{
    const admin = useSelector(state=>state.auth.admin)
    const history = useHistory()
    const dispatch = useDispatch()
    const [showHam,setShowHam] = useState(false)

    const HamburgerHandler = ()=>{
        setShowHam(!showHam)
    }
    const Logout = ()=>{
        dispatch(authSliceAction.removeToken())
        dispatch(authSliceAction.removeAdmin())
        history.replace('/login')
    }

    const backDefault = ()=>{
        history.push('/')
    }
    return (
        <>
            <div className="bg-gradient-to-r from-black to-blue-900 p-3 flex lg:justify-around justify-between items-center lg:px-0 px-10 z-10">
                <div className="text-red-50 font-bold text-3xl cursor-pointer" onClick={backDefault}>SCS <span className='font-thin'>2.0</span></div>
                <ul className='text-white list-none hidden lg:flex'>
                    {!admin&&<HeaderChoice to="/">Home</HeaderChoice>}
                    {admin&&<HeaderChoice to="/product">Product</HeaderChoice>}
                    <HeaderChoice to='/sales'>Sales</HeaderChoice>
                    <div className="px-4 cursor-pointer" onClick={Logout}>Logout</div>
                </ul>
                <div className="text-white lg:hidden cursor-pointer" onClick={HamburgerHandler}>
                    {!showHam&&<MenuIcon/>}
                    {showHam&&<CloseIcon/>}
                </div>
            </div>
            {showHam&&<HeaderDrop/>}
        </>
    )
}

export default Header;