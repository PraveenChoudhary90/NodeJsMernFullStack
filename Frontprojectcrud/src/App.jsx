
import { BrowserRouter , Route,Routes } from 'react-router-dom'
import './App.css'
import Topnav from './Component/Topnav'
import Home from './Pages/Home'
import Insert from './Pages/Insert'
import Display from './Pages/Display'
import Search from './Pages/Search'
import Update from './Pages/Update'
import Edit from './Pages/Edit'
function App() {
 

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Topnav/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="insert" element={<Insert/>}/>
      <Route path="display" element={<Display/>}/>
      <Route path='search' element={<Search/>}/>
      <Route path="update" element={<Update/>}/>
      <Route path="/edit/:id" element={<Edit/>}/>
      </Route>
     </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
