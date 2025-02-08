import { useReducer } from "react";
const MyReducers=(state, actions)=>{
    switch(actions){
        case "Redcolor":
            return state="red";
            case "Greencolor":
                return state="green";
            case "Bluecolor":
                return state ="blue";
                case "Yellowcolor":
                    return state = "yellow";
                    default :
                    return state;
    }
}

const ReducerColor = ()=>{
    
    const [mycolor, myDis]= useReducer(MyReducers, "pink")
    return(
        <>
        <button onClick={()=>{myDis("Redcolor")}}>Red</button>
        <button onClick={()=>{myDis("Greencolor")}} >Green</button>
        <button onClick={()=>{myDis("Bluecolor")}} >Blue</button>
        <button onClick={()=>{myDis("Yellowcolor")}}>Yellow</button>
        <br /><br /><br />
        <div style={{width:"400px" , height:"300px", backgroundColor:mycolor}} ></div>
        </>
    )
}
export default ReducerColor;