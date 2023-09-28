import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


export default function About() {
  return(
    <Container className="mt-4">
      <Card style={{maxWidth: "930px"}} className="bg-light text-center mx-auto">
        <Card.Body>
          <Card.Text>
            This app was made by Anna Sampers. Anna learned to code from The Odin Project.
          </Card.Text>
          <Button variant="outline-secondary" className="m-2">Click here for project instructions.</Button>
          <Button variant="outline-secondary">Click here for Anna Sampers&apos; Github.</Button>
        </Card.Body>
      </Card>
    </Container>
  )
}