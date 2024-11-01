import { AxiosError, AxiosResponse } from "axios";
import { api } from "./api";
import { Product, ProductCreate } from "../types/product";

export class ProductService {
  async listAllProducts(
    page: number = 1,
    limit: number = 10
  ): Promise<Product[] | null> {
    try {
      const response = await api.get("/product" + "/", {
        params: {
          page,
          limit,
        },
      });
      return response.data;
    } catch (er) {
      const error = er as AxiosError<{ message: string }>;
      const message =
        (error.response?.data?.message as string) || error.message;
      throw new Error(`${message}`);
    }
  }

  async createProduct(product: ProductCreate): Promise<Product | null> {
    try {
      const response: AxiosResponse<Product> = await api.post(
        "/product",
        product
      );
      return response.data;
    } catch (er) {
      const error = er as AxiosError<{ message: string }>;
      const message =
        (error.response?.data?.message as string) || error.message;
      throw new Error(`${message}`);
    }
  }
}
