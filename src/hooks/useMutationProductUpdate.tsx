import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../lib/react-query";
import { ProductService } from "../service/product.service";

export const useMutationProductUpdate = (
  updateProduct: typeof ProductService.prototype.updateProduct,

) =>
  useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });
