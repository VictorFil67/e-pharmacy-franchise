import {
  AuthButton,
  AuthButtonWrap,
  ErrorSpan,
  Form,
  GenderLabel,
  Input,
  InputBlockWrap,
  InputWrap,
  LogoInputText,
  // LogoInputWrap,
  // LinkStyled,
  Radio,
  RadioGroup,
  RadioSpan,
  RadioWrap,
  ShopLogoWrap,
  // UploadLogo,
} from "./Shop.Styled";
import { useState } from "react";
import RadioChecked from "../../images/shopImg/RadioChecked";
import RadioUnChecked from "../../images/shopImg/RadioUnChecked";
import { useSelector } from "react-redux";
import { selectShop } from "../../store/shops/selectors";

export const Shop = ({
  handleSubmit,
  onSubmit,
  inputs,
  register,
  errors,
  // handleFileChange,
  buttonName,
}) => {
  const shop = useSelector(selectShop);
  const [value, setValue] = useState("Yes");
  const [fileValue, setFileValue] = useState("");
  // const logoInput = useRef();
  console.log(fileValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleFileChange = (event) => {
    setFileValue(event.target.value);
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
              {el.type === "file" ? (
                <>
                  <LogoInputText>
                    {" "}
                    {fileValue ? "Logo is chosen" : "Upload Logo"}
                  </LogoInputText>
                  <Input
                    // $reg={reg}
                    placeholder={el.placeholder}
                    type={el.type}
                    {...register(el.name)}
                    // ref={logoInput}
                    onChange={handleFileChange}
                  />
                </>
              ) : (
                <Input
                  // $reg={reg}
                  placeholder={el.placeholder}
                  type={el.type}
                  {...register(el.name)}
                />
              )}
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
        {/* <UploadLogo
          type="file"
          {...register("shopLogoURL")}
          onChange={handleFileChange}
        /> */}
        {/* Upload Logo
        </UploadLogo> */}
        <AuthButtonWrap
        // $marg={marg} $reg={reg}
        >
          <AuthButton name="submit" type="submit" aria-label={buttonName}>
            {buttonName}
          </AuthButton>
        </AuthButtonWrap>
      </Form>
      <ShopLogoWrap>
        <img src={shop?.shopLogoURL} alt="Shop Logo" />
      </ShopLogoWrap>
    </div>
  );
};
