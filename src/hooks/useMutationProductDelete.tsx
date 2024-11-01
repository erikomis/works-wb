import { useMutation } from "@tanstack/react-query";
import { ProductService } from "../service/product.service";
import { queryClient } from "../lib/react-query";

export const useMutationProductDelete = (
  deleteProduct: typeof ProductService.prototype.deleteProduct
) =>
  useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });
