import { useContext } from "react"
import { useShoppingCart } from '../../contex/ShoppingCartContex';

function Home() {

  const {products, addCartItem} = useShoppingCart();

  return (
    <>
    <main>
      <div className="container">
        {products?.map( product =>
          (
          <div key={product.id} className="product">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <div><button>agregar</button>{product.price}</div>
          </div>
        ))}
      </div>
    </main>
    </>
  )
}

export default Home