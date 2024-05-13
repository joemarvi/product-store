import { Product } from "./products.interfaces";

export type ProductPayload = Omit<Product, 'id'>