
import './App.css'
import {Routes,Route} from "react-router-dom"
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Nopage from './Pages/Nopage'
import AboutCompany from './Pages/AboutCompany'
import AboutProduct from './Pages/AboutProduct'
import AboutService from './Pages/AboutServices'
function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}>
      <Route index element={<AboutCompany/>}/>
      <Route path='aboutc' element={<AboutCompany/>}/>
      <Route path='aboutp' element={<AboutProduct/>}/>
      <Route path='abouts' element={<AboutService/>}/>
      </Route>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='*' element={<Nopage/>}/>

      </Route>
    </Routes>
      
    </>
  )
}

export default App
