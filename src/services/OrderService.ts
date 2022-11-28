import { api } from "../utils/api";

const endpoint = "orders";
const USER = 1

export const OrderService = {
    getAll: async () => {
        return await api.get(endpoint+"/user/"+USER);
    },
    placeOrder: async () => {
        return await api.post(endpoint+"/user/"+USER);
    },
    
}