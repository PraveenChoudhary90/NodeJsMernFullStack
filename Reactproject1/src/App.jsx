
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Data from './Data'
// import Footer from './Footer'
// import Header from './Header'
import Layout from './Layout'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Nopage from './Nopage'
import AboutCompany from './AboutCompany'
import AboutProduct from './AboutProduct'
import AboutService from './AboutServices'
import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {message} from "antd";
// const crs = <ol>
//   <li>php</li>
//   <li>mern</li>
//   <li>css</li>
//   <li>react</li>
// </ol>

function App() {


  // const [name , setName]= useState("praveen");
  const [color , setColor]=useState("red");
  const [cnt , setCount]=useState(0);

  const [name , setName] = useState("");
  const [city , setCity] = useState("");

  function finalsubmit(e){
    const input = {name:name,city:city};
    console.log(input);
  }

  // const myfun=()=>{
  //   setName("seeta");

  // }
  function myinc(){
    setCount(cnt+1);
  }
   function mydec(){
    if(cnt<=0){
      message.error("Value cant br go in negative from")
    }
    else{
      setCount(cnt-1);
    }
  }

//   function display(){

// alert("welcome to my page");

//   }

//   function collage(nm){

// alert(`my collage name is : ${nm}`);

//   }

//   function myname(fnm, snm){

// alert(`my name : ${fnm} ${snm}`);

//   }
//   function myname1(fnm, e){
//   console.log(e);
// alert(`my name : ${fnm} , Event Type: ${e.type}`);

//   }


  function Display1(e){
    console.log(e)
    let name = e.target.name;
    let value = e.target.value;
    console.log(name);
    console.log(value);
    console.log({[name]:value});
  }

  return (
    <>
    {/* <Header/>
    <Data/>
    <Footer/> */}
      {/* <h1>our course{crs}</h1>
      <h1>our course{crs}</h1>
      <h1>our course{crs}</h1> */}
      {/* <h1>Application form</h1>
      Enter Rollnumber:<input type='text' /><br></br>
      Enter Name:<input type='text' /><br></br>
      Enter Class:<select>
        <option value="php">php</option>
        <option value="css">css</option>
        <option value="mern">mern</option>
        <option value="react">react</option>
        <option value="html">html</option>
        <option value="js">js</option>
      </select>
      <br></br>
      Enter comment:<textarea id="w3review" name="w3review" rows="4" cols="50"/> */}
      {/* <BrowserRouter>
      <Routes> */}

{/* <Route path='/' element={<Layout/>}>
<Route index element={<Home/>}/>
<Route path='home' element={<Home/>}/>
<Route path='about' element={<About/>}>
<Route index element={<AboutCompany/>}/>
<Route path='aboutc' element={<AboutCompany/>} />
<Route path='aboutp' element={<AboutProduct/>} />
<Route path='abouts' element={<AboutService/>}/> 
</Route>

<Route path='data' element={<Data/>}/>
<Route path='contact' element={<Contact/>}/>
<Route path='*' element={<Nopage/>}/>


</Route>

      </Routes>
      
      </BrowserRouter> */}
      <h1>Welcome</h1>
      <h1 style={{color:'black',width:"300px", height:"300px",background:color}} >My Data Color is : {color}</h1>
      <button onClick={()=>{setColor("blue")}} >Blue  color</button>
      <button onClick={()=>{setColor("pink")}} >Pink color</button>
      <button onClick={()=>{setColor("yellow")}} >yellow  color</button>
      <button onClick={()=>{setColor("green")}} >green color</button>


      <Container className='text-center' >
         <Button variant="primary" onClick={myinc}>Increment</Button><br></br><br></br>
         <h1>cout:{cnt}</h1>
         <br></br>
         <br></br>
          <Button variant="danger" onClick={mydec}>Decrement</Button>
      </Container>



      <h1>Application from</h1>
      my name:<input text="type" name='name' value={name} onChange={
        (e)=>{setName(e.target.value)}} ></input><br></br>
        my city:<input text="type" name='city' value={city} onChange={
        (e)=>{setCity(e.target.value)}} ></input><br></br>
        <button onClick={finalsubmit}>save data!!!!</button>




      {/* <h1>my name is :{name}</h1>
      <button onClick={myfun} >Click hook</button>
      <button onClick={display} >click here</button>
      <button onClick={()=>{display()}} >click here</button>
      <button onClick={()=>{collage("Truba")}} >click </button>
      <button onClick={()=>{myname("praveen","choudhary")}} >click my </button>
      <button onClick={(e)=>{myname1("praveen",e)}} >click event </button>*/}
      <button name="praveen" value="mybutton" onClick={(e)=>{Display1(e)}} >event</button> 

    </>
  )
}

export default App
