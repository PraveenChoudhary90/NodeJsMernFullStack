import { useReducer } from "react";


const ReducresHook = ()=>{
    const reducres = (state,actions)=>{
        switch(actions){
            case"Increment":
            return state+1;
            case"Decrement":
            return state-1;
            default:return state;
        }

    }
    const [count, dispatch] = useReducer(reducres,0);
    return(
        <>
        <button onClick={()=>{dispatch("Increment")}}>Increment</button>
        <h1>My Count :{count}</h1>
        <button onClick={()=>{dispatch("Decrement")}}>Decrement</button>
        
        </>
    )
}
export default ReducresHook;