import styled from "styled-components";

export const ShopWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* position: relative; */
  /* margin-bottom: 80px; */
  padding-bottom: 80px;
  @media only screen and (min-width: 768px) {
    /* max-width: 614px;
    gap: 54px;
    margin-top: 104px; */
  }
  @media only screen and (min-width: 1440px) {
    /* flex-direction: row;
    margin-top: 162px;
    min-width: 100%; */
  }
`;

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  background: #fff;
  border-radius: 27px;
  gap: 40px;
  @media only screen and (min-width: 768px) {
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media only screen and (min-width: 768px) {
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.4;
  color: var(--black);
`;

export const Warning = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: #6a6a6f;
`;

// export const Picture = styled.img`
//   display: block;
//   margin: 0 auto;
//   position: absolute;
//   top: -80px;
//   right: 5px;
//   @media only screen and (min-width: 375px) {
//     top: -55px;
//     right: 20px;
//   }
//   @media only screen and (min-width: 768px) {
//     top: -106px;
//   }
// `;

// export const Promo = styled.h1`
//   font-weight: 600;
//   font-size: 28px;
//   line-height: 1.28571;
//   color: var(--black);
//   @media only screen and (min-width: 768px) {
//     font-size: 54px;
//     line-height: 1.11;
//   }
//   @media only screen and (min-width: 1440px) {
//     width: 611px;
//   }
// `;
// export const Span = styled.span`
//   color: var(--green);
// `;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 335px;
  @media only screen and (min-width: 768px) {
    max-width: 614px;
    gap: 62px;
  }
`;
export const InputBlockWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  @media only screen and (min-width: 768px) {
    max-width: ${(props) => !props.$reg && "323px"};
    flex-direction: ${(props) => props.$reg && "row"};
    flex-wrap: ${(props) => props.$reg && "wrap"};
    gap: 14px;
  }
`;
export const InputWrap = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  /* align-items: flex-start; */
  &:last-child {
    border-radius: 60px;
    padding: 13px 15px;
    border: none;
    background-color: var(--green);
    transition: all 0.3s;
    min-width: 100%;
    gap: 0;
    cursor: pointer;
    &:hover,
    &:active {
      background-color: var(--active);
    }
    & > input {
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      opacity: 0;
    }
    & > span {
      display: none;
    }
  }
`;

export const LabelName = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.28571;
  color: var(--black);
  padding-left: 18px;
`;

// export const LogoInputWrap = styled.div`
//   position: relative;
//   border-radius: 60px;
//   /* padding: 12px 15px; */
//   border: none;
//   background-color: var(--green);
//   transition: all 0.3s;
//   min-width: 100%;
//   /* font-weight: 500;
//   font-size: 14px;
//   line-height: 1.28571; */
//   /* letter-spacing: 0.02em; */

//   cursor: pointer;
//   &:hover,
//   &:active {
//     background-color: var(--active);
//   }
//   @media only screen and (min-width: 768px) {
//     /* padding: 16px 45px;
//     width: 166px;
//     font-size: 20px;
//     line-height: 1; */
//   }
// `;
export const LogoInputText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: 0.02em;
  color: var(--white);
  text-align: center;
  /* position: absolute;
  top: 12px;
  left: 50px; */
`;
export const Input = styled.input`
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 60px;
  padding: 12px 18px;
  /* width: 335px; */
  /* height: 44px; */
  min-width: 100%;
  background: var(--white);
  outline: none;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: var(--black);
  &:last-child {
    /* visibility: hidden; */
    /* position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    opacity: 0; */
  }
  &::placeholder {
    color: rgba(29, 30, 33, 0.4);
  }

  &:focus-within {
    border: 1px solid var(--green);
  }
  @media only screen and (min-width: 768px) {
    width: ${(props) => (props.$reg ? "280px" : "323px")};
    /* flex-direction: ${(props) => props.$reg && "row"};
    flex-wrap: ${(props) => props.$reg && "wrap"};
    gap: 14px; */
  }
`;

export const ErrorSpan = styled.span`
  color: #e90516;
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
`;

export const DeliveryBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const DeliveryName = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.28571;
  color: var(--black);
`;

export const RadioGroup = styled.div`
  display: flex;
`;

export const DeliveryLabel = styled.label`
  position: relative;
  margin-right: 24px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
`;

export const RadioWrap = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
`;

export const Radio = styled.input`
  margin-right: 8px;
  opacity: 0;
`;

export const RadioSpan = styled.span`
  margin-left: 8px;
`;

// export const UploadLogo = styled.input`
//   border: 1px solid rgba(29, 30, 33, 0.1);
//   border-radius: 60px;
//   padding: 12px 18px;
//   /* width: 335px; */
//   /* height: 44px; */
//   min-width: 100%;
//   background: var(--white);
//   outline: none;
//   font-weight: 400;
//   font-size: 12px;
//   line-height: 1.5;
//   color: var(--black);
//   &::placeholder {
//     color: rgba(29, 30, 33, 0.4);
//   }

//   &:focus-within {
//     border: 1px solid var(--green);
//   }
//   @media only screen and (min-width: 768px) {
//     width: ${(props) => (props.$reg ? "280px" : "323px")};
//     /* flex-direction: ${(props) => props.$reg && "row"};
//     flex-wrap: ${(props) => props.$reg && "wrap"};
//     gap: 14px; */
//   }
// `;

// export const AuthButtonWrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 14px;
//   margin-top: ${(props) => props.$marg && "108px"};
//   @media only screen and (min-width: 768px) {
//     margin-top: 0;
//     max-width: ${(props) => (props.$reg ? "280px" : "323px")};
//     /* flex-direction: ${(props) => props.$reg && "row"};
//     flex-wrap: ${(props) => props.$reg && "wrap"};
//     gap: 14px; */
//   }
// `;

export const ShopButton = styled.button`
  border-radius: 60px;
  padding: 13px 15px;
  border: none;
  background-color: var(--green);
  transition: all 0.3s;
  /* min-width: 100%; */
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  margin-top: 20px;
  /* letter-spacing: 0.02em; */
  color: var(--white);
  max-width: 155px;
  &:hover,
  &:active {
    background-color: var(--active);
  }
  @media only screen and (min-width: 768px) {
    /* padding: 16px 45px;
    width: 166px;
    font-size: 20px;
    line-height: 1; */
  }
`;
export const ShopLogoWrap = styled.div`
  min-width: 280px;
  border-radius: 27px;
  overflow: hidden;
  @media only screen and (min-width: 375px) {
    width: 335px;
    /* border-radius: 27px; */
  }
`;
