import { deleteProductThunk } from "../../store/products/operations";
import { toast } from "react-toastify";
import { getShopProductsThunk } from "../../store/shops/operations";
import {
  CancelButton,
  FormButtonsWrap,
  ImgWrap,
  MedicineButton,
  Photo,
  Title,
} from "../MedicineForm/MedicineForm.Styled";
import Pills from "../../images/modal/Pills.png";
import { useDispatch } from "react-redux";
import {
  MedicineBrand,
  ProductName,
  QuestionText,
} from "./DeleteMedicineForm.Styled";

export const DeleteMedicineForm = ({
  title,
  titleButton,
  setModal,
  photo,
  shopId,
  productId,
  suppliers,
  name,
}) => {
  const dispatch = useDispatch();

  function deleteProduct({ shopId, productId }) {
    dispatch(deleteProductThunk({ id: shopId, productId }))
      .unwrap()
      .then(() => {
        toast.success(
          `The product has been deleted from your shop successfully!`
        );
        dispatch(getShopProductsThunk({ id: shopId }))
          .unwrap()
          .then(() => {
            toast.success(`The products of your shop are received`);
          })
          .catch((err) => toast.error(err));
      })
      .catch((err) => toast.error(err));
  }

  return (
    <>
      <Title>{title}</Title>
      <QuestionText>Are you sure you want to delete this item?</QuestionText>
      <ImgWrap $img={photo}>
        {photo ? (
          <Photo src={photo} />
        ) : (
          <img src={Pills} alt="Pill" loading="lazy" />
        )}
      </ImgWrap>
      <ProductName>{name}</ProductName>
      <MedicineBrand>{suppliers}</MedicineBrand>
      <FormButtonsWrap>
        <MedicineButton
          name="confirm"
          type="submit"
          aria-label={titleButton}
          onClick={() => deleteProduct({ shopId, productId })}
        >
          {titleButton}
        </MedicineButton>
        <CancelButton
          name="cancel"
          type="reset"
          aria-label="Cancel"
          onClick={() => setModal(false)}
        >
          Cancel
        </CancelButton>
      </FormButtonsWrap>
    </>
  );
};
