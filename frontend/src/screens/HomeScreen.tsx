import { Col, Row } from 'react-bootstrap'
import { productType } from '../products'
import axios from 'axios'
import Card from '../components/Product'
import Container from 'react-bootstrap/Container'
import { useEffect, useState } from 'react'

export default function HomeScreen() {
  const [products, setProducts] = useState<productType[] | []>([])
  useEffect(() => {
    async function fetchProducts() {
      const { data }: { data: productType[] } = await axios.get(
        '/api/products'
      )
      setProducts(data)
    }
    fetchProducts()
  }, [])
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
