import { CloseButton, Overlay } from "../MedicineModal/MedicineModal.Styled";
import CloseSVG from "../../images/modal/CloseSVG";
import { DeleteMedicineForm } from "../DeleteMedicineForm/DeleteMedicineForm";
import { Modal } from "./DeleteMedicineModal.Styled";

export const DeleteMedicineModal = ({
  setModal,
  shopId,
  productId,
  photo,
  suppliers,
  name,
}) => {
  //   const dispatch = useDispatch();

  function handleClick(e) {
    if (e.target === e.currentTarget) {
      setModal(false);
    }
  }
  document.addEventListener("keydown", onWindowEscape);
  function onWindowEscape(e) {
    if (e.code === "Escape") {
      setModal(false);
      document.removeEventListener("keydown", onWindowEscape);
    }
  }

  return (
    <Overlay onClick={handleClick}>
      <Modal>
        <CloseButton onClick={() => setModal(false)}>
          <CloseSVG />
        </CloseButton>
        <DeleteMedicineForm
          title={"Confirm deletion"}
          titleButton={"Confirm"}
          shopId={shopId}
          productId={productId}
          setModal={setModal}
          photo={photo}
          name={name}
          suppliers={suppliers}
        />
      </Modal>
    </Overlay>
  );
};
