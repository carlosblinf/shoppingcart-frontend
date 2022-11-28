import { useEffect } from 'react'
import { Product } from '../../utils/types'
import { useShoppingCart } from '../../contex/ShoppingCartContex'
import { useState } from 'react'
import useDebounce from '../../hooks/debounce'

const Products = (product: Product) => {
  const {id, imageUrl, name, price} = product;

  const { addCartItem} = useShoppingCart();
  const [quantity, setQuantity] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(0);


  const debounceQuery = useDebounce(quantity, 950);


  const addtoCart = (product_id: number) => {
    setSelectedProduct(product_id);

    setQuantity((prev) => prev + 1);
  }

  let request = {
    product_id: selectedProduct,
    quantity: debounceQuery,
    user_id: 1
  }

  useEffect(() => {
    
    if(request.quantity > 0 && request.product_id > 0)
    addCartItem(request.product_id,request.quantity, request.user_id);

  }, [debounceQuery]);

  return (
    <>
      <img src={product.imageUrl} alt={product.name} />
      <div>
        <p>
          {product.name} - ${product.price}
        </p>
      </div>
      <button onClick={() => addtoCart(product.id)}>
        Add to Cart
      </button>
    </>
  )
}

export default Products