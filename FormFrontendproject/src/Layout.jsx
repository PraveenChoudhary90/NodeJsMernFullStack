import { Link, Outlet } from "react-router-dom";
const Layout =()=>{
    return(
      <>
      <Link to="home" >Home</Link>
      <Link to="insert" >Insert</Link>
      <Link to="display" >Dispaly</Link>
      <hr size="4" color="red"   />


      <main><Outlet/></main>
      <hr size="4" color="red"   />
      
      www.mycompanypraveen.com
      </>
    )
}

export default Layout;