import {
  AuthButton,
  AuthButtonWrap,
  AuthWrap,
  Elements,
  ErrorSpan,
  Form,
  Input,
  InputBlockWrap,
  InputWrap,
  LinkStyled,
  Picture,
  Promo,
  Span,
} from "./AuthComponent.Styled";
import Pill from "../../images/authImg/Pill.png";
import Pill2x from "../../images/authImg/Pill@2x.png";
import TabPill from "../../images/authImg/TabPill.png";
import TabPill2x from "../../images/authImg/TabPill@2x.png";
// import SvgElements from "../../images/authImg/SvgElements";
// import SvgElementsTab from "../../images/authImg/SvgElementsTab";

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
}) => {
  return (
    <>
      <AuthWrap>
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
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputBlockWrap>
            {inputs.map((el, idx) => (
              <InputWrap key={idx}>
                <Input
                  placeholder={el.placeholder}
                  type={el.type}
                  {...register(el.name)}
                ></Input>
                <ErrorSpan>{errors[register(el.name).name]?.message}</ErrorSpan>
              </InputWrap>
            ))}
          </InputBlockWrap>
          <AuthButtonWrap $marg={marg}>
            <AuthButton name="submit" type="submit" aria-label={buttonName}>
              {buttonName}
            </AuthButton>
            <LinkStyled to={rout}>{account}</LinkStyled>
          </AuthButtonWrap>
        </Form>
      </AuthWrap>
      <Elements />
      {/* <SvgElementsTab /> */}
    </>
  );
};
