import React from "react";
import { useAppContext } from "../Context/AppContext";
import ModalLayout from "../../Views/UI/Layouts/ModalLayout";
import NewDepartment from "../../Views/UI/Modals/NewDepartment";
import TicketModal from "../../Views/UI/Modals/TicketModal";
import Staff from "../../Views/UI/Modals/Staff";
import NewStaff from "../../Views/UI/Modals/NewStaff";

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
  else if (modal.open && modal.name === "ticket")
    return (
      <ModalLayout>
        <TicketModal />
      </ModalLayout>
    );
  else if (modal.open && modal.name === "new_staff")
    return (
      <ModalLayout>
        <NewStaff />
      </ModalLayout>
    );
  else if (modal.open && modal.name === "staff")
    return (
      <ModalLayout>
        <Staff />
      </ModalLayout>
    );
  else return null;
};

export default useModal;
