import {
  AuthButton,
  AuthButtonWrap,
  AuthWrap,
  Elements,
  ElementsTab,
  ErrorSpan,
  Form,
  Input,
  InputBlockWrap,
  InputWrap,
  LinkStyled,
  Picture,
  Promo,
  PromoWrap,
  Span,
} from "./AuthComponent.Styled";
import Pill from "../../images/authImg/Pill.png";
import Pill2x from "../../images/authImg/Pill@2x.png";
import TabPill from "../../images/authImg/TabPill.png";
import TabPill2x from "../../images/authImg/TabPill@2x.png";

export const AuthComponent = ({
  inputs,
  buttonName,
  account,
  register,
  handleSubmit,
  onSubmit,
  errors,
  rout,
  marg,
  reg,
}) => {
  return (
    <>
      <AuthWrap>
        <PromoWrap>
          <picture>
            <source
              media="(max-width:767px)"
              srcSet={Pill + " 1x, " + Pill2x + " 2x"}
            />
            <source srcSet={TabPill + " 1x, " + TabPill2x + " 2x"} />
            <Picture src={Pill} alt="Pill" loading="lazy" />
          </picture>
          <Promo>
            Your medication, delivered Say goodbye to all{" "}
            <Span>your healthcare</Span> worries with us
          </Promo>
        </PromoWrap>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputBlockWrap $reg={reg}>
            {inputs.map((el, idx) => (
              <InputWrap key={idx}>
                <Input
                  $reg={reg}
                  placeholder={el.placeholder}
                  type={el.type}
                  {...register(el.name)}
                ></Input>
                <ErrorSpan>{errors[register(el.name).name]?.message}</ErrorSpan>
              </InputWrap>
            ))}
          </InputBlockWrap>
          <AuthButtonWrap $marg={marg} $reg={reg}>
            <AuthButton name="submit" type="submit" aria-label={buttonName}>
              {buttonName}
            </AuthButton>
            <LinkStyled to={rout}>{account}</LinkStyled>
          </AuthButtonWrap>
        </Form>
      </AuthWrap>
      <Elements />
      <ElementsTab />
    </>
  );
};
