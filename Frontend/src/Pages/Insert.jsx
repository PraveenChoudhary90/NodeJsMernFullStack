import { useState } from "react";
import axios from "axios"
const Insert = ()=>{
    const [input, setinput]=useState({
        "rollnumber":"",
        "name":"",
        "city":"",
        "fees":""
    })
   
    function changeinput(e){
        let {name,value}=e.target;
        setinput(e.target.value);
        setinput({
            ...input,
            [name]:value
    })
    }
    function finalsubmit(e){
        e.preventDefault();
    //   e.preventdefault();
      console.log(input);
      axios.post("http://localhost:8000/students/save",input).then(res=>alert("data is inserted succefully"));
    }


    return(
        <>
        
        <h1>This is Insert page </h1>
        <form  onSubmit={finalsubmit}>
        Rollnumber:<input type="text" name="rollnumber" value={input.rollnumber} onChange={changeinput}   /><br></br>
        Name:<input type="text" name="name" value={input.name} onChange={changeinput} /><br></br>
        City:<input type="text" name="city" value={input.city} onChange={changeinput} /><br></br>
        fees:<input type="text" name= "fees" value={input.fees} onChange={changeinput} /><br></br>
        <button>submit</button>
        </form>
        </>
    )
}
export default Insert;