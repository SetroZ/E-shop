import { Card } from 'react-bootstrap'
import { productType } from '../products'
import { Link } from 'react-router-dom'

export default function Product({ product }: { product: productType }) {
  return (
    <Link className='' to={`/product/${product._id}`}>
      <Card className='my-3 rounded'>
        <Card.Img src={product.image} />
        <Card.Body>
          <Card.Title className='h5 text-center'>{product.name}</Card.Title>
          <Card.Text className='text-center'>
            {product.rating} from {product.numReviews} reviews
          </Card.Text>
          <Card.Text className='h4 text-center'>{product.price}$</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
}
