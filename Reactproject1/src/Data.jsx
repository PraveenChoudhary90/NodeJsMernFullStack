import Bottomdata from "./Bottomdata";
import Middledata from "./Middledata";
import Topdata from "./Topdata";

const Data = ()=>{
    return(
        <>
        
        <h1>This is data page</h1>
        <hr size="4" color="red" />
        <Topdata/>
        <Middledata/>
        <Bottomdata/>
        
        </>
    )
}

export default Data;