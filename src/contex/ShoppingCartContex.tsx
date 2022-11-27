import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode;
}

type Product = {
    id: number;
    name: string;
    description: string;
    stock: number;
    price: number;
    imageUrl: string;
    category_id: number
}

type CartItem = {
    product_id: number;
    quantity: number;
    price: number;
    user_id: number;
}

type ShoppingCartContext = {
    products: Product[];
    cartItems: CartItem[];
    openCart: () => void;
    closeCart: () => void;
    getProducts: () => void;
    createProduct: (name: string, description: string, stock: number, price: number, mageUrl: string, ategory_id: number) => void
    getCartItems: (product_id: number, user_id: number) => void;
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

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    function getProducts(){
        
    }

    function createProduct(name: string, description: string, stock: number, price: number, mageUrl: string, ategory_id: number) {

    }

    function getCartItems(product_id: number, user_id: number) {

    }

    function addCartItem(product_id: number, quantity: number, user_id: number) {

    }

    function removeCartItem(product_id: number) {

    }

    function deleteCart(user_id: number) {

    }

    return (
        <ShoppingCartContext.Provider
        value={{
            products,
            cartItems,
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

