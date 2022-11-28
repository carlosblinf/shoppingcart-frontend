import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Cart from "../components/Cart";
import { CartService } from "../services/CartService";
import { ProductService } from "../services/ProductService";
import { CartItem, Product } from "../utils/types";
import { OrderService } from "../services/OrderService";
import { notificated } from "../utils/notification";

type ShoppingCartProviderProps = {
    children: ReactNode;
}

type ShoppingCartContext = {
    products: Product[];
    cartItems: CartItem[];
    cartQuantity: number;
    totalCost: number
    openCart:  () => void;
    closeCart: () => void;
    getProducts: () => void;
    createProduct: (name: string, description: string, stock: number, price: number, mageUrl: string, ategory_id: number) => void
    getCartItems: () => void;
    addCartItem: (product_id: number, quantity: number) => void;
    removeCartItem: (product_id: number) => void;
    deleteCart: (user_id: number) => void;
    placeOrder: () => void;
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
  }

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps ) {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
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

    async function getCartItems() {
        const result = await CartService.getAll();
        console.log(result.data)
        setCartItems(result.data.cartItems);
        setTotalCost(result.data.totalCost);
    }

    async function addCartItem(product_id: number, quantity: number) {
        console.log("product_id"+ product_id + "quantity" + quantity);
        const result = await CartService.addCartItem({product_id, quantity});
        if(result.data) {
            setRender(result.data);
            notificated("Item Add", "The product has been added or modified", result.data.product.id);
        }
    }

    async function removeCartItem(product_id: number) {
        const result = await CartService.deleteCartItem(product_id);
        getCartItems();
    }
    // TODO:
    function deleteCart(user_id: number) {

    }

    async function placeOrder() {
        const result = await OrderService.placeOrder();
        if(result.data) {
            setRender(result.data);
            notificated("Order Created", "The order has been successfully created", result.data);
        }
    }

    const cartQuantity = cartItems?.reduce(
        (quantity: number, item:CartItem) => item.quantity + quantity,
        0
    )
    
    useEffect(() => {
        getProducts();
        getCartItems();
    }, [render]);
    
    return (
        <ShoppingCartContext.Provider
        value={{
            products,
            cartItems,
            totalCost,
            cartQuantity,
            openCart,
            closeCart,
            getProducts,
            createProduct,
            getCartItems,
            addCartItem,
            removeCartItem,
            deleteCart,
            placeOrder
        }}>
            {children}
            <Cart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    );
}

