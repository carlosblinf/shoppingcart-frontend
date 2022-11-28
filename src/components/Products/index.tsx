import useQuantity from '../../hooks/quantity';
import { Product } from '../../utils/types'


const Products = (product: Product) => {
  const {id, imageUrl, name, price} = product;

  const {increaseItem} = useQuantity()

  return (
    <>
      <img src={product.imageUrl} alt={product.name} />
      <div>
        <p>
          {product.name} - ${product.price}
        </p>
      </div>
      <button onClick={() => increaseItem(product.id)}>
        Add to Cart
      </button>
    </>
  )
}

export default Products