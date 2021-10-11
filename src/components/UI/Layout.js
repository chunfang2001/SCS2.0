const Layout = (props)=>{
    return <div className="bg-gradient-to-t from-blue-300 via-blue-200 to-blue-300 min-h-screen">
        {props.children}
    </div>
} 

export default Layout