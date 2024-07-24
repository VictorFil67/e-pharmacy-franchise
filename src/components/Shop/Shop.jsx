import {
  DeliveryBlock,
  DeliveryLabel,
  DeliveryName,
  ErrorSpan,
  Form,
  FormWrap,
  Input,
  InputBlockWrap,
  InputWrap,
  LabelName,
  LogoInputText,
  Radio,
  RadioGroup,
  RadioSpan,
  RadioWrap,
  ShopButton,
  ShopLogoWrap,
  ShopWrap,
  Title,
  TitleWrap,
  Warning,
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
  title,
  buttonName,
}) => {
  const shop = useSelector(selectShop);
  const [value, setValue] = useState("Yes");
  const [fileValue, setFileValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleFileChange = (event) => {
    setFileValue(event.target.value);
  };

  return (
    <ShopWrap>
      <FormWrap>
        <TitleWrap>
          <Title>{title}</Title>
          <Warning>
            This information will be displayed publicly so be careful what you
            share.
          </Warning>
        </TitleWrap>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputBlockWrap>
            {inputs.map((el, idx) => (
              <InputWrap key={idx}>
                {el.type === "file" ? (
                  <>
                    <LogoInputText>
                      {" "}
                      {fileValue ? "Logo is chosen" : "Upload Logo"}
                    </LogoInputText>
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
          </InputBlockWrap>
          <DeliveryBlock>
            <DeliveryName>Has own Delivery System?</DeliveryName>
            <RadioGroup>
              <DeliveryLabel>
                <RadioWrap>
                  {value === "Yes" ? <RadioChecked /> : <RadioUnChecked />}
                </RadioWrap>
                <Radio
                  {...register("shopOwnDelivery")}
                  type="radio"
                  value="Yes"
                  defaultChecked={value === "Yes"}
                  onChange={handleChange}
                />
                <RadioSpan>Yes</RadioSpan>
              </DeliveryLabel>
              <DeliveryLabel>
                <RadioWrap>
                  {value === "No" ? <RadioChecked /> : <RadioUnChecked />}
                </RadioWrap>
                <Radio
                  {...register("shopOwnDelivery")}
                  type="radio"
                  value="No"
                  defaultChecked={value === "No"}
                  onChange={handleChange}
                />
                <RadioSpan>No</RadioSpan>
              </DeliveryLabel>
            </RadioGroup>
          </DeliveryBlock>
          <ShopButton name="submit" type="submit" aria-label={buttonName}>
            {buttonName}
          </ShopButton>
        </Form>
      </FormWrap>
      <ShopLogoWrap>
        {shop?.shopLogoURL && <img src={shop?.shopLogoURL} alt="Shop Logo" />}
      </ShopLogoWrap>
    </ShopWrap>
  );
};
