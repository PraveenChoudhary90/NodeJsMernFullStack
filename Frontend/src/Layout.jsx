import { Link, Outlet } from "react-router-dom";

const Layout = ()=>{
    return(
        <>
        <ul>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/about" >About</Link></li>
            <li><Link to="/insert" >Insert</Link></li>
            <li><Link to="/display" >Display</Link></li>
        </ul>
        <main><Outlet/></main>
        </>
    )
}
export default Layout;