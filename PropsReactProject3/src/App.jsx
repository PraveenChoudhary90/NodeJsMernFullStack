
import './App.css'
import Collage from './Collage'
import Studata from './StudentDatabase'
import StudentStyle from './StudentStyling'
import img from "./assets/blog01.jpg"
import img1 from "./assets/blog03.jpg"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



import Carousel from 'react-bootstrap/Carousel';
import img2 from "./assets/blog01.jpg";
import img3 from "./assets/blog03.jpg";
import img4 from "./assets/pic9.jpg";





import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';





// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ans = Studata.map((key)=><StudentStyle  rollno={key.rollnumber} name={key.name} sub={key.subject} fs={key.fees}  />)

function App() {
 

  return (
    <>

   <Container fluid>
    <Row>
      <Col className='bg-primary' md="2" >1  of 1</Col>
      <Col className='bg-danger' md="2" >1  of 1</Col>
      <Col className='bg-info' md="6" >1  of 1</Col>
      <Col className='bg-success' md="2" >1  of 1</Col>
    </Row>
    <Row>
      <Col className='bg-primary' md="2" >1  of 1</Col>
      <Col className='bg-info' md="2" >1  of 1</Col>
      <Col className='bg-danger' md="4" >1  of 1</Col>
      <Col className='bg-primary' md="2" >1  of 1</Col>
      <Col className='bg-success' md="2" >1  of 1</Col>
    </Row>
     <Row>
      <Col className='bg-primary' md="3" >1  of 1</Col>
      <Col className='bg-success' md="3" >1  of 1</Col>
      <Col className='bg-info' md="3" >1  of 1</Col>
      <Col className='bg-danger' md="3" >1  of 1</Col>
     
    </Row>
   </Container>




      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


 <Carousel>
      <Carousel.Item>
          <img src={img2} alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <img src={img3} alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <img src={img4} alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>






      <Card style={{ width: '18rem', display:"flex" , }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img3} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img4} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>





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
