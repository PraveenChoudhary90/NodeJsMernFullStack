
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Pages/Home'
import Insert from './Pages/Insert'
import Display from './Pages/Display'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
         <Route index element ={<Home/>}/>
        <Route path="/insert" element ={<Insert/>}/>
        <Route path="/display" element ={<Display/>}/>

        </Route>
       
      </Routes>
    </>
  )
}

export default App
