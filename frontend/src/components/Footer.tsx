import { Container, Row , Col } from 'react-bootstrap'

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center'>
          CopyRight &copy; E-Shop
        </Col>
        </Row>
      </Container>
    </footer>
  )
}
