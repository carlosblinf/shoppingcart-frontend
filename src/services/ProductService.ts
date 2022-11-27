import { api } from "../utils/api";

const endpoint = "products";

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
        const form = new FormData();
        form.append('name', name);
        form.append('stock', stock);
        form.append('price', price);
        form.append('stock', stock);
        form.append('description', description);
        form.append('category_id', category_id);
        
        return await api.post(endpoint, form);
    },
        
}