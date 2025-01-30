
// import './App.css'
// import {Routes,Route} from "react-router-dom"
// import Layout from './Pages/Layout'
// import Home from './Pages/Home'
// import About from './Pages/About'
// import Contact from './Pages/Contact'
// import Nopage from './Pages/Nopage'
// import AboutCompany from './Pages/AboutCompany'
// import AboutProduct from './Pages/AboutProduct'
// import AboutService from './Pages/AboutServices'
// import ContactTeam from './Pages/ContactTeam'

import Empdata from "./Pages/EmpDatabase"
import EmpDesign from "./Pages/EmpDesign"

// import Collage from "./Pages/Collage"
// import Student from "./Pages/Student";
// const Name = "praveen";
// const Rolln = "1212";
// const subject = "mern";
// const fees = "450000";

// const Data = ["praveen", "lucky", "ajju", "rohit", "anand"];

// const Studata = [
//   {
//     "rollno":121,
//     "name":"praveen",
//     "subject":"mern",
//     "fees":3900
//   },
//    {
//     "rollno":122,
//     "name":"rohit",
//     "subject":"mca",
//     "fees":8000
//   },
//    {
//     "rollno":123,
//     "name":"visal",
//     "subject":"cse",
//     "fees":3900
//   },
//    {
//     "rollno":124,
//     "name":"vikas",
//     "subject":"mern",
//     "fees":4000
//   },
//    {
//     "rollno":125,
//     "name":"praveen",
//     "subject":"mern",
//     "fees":50000
//   }
// ]
// console.log(Studata[1].fees)

// const ans = Studata.map((key)=>{
//   return(
//     <>
//     <tr>
//       <td>{key.rollno}</td>
//       <td>{key.name}</td>
//       <td>{key.subject}</td>
//       <td>{key.fees}</td>
//       </tr>
    
    
//     </>
//   )
// })


//  const ans = Data.map((key)=>{
//     return(
//       <>
//       <li>{key}</li>
      
//       </>
//     )
//   })

// import ContactManager from './Pages/ContactManager'
function App() {

  const ans = Empdata.map((key)=><EmpDesign
   Empno={key.empno}
    Empnm={key.name} 
    Empdesig={key.designation}
     Empsal={key.salary}  /> );
  

  return (
    <>
    {/* <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}>
      <Route index element={<AboutCompany/>}/>
      <Route path='aboutc' element={<AboutCompany/>}/>
      <Route path='aboutp' element={<AboutProduct/>}/>
      <Route path='abouts' element={<AboutService/>}/>
      </Route>
      <Route path='/contact' element={<Contact/>}>
      <Route index element={<ContactTeam/>}/>
      <Route path='contactteam' element={<ContactTeam/>}/>
      <Route path='contactmanager' element={<ContactManager/>}/>
      </Route>
      <Route path='*' element={<Nopage/>}/>

      </Route>
    </Routes> */}
    <h1 align="center" style={{color:"red", fontFamily:"fantasy", textDecoration:"underline"}} >welcome to our react page</h1>
    {/* <Collage clgname="truba collage" fs="45000"/>
    <Student nm={Name} rolln={Rolln} sub={subject} fs={fees}   /> */}
    {/* <ol>
      {ans}
    </ol> */}
    {/* <table border="1" bgcolor="yellow">
      <tr>
        <th>RollNumber</th>
        <th>Name</th>
        <th>Subject</th>
        <th>Fees</th>
      </tr>
    {ans}

    </table> */}
    <table border="1" bgcolor="pink" width="500px" align="center">
      <tr>
        <th>Rollnumber</th>
        <th>Name</th>
        <th>Designation</th>
        <th>Salary</th>
      </tr>
      {ans}
    </table>

    <div style={{border:"1px solid black",width:"200px",backgroundColor:"grey",padding:"30px"}}>
      <div style={{width:"200px"}}>
        <h1 style={{backgroundColor:"yellow"}} align="center">cybrom</h1>
      </div>
    </div>
      
    </>
  )
}

export default App
