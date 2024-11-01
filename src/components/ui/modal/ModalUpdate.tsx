import { Button } from "../Button";
import { useModalUpdateProduct } from "../../../hooks/useModalUpdateProduct";
import { Modal } from "./Modal";
import { handleNcmFormat } from "../../../utils/format";
import { Input } from "../../form/input";

type ModalUpdateProps = Omit<
  ReturnType<typeof useModalUpdateProduct>,
  "handleOpen"
>;

export const ModalUpdate = ({
  errors,
  handleClose,
  handleSubmit,
  onSubmit,
  register,
  open,
}: ModalUpdateProps) => {
  return (
    <Modal title="Update Product" isOpen={open} onClose={handleClose}>
      <form
        className="w-full p-6 space-y-6 bg-white rounded-lg shadow-sm dark:bg-gray-800 sm:p-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <Input
            label="PLU"
            id="plu"
            error={errors?.plu?.message}
            {...register("plu")}
            className="dark:bg-gray-700 dark:text-white"
          />

          <Input
            label="Descrição"
            id="description"
            error={errors.description?.message}
            {...register("description")}
            className="dark:bg-gray-700 dark:text-white"
          />

          <Input
            label="NCM"
            id="ncm"
            error={errors.ncm?.message}
            {...register("ncm")}
            onChange={(e) => {
              e.target.value = handleNcmFormat(e.target.value);
            }}
            className="dark:bg-gray-700 dark:text-white"
          />

          <Input
            label="Unidade"
            id="unidade"
            error={errors.unidade?.message}
            {...register("unidade")}
            className="dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div className="flex justify-end pt-4">
          <Button type="submit" className="w-full sm:w-auto">
            Cadastrar
          </Button>
        </div>
      </form>
    </Modal>
  );
};
