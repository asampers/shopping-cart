import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import homeImage from '../assets/homepage.jpg'
import Button from 'react-bootstrap/Button';

export default function Homepage() {
  return(
    <Container fluid>
      <h1 className="text-center">Shopping Cart App</h1>
      <Row className="align-items-md-center">
        <Col clas>
          <Image className="w-100" src={homeImage}/>
        </Col>
        <Col className="text-center">
          <h4>Let&apos;s find your next great outfit!</h4>
          <Button >Enter Shop</Button>
        </Col>
      </Row>
    </Container>
  )
}