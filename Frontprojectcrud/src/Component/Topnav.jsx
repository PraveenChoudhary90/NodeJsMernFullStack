import { Outlet } from "react-router-dom";
import Layout from "../Layout";
import Footer from "./Footer";

const Topnav = ()=>{
    return(
        <>
      <Layout/>
      <div id="heading">
      <main><Outlet/></main>
      </div>
      <Footer/>
        </>
    )
}
export default Topnav;