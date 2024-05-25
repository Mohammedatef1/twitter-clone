import { useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";

interface ModalProps {
  isOpen: boolean;
  actionLabel: string;
  title: string;
  disabled?: boolean;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  onSubmit: () => void;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, title, actionLabel, body, disabled, footer, onClose, onSubmit }) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    onClose();
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [onSubmit, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="
      fixed 
      inset-0 
      bg-opacity-70 
      bg-neutral-800 
      z-10 
      flex 
      overflow-x-hidden 
      overflow-y-auto 
      justify-center 
      items-center 
      outline-none 
      focus:outline-none">
      <div
        className="
        relative
        w-full
        lg:w-3/6
        max-w-2xl
        my-6
        mx-auto
        h-full
        lg:h-auto
      ">
        {/*content*/}
        <div
          className="
            h-full
            lg:h-auto
            border-0 
            rounded-lg 
            shadow-lg 
            relative 
            flex 
            flex-col 
            w-full 
            bg-black 
            outline-none 
            focus:outline-none">
          {/*Header*/}
          <div
            className="
            flex
            items-center
            justify-between
            p-10
            rounded-t
          ">
            <h3 className="text-3xl text-white font-semibold">{title}</h3>
            <button
              className="
              p-1
              ml-auto
              text-white
              border-0
              hover:opacity-70
              transition
              "
              onClick={handleClose}>
              <AiOutlineClose size={20} />
            </button>
          </div>
          {/*body*/}
          <div className="relative p-10 flex-auto">{body}</div>
          {/*footer*/}
          <div className="flex flex-col gap-2 p-10">
            <Button
              disabled={disabled}
              label={actionLabel}
              secondary
              fullWidth
              large
              onClick={handleSubmit}
            />
            {footer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
