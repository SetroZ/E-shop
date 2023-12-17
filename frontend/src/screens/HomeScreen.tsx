import { Col, Row } from 'react-bootstrap'
import products from '../products'
import Card from '../components/Product'
import Container from 'react-bootstrap/Container'

export default function HomeScreen() {
  return (
    <Container className='mt-3 border-0'>
      <h1 className='text-uppercase'>Latest Products</h1>
      <hr />

      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} xl={3} lg={4} md={6}>
            <Card product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}
