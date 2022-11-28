import { CartItem } from '../../utils/types'
import style from './style.module.scss'

function Item(item:CartItem) {
  const {product_id, product, quantity, price} = item;

  const plusOneToCart = (product_id: number) => {
    
  }
  return (
    <div className={style.item}>
      <div className={style.action}>
        <img src={product.imageUrl} alt={product.name}  className="image_cartitem"/>
        <p>
            {product.name} - ${price}
        </p>
      </div>
      <div className={style.action}>
        <div className="update">
          <button onClick={() => plusOneToCart(product.id)}>
            +
          </button>
          <samp>{quantity}</samp>
          <button onClick={() => plusOneToCart(product.id)}>
            -
          </button>
        </div>
        <button className={style.delete} onClick={() => plusOneToCart(product.id)}>
          delete
        </button>
      </div>
    </div>
  )
}

export default Item