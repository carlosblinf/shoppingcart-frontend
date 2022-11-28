export type Product = {
    id: number;
    name: string;
    description: string;
    stock: number;
    price: number;
    imageUrl: string;
    category_id: number
}

export type CartItem = {
    product_id: number;
    quantity: number;
    price: number;
    user_id: number;
}