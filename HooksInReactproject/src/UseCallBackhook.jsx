import { memo } from "react";


const UseCallBackHook=({task,Addtask})=>{
    console.log("********");
    return(
        <>
        {
        task.map((key,index)=>{
            return(
                <>
                <h1 key={index}>{key}</h1>
                </>
            )
        })
    }
        <button onClick={Addtask}>Click Todo</button>
        </>

    )
}
export default memo(UseCallBackHook);