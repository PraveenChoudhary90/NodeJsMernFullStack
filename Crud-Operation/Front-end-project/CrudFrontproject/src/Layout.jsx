import Footer from "./Component/Footer"
import Topbar from "./Component/Topbar"
import { Outlet } from "react-router-dom"
const Layout=()=>{
    return(
        <>
        <Topbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout