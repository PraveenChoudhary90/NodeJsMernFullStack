
import './App.css'
import DataBase from './DataBase'
import Desingprops from './Desingprops'
// const name = "praveenchoudhary"
const ans = DataBase.map((key)=><Desingprops nm={key.name} rl={key.rollno} ct={key.city} crs = {key.course} />)
function App() {

  return (
    <>
     {/* <h1>{name}</h1> */}
     <table align='center' bgcolor='yellow' border={1}>
      <tr>
        <th>Name</th>
        <th>Rollnumber</th>
        <th>City</th>
        <th>Course</th>
      </tr>
      {ans}
     </table>
    </>
  )
}

export default App
