import { useEffect, useState } from "react";

type ModalProps = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};
export function Modal({ title, onClose, children }: ModalProps) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
      <div
        className="fixed inset-0 transition-opacity bg-black/50 backdrop-blur-sm"
        aria-hidden="true"
        onClick={handleClose}
      />
      <div
        className="relative w-full max-w-lg overflow-hidden transition-all bg-white rounded-lg shadow-xl dark:bg-gray-800 sm:w-auto sm:max-w-xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="absolute right-4 top-4">
          <button
            onClick={handleClose}
            className="p-1 text-gray-400 rounded-full hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:bg-gray-700 dark:hover:text-gray-200"
          >
            <span className="sr-only">Close</span>X
          </button>
        </div>
        <div className="p-6">
          <h2
            id="modal-title"
            className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            {title}
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
