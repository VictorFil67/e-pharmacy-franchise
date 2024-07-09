import {
  AuthButton,
  AuthButtonWrap,
  ErrorSpan,
  Form,
  Input,
  InputBlockWrap,
  InputWrap,
  LinkStyled,
} from "./Shop.Styled";

export const Shop = ({
  handleSubmit,
  onSubmit,
  inputs,
  register,
  errors,
  buttonName,
}) => {
  return (
    <div>
      <h1></h1>
      <p></p>
      {/* <Form onSubmit={handleSubmit(onSubmit)}>
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
      {/* </LinkStyled>
        </AuthButtonWrap>
      </Form> */}{" "}
      */
    </div>
  );
};
