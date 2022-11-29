import { api } from "../utils/api"

const PRODUCT_ENDPOINT = "products"
const CATEGORY_ENDPOINT = "categories"

export const ProductService = {
    getAll: async () => {
        return await api.get(PRODUCT_ENDPOINT);
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
            categoryId:category_id,
            description,
            imageUrl,
            name,
            price,
            stock,
        }
        
        return await api.post(PRODUCT_ENDPOINT, form);
    },
    getCategories: async () => {
        return await api.get(CATEGORY_ENDPOINT);
    },
    createCategory: async (name:string) => {
        return await api.post(CATEGORY_ENDPOINT,{
            name,
            description: name
        });
    },
        
}