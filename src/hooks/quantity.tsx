import { useEffect } from 'react'
import { useState } from 'react'
import { useShoppingCart } from '../contex/ShoppingCartContex';
import useDebounce from './debounce';

function useQuantity() {
    const { addCartItem} = useShoppingCart();
    const [quantity, setQuantity] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState(0);
  
  
    const debounceQuery = useDebounce(quantity, 950);
  
  
    const increaseItem = (product_id: number) => {
      setSelectedProduct(product_id);
  
      setQuantity((prev) => prev + 1);
    }

    const decremenItem = (product_id: number) => {
      setSelectedProduct(product_id);
  
      setQuantity((prev) => prev - 1);
    }
  
    let request = {
      product_id: selectedProduct,
      quantity: debounceQuery,
      user_id: 1
    }
  
    useEffect(() => {
      
      if(request.quantity > 0 && request.product_id > 0)
      addCartItem(request.product_id,request.quantity);
  
    }, [debounceQuery]);

  return {
    increaseItem,
    decremenItem
  }
}

export default useQuantity