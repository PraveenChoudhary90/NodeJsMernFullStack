
import './App.css'
import Studata from './StudentDatabase'
import StudentStyle from './StudentStyling'
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
     
    </>
  )
}

export default App
