import { useShoppingCart } from '../../contex/ShoppingCartContex';
import useQuantity from '../../hooks/quantity';
import { CartItem } from '../../utils/types'
import style from './style.module.scss'

function Item(item:CartItem) {
  const { product, quantity, price} = item;

  const { removeCartItem} = useShoppingCart();
  const { increaseItem,
    decremenItem } = useQuantity(quantity);

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
          <button onClick={() => increaseItem(product.id)}>
            +
          </button>
          <samp>{quantity}</samp>
          <button onClick={() => decremenItem(product.id)}>
            -
          </button>
        </div>
        <button className={style.delete} onClick={() => removeCartItem(product.id)}>
          delete
        </button>
      </div>
    </div>
  )
}

export default Item