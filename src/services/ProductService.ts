import { api } from "../utils/api"

const endpoint = "products"

export const ProductService = {
    getAll: async () => {
        return await api.get(endpoint);
    },
    createProduct: async ({
        name,
        description,
        stock,
        price,
        imageUrl,
        category_id,
      }:any) => {
        const form = {
            name,
            description,
            stock,
            price,
            imageUrl,
            category_id,
        }
        
        return await api.post(endpoint, form);
    },
        
}