import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { schema } from "../../utils/schema";
import { ProductCreate } from "../../types/product";
import { ProductService } from "../../service/product.service";
import { useMutationProductCreate } from "../../hooks/UseMutationProductCreate";

export const useCreateProduct = () => {
  const [errorCreate, setErrorCreate] = useState<string | null>(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductCreate>({
    resolver: yupResolver(schema),
  });
  const service = new ProductService();
  const { mutate } = useMutationProductCreate(service.createProduct);
  const onSubmit = async (data: ProductCreate) => {
    mutate(data, {
      onSuccess: () => {
        navigate("/");
      },
      onError: (er) => {
        const message =
          (er as AxiosError<{ message: string }>)?.response?.data?.message ||
          (er as Error).message;
        setErrorCreate(message);
      },
    });
  };
  const handleNavigate = () => {
    navigate("/");
  };
  return {
    errorCreate,
    register,
    handleSubmit,
    errors,
    onSubmit,
    handleNavigate,
  };
};
