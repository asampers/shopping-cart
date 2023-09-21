import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import { Form } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Product() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </Card.Text>
        <Form >
          <Row>
            <Col> 
              <Form.Control size="sm" type="number" name="quantity" min="1" placeholder="1"/>
            </Col>
            <Col>
              <Button size="sm" variant="primary">Add to Cart</Button>
            </Col>  
          </Row>
        </Form>
          
      </Card.Body>
    </Card>
  )
}