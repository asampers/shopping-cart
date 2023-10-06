import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

export default function LoadingCard() {
  return (
    <Card data-testid="placeholder" style={{ width: '18rem' }}>
        <Placeholder style={{width:"100px", height: "100px"}} animation="glow"></Placeholder>
        <Card.Body>
          <Placeholder as={Card.Title} style={{height: "72px"}} animation="glow">
            <Placeholder xs={6} /> <Placeholder xs={4} />
            <Placeholder xs={8} />
          </Placeholder>
          <Placeholder as={Card.Text} style={{height: "120px"}}animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> 
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder  xs={6} />{' '}
            <Placeholder.Button xs={4} variant="primary" className="ms-auto"/>
          </Placeholder>
        </Card.Body>
      </Card>
  )
}