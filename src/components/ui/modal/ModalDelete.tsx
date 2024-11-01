import { Button } from "../Button";
import { Modal } from "./Modal";

type ModalDeleteProps = {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  error: string | null;
};

export const ModalDelete = ({
  isOpen,
  onClose,
  onDelete,
  error,
}: ModalDeleteProps) => {
  return (
    <Modal title="Delete product" isOpen={isOpen} onClose={onClose}>
      {error && <p className="text-red-500">{error}</p>}
      <p>Você realmente deseja excluir esse Producto</p>
      <div className="flex justify-end mt-4">
        <Button color="default" onClick={onDelete}>
          Delete
        </Button>
        <Button color="secondary" onClick={onClose} className="ml-4">
          Cancel
        </Button>
      </div>
    </Modal>
  );
};
