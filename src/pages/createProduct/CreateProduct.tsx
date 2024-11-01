import { useCreateProduct } from "./useCreateProduct";
import { Input } from "../../components/form/input";
import { handleNcmFormat } from "../../utils/format";
import { Button } from "../../components/ui/Button";

export const CreateProduct = () => {
  const {
    errorCreate,
    errors,
    handleSubmit,
    onSubmit,
    register,
    handleNavigate,
  } = useCreateProduct();

  return (
    <div className="flex flex-col h-screen min-h-screen ">
      <div className="flex items-center justify-center min-h-0 bg-gray dark:dark:bg-boxdark-2 grow">
        <form
          className="w-full max-w-md p-8 space-y-6 rounded-lg shadow-md bg-gray-50 dark:bg-gray-800"
          onSubmit={handleSubmit(onSubmit)}
        >
          {errorCreate && (
            <div className="p-4 text-white bg-red-500 rounded-md">
              {errorCreate}
            </div>
          )}
          <h1 className="mb-6 text-2xl font-bold text-center text-gray-800">
            Cadastro de Produto
          </h1>
          <Input
            label="PLU"
            id="plu"
            error={errors.plu?.message}
            {...register("plu")}
          />

          <Input
            label="Descrição"
            id="description"
            error={errors.description?.message}
            {...register("description")}
          />

          <Input
            label="NCM"
            id="ncm"
            error={errors.ncm?.message}
            {...register("ncm")}
            onChange={(e) => {
              e.target.value = handleNcmFormat(e.target.value);
            }}
          />

          <Input
            label="Unidade"
            id="unidade"
            error={errors.unidade?.message}
            {...register("unidade")}
          />

          <div className="flex gap-2">
            <Button
              type="submit"
              className="w-full px-4 py-2 text-white transition duration-150 ease-in-out bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Criar Produto
            </Button>

            <Button
              color="link"
              onClick={() => handleNavigate()}
              className="w-full px-4 py-2 text-blue-600 transition duration-150 ease-in-out bg-white rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Voltar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
