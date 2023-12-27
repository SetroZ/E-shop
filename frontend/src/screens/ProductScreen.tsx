import {
  Button,
  Col,

  Row,
  Image,
  ListGroup,
  Card,
} from 'react-bootstrap'
import { productType } from '../products'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
export default function ProductScreen() {
  const [product, setProduct] = useState<productType | Record<string, never>>(
    {}
  )
  const { productId } = useParams()
  useEffect(() => {
    async function fetchProduct() {
      const { data }: { data: productType[] } = await axios.get('/api/products')
      const currentProduct = data.find((product) => product._id == productId)
      setProduct(currentProduct as productType)
    }
    fetchProduct()
  }, [])

  return (
    <div className=''>
      <Link to='/' className='w-100'>
        <Button variant='light'>go back</Button>
      </Link>

      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product?.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product?.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>Rating: {product.rating}</ListGroup.Item>
            <ListGroup.Item>Price: ${product?.price}</ListGroup.Item>
            <ListGroup.Item>
              <p className='fw-bold mb-0'>Description:</p> {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col className='fw-bold'> ${product.price}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock != 0 ? 'In Stock' : 'out of stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className={`w-100`}
                  variant='primary'
                  disabled={product.countInStock == 0}
                >
                  add to cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
