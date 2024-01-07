import { Col, Row } from 'react-bootstrap'
import Card from '../components/Product'
import Container from 'react-bootstrap/Container'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../slices/productsSlices'
import { RootState } from '../store'
import { AppDispatch } from '../store'
export default function HomeScreen() {
  const dispatch: AppDispatch = useDispatch()
  const { loading, error, products } = useSelector(
    (state: RootState) => state.products
  )
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <Container className='mt-3 border-0'>
      <h1 className='text-uppercase'>Latest Products</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{JSON.stringify(error)}</h3>
      ) : (
        <>
          <hr />

          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} xl={3} lg={4} md={6}>
                <Card product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  )
}
