
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
// const crs = <ol>
//   <li>php</li>
//   <li>mern</li>
//   <li>css</li>
//   <li>react</li>
// </ol>

function App() {

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
      <BrowserRouter>
      <Routes>

<Route path='/' element={<Layout/>}>
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
      
      </BrowserRouter>

    </>
  )
}

export default App
