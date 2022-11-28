import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { CartService } from "../services/CartService";
import { ProductService } from "../services/ProductService";
import { CartItem, Product } from "../utils/types";

type ShoppingCartProviderProps = {
    children: ReactNode;
}

type ShoppingCartContext = {
    products: Product[];
    cartItems: CartItem[];
    cartQuantity: number;
    openCart: () => void;
    closeCart: () => void;
    getProducts: () => void;
    createProduct: (name: string, description: string, stock: number, price: number, mageUrl: string, ategory_id: number) => void
    getCartItems: (user_id: number) => void;
    addCartItem: (product_id: number, quantity: number, user_id: number) => void;
    removeCartItem: (product_id: number) => void;
    deleteCart: (user_id: number) => void;
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
  }

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps ) {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);
    const [render, setRender] = useState(null);

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    async function getProducts(){
        const result = await ProductService.getAll();
        setProducts(result.data);
    }

    function createProduct(name: string, description: string, stock: number, price: number, mageUrl: string, ategory_id: number) {

    }

    async function getCartItems(user_id: number) {
        const result = await CartService.getAll(user_id);
        setCartItems(result.data);
    }

    async function addCartItem(product_id: number, quantity: number, user_id: number) {
        console.log("product_id"+ product_id + "quantity" + quantity+ "user_id"+ user_id);
        const result = await CartService.addCartItem({product_id, quantity, user_id});
        setRender(result.data);
    }

    function removeCartItem(product_id: number) {

    }

    function deleteCart(user_id: number) {

    }

    const cartQuantity = cartItems.cartItems?.reduce(
        (quantity: number, item:CartItem) => item.quantity + quantity,
        0
    )
    
    useEffect(() => {
        getProducts();
        getCartItems(1);
    }, [render]);
    
    return (
        <ShoppingCartContext.Provider
        value={{
            products,
            cartItems,
            cartQuantity,
            openCart,
            closeCart,
            getProducts,
            createProduct,
            getCartItems,
            addCartItem,
            removeCartItem,
            deleteCart
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

