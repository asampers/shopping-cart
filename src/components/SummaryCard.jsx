import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { TrashIcon } from "@heroicons/react/20/solid";
import { subTotal, itemTotal } from '../helpers/helperFunctions';
import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/summaryCard.css';

export default function SummaryCard({products, onChange, onClick}) {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  return (
    <Container className="mt-3 summaryCard">
      <Card >
        <Card.Header className="d-flex align-items-center justify-content-between">
          Order Summary:
          <Button variant="link" onClick={toggleShow}>{show ? "Save Edits" : "Edit Cart" }</Button>
        </Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
              {products.map((prod) => (
                <ListGroup.Item key={prod.id}>
                  <Row  className="align-items-center nowrap">  
                    <Card.Img src={prod.image}  style={{maxWidth: "50px", maxHeight: "40px"}}/>
                    <Col>{prod.quantity} x ${prod.price} </Col>
                    {show && <Col xs={3} sm={2}  xxl={4}> 
                      <Form.Control data-testid="quantity" type="number" name="quantity" min="1" max="100" value={prod.quantity} onChange={(e) => onChange(e, prod.id)}/>
                    </Col>}
                    <span style={{width: "fit-content"}} className="float-end">
                      {show ? <Button className="p-1"  variant="light"><TrashIcon style={{verticalAlign:"top"}} width="20px" onClick={() => onClick(prod.id)}/></Button>
                        : `$${itemTotal(prod.quantity, prod.price)}`}
                    </span> 
                  </Row>
                </ListGroup.Item>
              ))}
          </ListGroup>
          <hr style={{margin: "0 0 0.5rem 0"}}></hr>
          <Card.Text className="text-end">Order Total: ${subTotal(products)}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

SummaryCard.propTypes = {
  products: PropTypes.array,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
}