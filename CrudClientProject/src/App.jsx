
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Insert from './Pages/Insert'
import Display from './Pages/Display'
import Search from './Pages/Search'
import Update from './Pages/Update'
import Nopage from './Pages/Nopage'
import Home from './Pages/Home'
import Topnav from './Components/Topnav'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Topnav/>}>
      <Route index element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='insert' element={<Insert/>}/>
      <Route path='display' element={<Display/>}/>
      <Route path='search' element={<Search/>}/>
      <Route path='update' element={<Update/>}/>
      <Route path='*' element={<Nopage/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
