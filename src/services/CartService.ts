import { api } from "../utils/api";

const endpoint = "carts";

export const CartService = {
    getAll: async (user_id: number) => {
        return await api.get(endpoint+"/?user_id="+user_id , );
    },
    addCartItem: async ({product_id , quantity, user_id}: any) => {

        return await api.post(endpoint, {
            productId: product_id,
            quantity,
            userId: user_id
        });
    },
        
}