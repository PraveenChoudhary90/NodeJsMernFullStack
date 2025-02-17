
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Registration from './Pages/Registration'
import Dashboard from './Pages/Dashboard'

function App() {


  return (
    <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Layout/>}>
  <Route index element={<Home/>}/>
  <Route path='home' element={<Home/>}/>
  <Route path='login' element={<Login/>}/>
  <Route path='registration' element={<Registration/>}/>
  <Route path='dashboard' element={<Dashboard/>}/>
  </Route>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
