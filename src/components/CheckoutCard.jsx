import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CloseButton from 'react-bootstrap/CloseButton';
import { TrashIcon } from "@heroicons/react/20/solid";
import { Form as ReactForm} from "react-router-dom";
import { subTotal } from '../helpers/helperFunctions';
import PropTypes from 'prop-types';
import "../styles/checkoutCard.css";

export default function CheckoutCard({status, toggle, products, onClick, onChange}) {
  return (
    <Card style={{visibility: status}} className="checkoutCard">
      <Card.Header className="d-flex align-items-center justify-content-between">
        Your Cart:
        <CloseButton aria-label="Hide" onClick={toggle}/> 
      </Card.Header>
      <Card.Body>
        {products.length == 0 && <h6><i>There are no items.</i></h6>}
        <ListGroup variant="flush">
            {products.map((prod) => (
              <ListGroup.Item key={prod.id}>
                <Row  className="align-items-center">  
                  <Card.Img src={prod.image}  style={{maxWidth: "50px", maxHeight: "40px"}}/>
                  <Col>${prod.price}</Col>
                <Col xs={3}> 
                  <Form.Control  type="number" name="quantity" min="1" max="100" value={prod.quantity} onChange={(e) => onChange(e, prod.id)}/>
                </Col>
                <Col xs={1}>
                  <Button className="p-1"  variant="light"><TrashIcon style={{verticalAlign:"top"}} width="20px" onClick={() => onClick(prod.id)}/></Button>
                </Col>  
                </Row>
              </ListGroup.Item>
            ))}
        </ListGroup>
        <hr style={{margin: "0 0 0.5rem 0"}}></hr>
        <Card.Text className="text-end">subtotal: ${subTotal(products)}</Card.Text>
        <ReactForm action="checkout">
          <Button type="submit" style={{marginLeft: "35%"}} variant="success" disabled={products.length == 0} onClick={toggle}>CHECKOUT</Button>
        </ReactForm>
      </Card.Body>
    </Card>
  );
}

CheckoutCard.propTypes = {
  status: PropTypes.string,
  toggle: PropTypes.func,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  products: PropTypes.array,
}