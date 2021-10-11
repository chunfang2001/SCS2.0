import { NavLink } from "react-router-dom"

const HeaderChoice = (props)=>{
    return <NavLink exact className="px-4 text-white" to={props.to} activeClassName='text-blue-300'>{props.children}</NavLink>
}

export default HeaderChoice