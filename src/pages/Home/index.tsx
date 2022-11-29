import Products from '../../components/Products'
import { useShoppingCart } from '../../contex/ShoppingCartContex'
import style from './home.module.scss'


function Home() {
  const {products, addCartItem} = useShoppingCart();

  return (
      <div className="container">
        <div className={style.productsContainer}>
          {products && products?.map( product =>
            <div key={product.id} className={style.product} >
              <Products  {...product}/>
            </div>
          )}
        </div>
      </div>
  )
}

export default Home