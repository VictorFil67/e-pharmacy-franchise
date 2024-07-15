import styled from "styled-components";

// export const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
//   padding-top: 300px;
//   background: rgba(20, 20, 20, 0.6);
//   z-index: 3;
//   overflow: auto;
//   @media only screen and (min-width: 768px) {
//     padding-top: 350px;
//   }
//   @media only screen and (min-width: 1280px) {
//     padding-top: 280px;
//   }
// `;
// export const Modal = styled.div`
//   position: relative;
//   border: 1px solid rgba(104, 104, 104, 0.2);
//   padding: 59px 46px;
//   background-color: var(--white);
//   border-radius: 12px;
//   max-width: 335px;
//   @media only screen and (min-width: 768px) {
//     padding: 50px;
//     max-width: 342px;
//   }
//   @media only screen and (min-width: 1280px) {
//   }
// `;
// export const CloseButton = styled.button`
//   position: absolute;
//   top: 16px;
//   right: 12px;
//   border: none;
//   background-color: transparent;
//   padding: 0;
//   @media only screen and (min-width: 768px) {
//     right: 16px;
//   }
// `;
export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 100%;
  @media only screen and (min-width: 768px) {
    gap: 32px;
    width: 242px;
  }
`;
// export const Picture = styled.img`
//   display: block;
//   margin: 0 auto;
// `;
// export const TextWrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   align-items: center;
//   width: 100%;
//   @media only screen and (min-width: 768px) {
//     gap: 14px;
//   }
// `;
// export const Title = styled.h2`
//   font-weight: 700;
//   font-size: 18px;
//   line-height: 1;
//   letter-spacing: -0.02em;
//   color: var(--white);
//   @media only screen and (min-width: 768px) {
//     font-size: 20px;
//   }
// `;
// export const Text = styled.p`
//   font-weight: 500;
//   font-size: 14px;
//   line-height: 1.28571;
//   letter-spacing: -0.02em;
//   color: var(--input-title);
//   text-align: center;
// `;
// export const Span = styled.span`
//   font-weight: 500;
//   font-size: 14px;
//   line-height: 1.28571;
//   color: var(--white);
// `;
export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  background: #fff;
  border-radius: 27px;
  gap: 40px;
  @media only screen and (min-width: 768px) {
    padding: 40px 38px;
  }
  @media only screen and (min-width: 1440px) {
    padding: 40px;
    width: 708px;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.4;
  color: var(--black);
  @media only screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 1.14286;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* min-width: 280px; */
  @media only screen and (min-width: 375px) {
    /* width: 335px; */
    /* border-radius: 27px; */
  }
  @media only screen and (min-width: 768px) {
    max-width: 100%;
    gap: 16px;
  }
`;
export const InputBlockWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 14px;
    row-gap: 16px;
  }
`;
export const InputWrap = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* &:last-child {
    border-radius: 60px;
    padding: 13px 15px;
    border: none;
    background-color: var(--green);
    transition: all 0.3s;
    min-width: 100%;
    gap: 0;
    margin-top: 8px;
    transition: transform 0.3s ease;
    &:hover,
    &:active {
      background-color: var(--active);
      transform: scale(1.1);
    }
    & > input {
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      opacity: 0;
    }
    & > span {
      display: none;
    }
    @media only screen and (min-width: 768px) {
      min-width: 200px;
      height: 44px;
      margin-top: 26px;
    }
  } */
`;

export const LabelName = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.28571;
  color: var(--black);
  padding-left: 18px;
`;

export const ImageInputText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: 0.02em;
  color: var(--white);
  text-align: center;
`;

export const Input = styled.input`
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 60px;
  padding: 12px 18px;
  min-width: 240px;
  background: var(--white);
  outline: none;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: var(--black);
  @media only screen and (min-width: 375px) {
    width: 295px;
  }
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
    width: 200px;
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
    max-width: 167px;
  }
`;
export const Textarea = styled.textarea`
  border: 1px solid rgba(29, 30, 33, 0.2);
  outline: none;
  border-radius: 15px;
  min-width: 240px;
  height: 100px;
  padding: 13px 15px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: var(--black);
  &::placeholder {
    color: rgba(29, 30, 33, 0.4);
  }
  @media only screen and (min-width: 375px) {
    width: 295px;
  }
`;
