import {
  AuthButton,
  AuthWrap,
  ErrorSpan,
  Form,
  Input,
  InputBlockWrap,
  InputWrap,
  LinkStyled,
  Promo,
  Span,
} from "./AuthComponent.Styled";

export const AuthComponent = ({
  inputs,
  buttonName,
  account,
  register,
  handleSubmit,
  onSubmit,
  errors,
  rout,
}) => {
  return (
    <AuthWrap>
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
        <AuthButton name="submit" type="submit" aria-label={buttonName}>
          {buttonName}
        </AuthButton>
      </Form>
      <LinkStyled to={rout}>{account}</LinkStyled>
    </AuthWrap>
  );
};
