import { useMemo } from "react";
import { useState } from "react";

const UseMemo= ()=>{
    const[count, setCount]=useState(0);
    const[sub, setSub]= useState(90);

    const MyMulti = useMemo(multi,[count]);

    function multi(){
        console.log("********")
        return count*2;
    }
    return(
        <>
        <h1>Increment:{count}</h1>
        <h1>Multification:{MyMulti}</h1>
        <button onClick={()=>{setCount(count+1)}} >add</button>
        <h1>Decrement:{sub}</h1>
        <button onClick={()=>{setSub(sub-1)}} >Sub</button>
        </>
    )
}
export default UseMemo;