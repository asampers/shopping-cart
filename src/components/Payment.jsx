import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Payment() {
  return (
    <Card className="bg-light mb-3">
      <Card.Header>Payment</Card.Header>
      <Card.Body>
        <Form>
          <Row>
            <Col xs={12} sm={4} className="mt-1">
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
  )
}