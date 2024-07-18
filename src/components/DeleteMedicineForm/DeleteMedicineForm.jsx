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

export const DeleteMedicineForm = ({
  title,
  titleButton,
  setModal,
  photo,
  shopId,
  productId,
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

      <ImgWrap>
        {photo ? (
          <Photo src={photo} />
        ) : (
          <img src={Pills} alt="Pill" loading="lazy" />
        )}
      </ImgWrap>
      {/* <Form onSubmit={handleSubmit(onSubmit)}>
        <InputBlockWrap>
          {inputs.map((el, idx) => (
            <InputWrap key={idx}>
              {el.type === "file" ? (
                <>
                  <AttachPhotoWrap>
                    <AttachPhotoSVG />
                    <ImageInputText>
                      {" "}
                      {imageSrc ? "Image is chosen" : "Upload image"}
                    </ImageInputText>
                  </AttachPhotoWrap>
                  <Input
                    type={el.type}
                    {...register(el.name)}
                    onChange={handleFileChange}
                  />
                </>
              ) : (
                <>
                  <LabelName>{el.label}</LabelName>
                  <Input
                    placeholder="Enter text"
                    type={el.type}
                    {...register(el.name)}
                  />
                </>
              )}
              <ErrorSpan>{errors[register(el.name).name]?.message}</ErrorSpan>
            </InputWrap>
          ))}

          <InputWrap>
            <LabelName>Description</LabelName>
            <Textarea
              {...register("description")}
              rows="4"
              placeholder="Enter text"
            ></Textarea>
            <ErrorSpan>{errors.description?.message}</ErrorSpan>
          </InputWrap>
        </InputBlockWrap> */}
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
      {/* </Form> */}
    </>
  );
};
