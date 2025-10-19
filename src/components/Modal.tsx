import { Button, Modal as AntdModal } from "antd";
import { useState, type ReactNode } from "react";
import type { BaseButtonProps } from "antd/es/button/button";

export type FormCallback = {
  (setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>): ReactNode;
};

type ModalProps = {
  children?: ReactNode; // để optional
  form: FormCallback;
  modalTitle: string;
  icon?: ReactNode;
  type?: BaseButtonProps["type"];
  open?: boolean; // new
  setIsModalOpen?: React.Dispatch<React.SetStateAction<boolean>>; // new
};

const Modal = ({
  children,
  form,
  modalTitle,
  icon,
  type = "primary",
  open,
  setIsModalOpen,
}: ModalProps) => {
  // Nếu cha không truyền thì CreateModal tự quản lý state
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = typeof open === "boolean" && setIsModalOpen;

  const modalOpen = isControlled ? open! : internalOpen;
  const toggleOpen = isControlled ? setIsModalOpen! : setInternalOpen;

  return (
    <>
      {children && (
        <Button
          className="!font-semibold"
          icon={icon}
          type={type}
          onClick={() => toggleOpen(true)}
        >
          {children}
        </Button>
      )}
      <AntdModal
        title={<div className="ml-2 text-2xl">{modalTitle}</div>}
        open={modalOpen}
        onOk={() => toggleOpen(false)}
        onCancel={() => toggleOpen(false)}
        centered
        width={840}
        footer={null}
      >
        <div className="mt-4 ml-2 pr-2">{form(toggleOpen)}</div>
      </AntdModal>
    </>
  );
};

export default Modal;
