
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Insert from './Pages/Insert'
import Display from './Pages/Display'
import Search from './Pages/Search'
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path='/about' element={<About/>} ></Route>
          <Route path='/insert' element={<Insert/>} ></Route>
          <Route path='/display' element={<Display/>} ></Route>
          <Route path='/search' element={<Search/>} ></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
