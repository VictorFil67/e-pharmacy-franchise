import { useForm } from "react-hook-form";
import CloseSVG from "../../images/modal/CloseSVG";
// import { CloseButton, Modal, Overlay } from "./MedicineModal.Styled";
import {
  //   addProductThunk,
  editProductThunk,
} from "../../store/products/operations";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { MedicineForm } from "../MedicineForm/MedicineForm";
import { selectShop } from "../../store/shops/selectors";
import { getShopProductsThunk } from "../../store/shops/operations";
import {
  CloseButton,
  Modal,
  Overlay,
} from "../MedicineModal/MedicineModal.Styled";

export const EditMedicineModal = ({ setModal, productId, photo }) => {
  const dispatch = useDispatch();
  const { shopId } = useSelector(selectShop);

  const inputs = [
    {
      label: "Upload image",
      name: "photo",
      type: "file",
    },
    {
      label: "Medicine Name",
      name: "name",
      type: "text",
    },
    {
      label: "Price",
      name: "price",
      type: "text",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm({
    mode: "onChange",
  });

  function onSubmit(data) {
    const formData = new FormData();

    for (const key in data) {
      if (key === "photo" && data[key][0]) {
        formData.append(key, data[key][0]); // Append the file object
      } else if (data[key]) {
        formData.append(key, data[key]);
      }
    }
    dispatch(editProductThunk({ id: shopId, productId, formData }))
      .unwrap()
      .then(() => {
        toast.success("Congratulations! The medicine is updated successfully!");
        // reset();
        setModal(false);
        dispatch(getShopProductsThunk({ id: shopId }))
          .unwrap()
          .then(() => {
            toast.success(`The products of your shop are received`);
          })
          .catch((err) => toast.error(err));
      })
      .catch((err) => toast.error(err));
  }

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
        <MedicineForm
          title={"Edit medicine"}
          inputs={inputs}
          titleButton={"Save medicine"}
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          errors={errors}
          setModal={setModal}
          photo={photo}
        />
      </Modal>
    </Overlay>
  );
};
