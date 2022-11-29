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
    product: Product
}

export type Order = {
    id: number;
    total: number;
    status: OrderStatus;
    orderItems: OrderItem[];
    createdAt: Date;
    completedAt: Date;
    userId: number;
}

export enum OrderStatus {
    NEW_ORDER, COMPLETE_ORDER, CANCELED_ORDER
}

export type OrderItem = {
    id: number;
    quantity: number;
    price: number;
    created_at: string;
    product: Product
}

export type Category = {
    id: number;
    name: string;
    description: string;
}