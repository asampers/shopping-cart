import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


export default function About() {
  return(
    <Container fluid className="about pt-4">
      <Card style={{maxWidth: "930px"}} className="p-5 bg-light-subtle text-center mx-auto">
        <Card.Body>
          <Card.Text>
            This app was made by Anna Sampers. Anna learned to code from The Odin Project.
          </Card.Text>
          <a href='https://www.theodinproject.com/lessons/react-new-shopping-cart' className="btn btn-outline-secondary m-2">Click here for project instructions.</a>
          <a href='https://github.com/asampers/shopping-cart' className="btn btn-outline-secondary">Click here for Anna Sampers&apos; Github.</a>
        </Card.Body>
      </Card>
    </Container>
  )
}