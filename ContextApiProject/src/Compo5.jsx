import { useContext } from "react";
import { MyContext } from "./App";
const Compo5 = ()=>{
    const {user,setUser} = useContext(MyContext);
    return(
        <>
        <h1>Component :----5{user}</h1>
        <button onClick={()=>{setUser("pradum")}} >click here</button>
        </>
    )
}
export default Compo5;