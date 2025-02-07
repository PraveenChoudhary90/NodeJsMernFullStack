import { Outlet } from "react-router-dom";
import Layout from "../Layout";
import Footer from "./Footer";

const Topnav = ()=>{
    return(
        <>
        <Layout/>
        <div style={{margin:"30px"}}>
        <main><Outlet/></main>
        </div>
        <Footer/>
        </>
    )
}
export default Topnav;