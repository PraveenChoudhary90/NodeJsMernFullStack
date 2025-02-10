import { memo } from "react";

const Child =({task,addtask})=>{
    console.log("*********");
    return(
        <>
        {
            task.map((key,index)=>{
                return(
                    <>
                    <h1 key={index} >{key}</h1>
                   </>
                )
            })
        }
       
        <button onClick={addtask}>TODO</button>
        </>
    )
}

export default memo(Child);