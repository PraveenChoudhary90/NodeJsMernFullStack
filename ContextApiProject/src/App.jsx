
import { createContext } from 'react';
import './App.css'
import Compo1 from './Compo1';
import { useState } from 'react';
import Collage from './Collage';

  const MyContext = createContext();

function App() {
  const [user, setUser] = useState("praveen");

  return (
    <>
   
     
      

    <h1>my name : {user}</h1>
    <button onClick={()=>{setUser("choudhary")}} >click here</button>
      <MyContext.Provider value={{user,setUser}}>
        <Compo1/>
      </MyContext.Provider>
  
      <Collage>
     <h1>my collage</h1>
      <h1>My collage name is cybrom</h1>
    </Collage>

      
    </>
  )
}

export default App;
export {MyContext};
