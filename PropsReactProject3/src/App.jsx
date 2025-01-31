
import './App.css'
import Collage from './Collage'
import Studata from './StudentDatabase'
import StudentStyle from './StudentStyling'
import img from "./assets/blog01.jpg"
import img1 from "./assets/blog03.jpg"
const ans = Studata.map((key)=><StudentStyle  rollno={key.rollnumber} name={key.name} sub={key.subject} fs={key.fees}  />)

function App() {
 

  return (
    <>
    <h1 align="center">Welcome to my react home screen</h1>
    <table align='center' border={1} bgcolor='yellow'>
      <tr>
        <th>Rollnumber</th>
        <th>Name</th>
        <th>Subject</th>
        <th>Fees</th>
      </tr>
      {ans}
    </table>
    <Collage/>
    <img src={img} alt="" /><br></br>
    <img src={img1} alt="" />
    <h1>Src folder</h1>

    <hr size="4" />
    <h1>Public folder</h1>

    <img src="/pic8.jpg" alt="" /><br></br>
    <img src="/pic9.jpg" alt="" />
     
    </>
  )
}

export default App
