import {Link, Outlet} from "react-router-dom"
const Layout = ()=>{
    return(
        <>
        <Link to="home">Home</Link>
        <Link to="about">About</Link>
        <Link to="data">Data</Link>
        <Link to="contact">Contact</Link>

        <hr size="4" color="red"   />

        <main><Outlet/></main>


        <hr size="4" color="red"   />
        www.company.com


        
        
        </>
    )
}
export default Layout;