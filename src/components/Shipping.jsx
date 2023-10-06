import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';

export default function Shipping({status, onClick}) {
  return (
    <Card className="mb-3">
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
              <Col xs={3} md={2} className="mt-1">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="CA"/>
              </Col>
              <Col xs={4} md={2} className="mt-1">
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
                  data-testid="toggle"
                  label="Same as billing"
                  type="checkbox"
                  role="button"
                  onClick={() => onClick(!status)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                />
              </Col> 
            </Row>
          </Form>
        </Card.Body>
      </Card>
  )
}

Shipping.propTypes = {
  status: PropTypes.bool,
  onClick: PropTypes.func,
}