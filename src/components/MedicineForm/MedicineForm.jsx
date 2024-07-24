import { useState } from "react";
import {
  AttachPhotoWrap,
  CancelButton,
  ErrorSpan,
  Form,
  FormButtonsWrap,
  ImageInputText,
  Img,
  ImgWrap,
  Input,
  InputBlockWrap,
  InputWrap,
  LabelName,
  MedicineButton,
  Photo,
  Textarea,
  Title,
} from "./MedicineForm.Styled";
import AttachPhotoSVG from "../../images/modal/AttachPhotoSVG";
import Pills from "../../images/modal/Pills.png";

export const MedicineForm = ({
  title,
  inputs,
  titleButton,
  register,
  handleSubmit,
  onSubmit,
  errors,
  setModal,
  photo,
}) => {
  const [imageSrc, setImageSrc] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Title>{title}</Title>

      <ImgWrap $img={imageSrc || photo}>
        {imageSrc ? (
          <Photo src={imageSrc} />
        ) : photo ? (
          <Photo src={photo} />
        ) : (
          <Img src={Pills} alt="Pill" loading="lazy" />
        )}
      </ImgWrap>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
        </InputBlockWrap>
        <FormButtonsWrap>
          <MedicineButton name="submit" type="submit" aria-label={titleButton}>
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
      </Form>
    </>
  );
};
