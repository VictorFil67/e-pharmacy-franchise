// import { useDispatch } from "react-redux";
// import { deleteProductThunk } from "../../store/products/operations";
// import { toast } from "react-toastify";
// import { getShopProductsThunk } from "../../store/shops/operations";
import {
  CloseButton,
  Modal,
  Overlay,
} from "../MedicineModal/MedicineModal.Styled";
import CloseSVG from "../../images/modal/CloseSVG";
import { DeleteMedicineForm } from "../DeleteMedicineForm/DeleteMedicineForm";

export const DeleteMedicineModal = ({ setModal, shopId, productId, photo }) => {
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

  //   function deleteProduct({ shopId, productId }) {
  //     dispatch(deleteProductThunk({ id: shopId, productId }))
  //       .unwrap()
  //       .then(() => {
  //         toast.success(
  //           `The product has been deleted from your shop successfully!`
  //         );
  //         dispatch(getShopProductsThunk({ id: shopId }))
  //           .unwrap()
  //           .then(() => {
  //             toast.success(`The products of your shop are received`);
  //           })
  //           .catch((err) => toast.error(err));
  //       })
  //       .catch((err) => toast.error(err));
  //   }

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
        />
      </Modal>
    </Overlay>
  );
};
