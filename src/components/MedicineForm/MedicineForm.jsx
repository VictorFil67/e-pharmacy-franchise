import { useState } from "react";
import {
  //   ContentWrap,
  ErrorSpan,
  Form,
  FormWrap,
  ImageInputText,
  Input,
  InputBlockWrap,
  InputWrap,
  LabelName,
  ShopButton,
  Textarea,
  //   Span,
  //   Text,
  //   TextWrap,
  Title,
} from "./MedicineForm.Styled";

export const MedicineForm = ({
  title,
  inputs,
  titleButton,
  register,
  handleSubmit,
  onSubmit,
  errors,
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
    <FormWrap>
      {/* <div>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        
      </div> */}
      <Title>{title}</Title>
      {imageSrc && (
        <div>
          {/* <h3>Uploaded Image:</h3> */}
          <img src={imageSrc} alt="Uploaded" style={{ maxWidth: "100%" }} />
        </div>
      )}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputBlockWrap>
          {inputs.map((el, idx) => (
            <InputWrap key={idx}>
              {el.type === "file" ? (
                <>
                  <ImageInputText>
                    {" "}
                    {imageSrc ? "Image is chosen" : "Upload image"}
                  </ImageInputText>
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
        <ShopButton name="submit" type="submit" aria-label={titleButton}>
          {titleButton}
        </ShopButton>
      </Form>
    </FormWrap>
  );
};
