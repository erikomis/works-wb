import { useMutation } from "@tanstack/react-query";
import { ProductService } from "../service/product.service";
import { queryClient } from "../lib/react-query";

export const useMutationProductCreate = (
  createProduct: typeof ProductService.prototype.createProduct
) =>
  useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });
