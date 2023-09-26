import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { XMarkIcon, TrashIcon } from "@heroicons/react/20/solid"

export default function CheckoutCard({products}) {
  const subTotal = () => {
    let sum = 0.00;
    products.forEach((prod) => {
      sum = sum + (Number(prod.quantity) * prod.price);
    })
    return sum.toFixed(2)
  }

  return (
    <Card style={{width: '25rem'}}>
      <Card.Header className="d-flex align-items-center justify-content-between">
        Your Cart:
        <XMarkIcon width="20px"/>
      </Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
            {products.map((prod) => (
              <ListGroup.Item key={prod.id}>
                <Row  className="align-items-center">  
                  <Card.Img src={prod.image}  style={{maxWidth: "50px", maxHeight: "40px"}}/>
                  <Col>${prod.price}</Col>
                <Col xs={3}> 
                  <Form.Control  type="number" name="quantity" min="1" value={prod.quantity} />
                </Col>
                <Col xs={1}>
                  <TrashIcon width="20px"/>
                </Col>  
                </Row>
              </ListGroup.Item>
            ))}
        </ListGroup>
        <hr style={{margin: "0 0 0.5rem 0"}}></hr>
        <Card.Text className="text-end">subtotal: ${subTotal()}</Card.Text>
        <Button className="m-auto" variant="primary">CHECKOUT</Button>
      </Card.Body>
    </Card>
  );
}