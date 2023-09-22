import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import { Form } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Product({item}) {
  const textStyle= {
    display: "-webkit-box",
    webkitBoxOrient: "vertical",
    webkitLineClamp: "5",
    height: "120px", 
    overflow: "hidden",
    textOverflow: "ellipsis",
  }

  const titleStyle = {
    display: "-webkit-box",
    webkitBoxOrient: "vertical",
    webkitLineClamp: "3",
    height: "72px", 
    overflow: "hidden",
    textOverflow: "ellipsis",
  }

  if(item)
  return (
    <Card style={{ width: '18rem' }}>
      <div style={{height: "100px", display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "10px"}} >
        <Card.Img  src={item.image} style={{maxWidth: "80px", maxHeight: "100px"}}/>
      </div>
      <Card.Body>
        <Card.Title className="text-center" style={titleStyle}>{item.title}</Card.Title>
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