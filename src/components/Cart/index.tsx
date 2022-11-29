import { useShoppingCart } from '../../contex/ShoppingCartContex';
import Item from '../Item';
import style from './cart.module.scss'

type CartProps = {
  isOpen: boolean
}

function Cart({isOpen}:CartProps) {

  const {cartItems, totalCost, placeOrder, closeCart} = useShoppingCart();

  return (
    <aside className={`${style.cartContainer} + " " + ${isOpen ? "show": ""}`} >
      <span className={style.close} onClick={() => closeCart()} >&times;</span>
      <div className={style.cart}>
        <div className={style.title}>
          <h2>Shopping Cart</h2>
        </div>
        <div className={style.body}>
          {cartItems?.sort((a, b) => a.product.id - b.product.id).map(item =>
            <div key={item.id} className={style.cart}>
              <Item {...item} />
              </div>
            )}
        </div>
        <div className={style.total}>Total: {totalCost}</div>
        <button className={style.order} onClick={() => placeOrder()}>
          Place Order
        </button>
      </div>
    </aside>
  )
}

export default Cart