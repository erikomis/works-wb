import { yupResolver } from "@hookform/resolvers/yup";
import { ProductService } from "../service/product.service";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { AxiosError } from "axios";
import { Product } from "../types/product";
import { schema } from "../utils/schema";
import { useMutationProductUpdate } from "./useMutationProductUpdate";

export const useModalUpdateProduct = () => {
  const [errorUpdate, setErrorUpdate] = useState<string | null>(null);
  const [values, setValues] = useState({} as Product);
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<Product, "id" | "created_at">>({
    resolver: yupResolver(schema),
    values: values,
  });

  const handleOpenUpdate = (values: Product) => {
    setValues(values);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const service = new ProductService();

  const { mutate } = useMutationProductUpdate(service.updateProduct);

  const onSubmit = async (data: Omit<Product, "id" | "created_at">) => {
    mutate(
      {
        id: values.id,
        created_at: values.created_at,
        ...data,
      },
      {
        onSuccess: () => {
          handleClose();
        },
        onError: (er) => {
          const message =
            (er as AxiosError<{ message: string }>)?.response?.data?.message ||
            (er as Error).message;
          setErrorUpdate(message);
        },
      }
    );
  };
  return {
    register,
    handleSubmit,
    errors,
    errorUpdate,
    onSubmit,
    open,
    handleOpenUpdate,
    handleClose,
  };
};
