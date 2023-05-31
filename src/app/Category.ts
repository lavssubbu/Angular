import { Product } from "./Product";

export interface Category {
    catId?: number,
    catName: string,
    products?: Product[];
  }