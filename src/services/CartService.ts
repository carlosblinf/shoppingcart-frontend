import { api } from "../utils/api";

const endpoint = "carts";
const USER = 1

export const CartService = {
    getAll: async () => {
        return await api.get(endpoint+"/?user_id="+USER , );
    },
    addCartItem: async ({product_id , quantity}: any) => {

        return await api.post(endpoint, {
            productId: product_id,
            quantity,
            userId: USER
        });
    },
    deleteCartItem: async (product_id: number) => {
        return await api.delete(`${endpoint}/?user_id=${USER}&product_id=${product_id}`);
    },
        
}