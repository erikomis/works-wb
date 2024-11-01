export interface Product {
  id: number;
  plu: string;
  description: string;
  ncm: string;
  unidade: string;
  created_at: Date;
}

export type ProductCreate = Omit<Product, "id" | "created_at">;