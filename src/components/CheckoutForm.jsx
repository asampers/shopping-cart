import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';

export default function CheckoutForm() {
  const [open, setOpen] = useState(true);

  return (
    <Container className="mt-3 mb-3">
      <Card className="bg-light mb-3">
        <Card.Header>Shipping</Card.Header>
        <Card.Body>
          <Form>
            <Row>
              <Col className="mt-1">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Jane"/>
              </Col>
              <Col className="mt-1">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Smith"/>
              </Col>
            </Row>
            <Row>
              <Col className="mt-1">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="123 Fourth St."/>
              </Col>
              <Col className="mt-1">
                <Form.Label>Apt/Suite/Etc</Form.Label>
                <Form.Control type="text" placeholder="Apt 1"/>
              </Col>
            </Row>
            <Row>
              <Col className="mt-1">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="San Francisco"/>
              </Col>
              <Col className="mt-1">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="CA"/>
              </Col>
              <Col className="mt-1">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control type="text" placeholder="54321"/>
              </Col>
            </Row>
            <Row>
              <Col className="mt-1">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="tel" placeholder="(123) 456-7890"/>
              </Col>
              <Col style={{marginTop: "auto"}}>
                <Form.Check 
                  label="Same as billing"
                  type="checkbox"
                  role="button"
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                />
              </Col> 
            </Row>
          </Form>
        </Card.Body>
      </Card>
      <Collapse in={open}>
      <div id="example-collapse-text">
      <Card className="bg-light mb-3">
        <Card.Header>Billing</Card.Header>
        <Card.Body>
          <Form key={open}>
            <Row>
              <Col className="mt-1">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="John"/>
              </Col>
              <Col className="mt-1">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Smith"/>
              </Col>
            </Row>
            <Row>
              <Col className="mt-1">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="567 Eigth Ave."/>
              </Col>
              <Col className="mt-1">
                <Form.Label>Apt/Suite/Etc</Form.Label>
                <Form.Control type="text" placeholder="Apt 2"/>
              </Col>
            </Row>
            <Row>
              <Col className="mt-1">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="San Francisco"/>
              </Col>
              <Col className="mt-1">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="CA"/>
              </Col>
              <Col className="mt-1">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control type="text" placeholder="98765"/>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
      </div>
      </Collapse>
      <Card className="bg-light mb-3">
        <Card.Header>Payment</Card.Header>
        <Card.Body>
          <Form>
            <Row>
              <Col className="mt-1">
                <Form.Label>Name on Card</Form.Label>
                <Form.Control type="text" placeholder="Jane Smith"/>
              </Col>
              <Col className="mt-1">
                <Form.Label>Card #</Form.Label>
                <Form.Control type="text" placeholder="1234 567 89101"/>
              </Col>
              <Col className="mt-1">
                <Form.Label>Exp.</Form.Label>
                <Form.Control type="text" placeholder="MM/YY"/>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  )
}