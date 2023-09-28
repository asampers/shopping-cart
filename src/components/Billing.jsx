import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';
import PropTypes from 'prop-types';

export default function Billing({status}) {
  return (
    <Collapse in={status}>
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
                <Col xs={3} md={2} className="mt-1">
                  <Form.Label>State</Form.Label>
                  <Form.Control type="text" placeholder="CA"/>
                </Col>
                <Col xs={4} md={2} className="mt-1">
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control type="text" placeholder="98765"/>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Collapse>
  )
}

Billing.propTypes = {
  status: PropTypes.bool,
}