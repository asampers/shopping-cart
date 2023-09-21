import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import { Form } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Product({item}) {
  const textStyle= {
    maxHeight: "100px", 
    overflow: "hidden"
  }

  if(item)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} style={{maxWidth: "100px"}}/>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text style={textStyle}>
          {item.description}
        </Card.Text>
        <Card.Text>${item.price}</Card.Text>
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