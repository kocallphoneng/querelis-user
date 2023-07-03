import React from "react";
import { useAppContext } from "../Context/AppContext";
import ModalLayout from "../../Views/UI/Layouts/ModalLayout";
import NewDepartment from "../../Views/UI/Modals/NewDepartment";

const useModal = () => {
  const { modal } = useAppContext();
  if (modal.open && modal.name === "success")
    return (
      <ModalLayout>
        <span>success</span>
      </ModalLayout>
    );
  else if (modal.open && modal.name === "failed")
    return (
      <ModalLayout>
        <span>failed</span>
      </ModalLayout>
    );
  else if (modal.open && modal.name === "new_department")
    return (
      <ModalLayout>
        <NewDepartment />
      </ModalLayout>
    );
  else return null;
};

export default useModal;
