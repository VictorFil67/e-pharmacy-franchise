import {
  AuthButton,
  AuthButtonWrap,
  ErrorSpan,
  Form,
  GenderLabel,
  Input,
  InputBlockWrap,
  InputWrap,
  LinkStyled,
  Radio,
  RadioGroup,
  RadioSpan,
  RadioWrap,
  UploadLogo,
} from "./Shop.Styled";
import { useState } from "react";
import RadioChecked from "../../images/shopImg/RadioChecked";
import RadioUnChecked from "../../images/shopImg/RadioUnChecked";

export const Shop = ({
  handleSubmit,
  onSubmit,
  inputs,
  register,
  errors,
  buttonName,
}) => {
  const [value, setValue] = useState("Yes");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <h1></h1>
      <p></p>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputBlockWrap
        // $reg={reg}
        >
          {inputs.map((el, idx) => (
            <InputWrap key={idx}>
              <Input
                // $reg={reg}
                placeholder={el.placeholder}
                type={el.type}
                {...register(el.name)}
              ></Input>
              <ErrorSpan>{errors[register(el.name).name]?.message}</ErrorSpan>
            </InputWrap>
          ))}
        </InputBlockWrap>
        <p>Has own Delivery System?</p>
        <RadioGroup>
          <GenderLabel>
            <RadioWrap>
              {value === "Yes" ? <RadioChecked /> : <RadioUnChecked />}
            </RadioWrap>
            <Radio
              {...register("shopOwnDelivery")}
              type="radio"
              // name="delivery"
              value="Yes"
              defaultChecked={value === "Yes"}
              onChange={handleChange}
            />
            <RadioSpan>Yes</RadioSpan>
          </GenderLabel>
          <GenderLabel>
            <RadioWrap>
              {value === "No" ? <RadioChecked /> : <RadioUnChecked />}
            </RadioWrap>
            <Radio
              {...register("shopOwnDelivery")}
              type="radio"
              // name="gender"
              value="No"
              defaultChecked={value === "No"}
              onChange={handleChange}
            />
            <RadioSpan>No</RadioSpan>
          </GenderLabel>
        </RadioGroup>
        <UploadLogo>Upload Logo</UploadLogo>
        <AuthButtonWrap
        // $marg={marg} $reg={reg}
        >
          <AuthButton name="submit" type="submit" aria-label={buttonName}>
            {buttonName}
          </AuthButton>
          <LinkStyled
          //   to={rout}
          >
            {/* {account} */}
          </LinkStyled>
        </AuthButtonWrap>
      </Form>
    </div>
  );
};
