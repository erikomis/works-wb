import * as yup from "yup";

export const schema = yup.object().shape({
  plu: yup
    .string()
    .matches(/^\d{4,6}$/, "PLU deve ter entre 4 e 6 dígitos")
    .required("PLU é obrigatório"),
  description: yup.string().required("Descrição é obrigatória"),
  ncm: yup
    .string()
    .matches(/^\d{4}\.\d{2}\.\d{2}$/, "NCM deve estar no formato XXXX.XX.XX")
    .required("NCM é obrigatório"),
  unidade: yup
    .string()
    .matches(/^[a-zA-Z]{2,3}$/, "Unidade deve conter 2 ou 3 letras")
    .required("Unidade é obrigatória"),
});
