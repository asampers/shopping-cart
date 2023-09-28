import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';

export default function Product({item, onChange, onClick}) {
  const textStyle= {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: "5",
    height: "120px", 
    overflow: "hidden",
    textOverflow: "ellipsis",
  }

  const titleStyle = {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: "3",
    height: "72px", 
    overflow: "hidden",
    textOverflow: "ellipsis",
  }

  const btnColor = item.inCart ? "success" : "primary";
  const btnText = item.inCart ? "In Cart" : "Add to Cart";
  
  if(item)
  return (
    <Card style={{ width: '18rem' }} className="bg-light">
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
              <Form.Control size="sm" type="number" name="quantity" min="1" max="100" placeholder={1} value={item.quantity} onChange={onChange}/>
            </Col>
            <Col>
              <Button size="sm" variant={btnColor} onClick={onClick}>{btnText} </Button>
            </Col>  
          </Row>
        </Form>
      </Card.Body>
    </Card>
  )
}

Product.propTypes = {
  item: PropTypes.object,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
}