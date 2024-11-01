import { useState } from "react";
import { ProductService } from "../service/product.service";
import { useMutationProductDelete } from "./useMutationProductDelete";
import { AxiosError } from "axios";

export const useModalDeleteProduct = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productId, setProductId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { mutate } = useMutationProductDelete(
    new ProductService().deleteProduct
  );
  const openModal = (id: number) => {
    setIsOpen(true);
    setProductId(id);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const deleteProduct = async () => {
    if (!productId) return;

    mutate(productId, {
      onSuccess: () => {
        closeModal();
      },
      onError: (er) => {
        const message =
          (er as AxiosError<{ message: string }>)?.response?.data?.message ||
          (er as Error).message;
        setError(message);
      },
    });
  };

  return { isOpen, openModal, closeModal, productId, deleteProduct, error };
};
