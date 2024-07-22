import styled from "styled-components";
import AttachPhotoSVG from "../../images/modal/AttachPhotoSVG";

export const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.4;
  color: var(--black);
  margin-bottom: 4px;
  @media only screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 1.14286;
  }
`;

export const ImgWrap = styled.div`
  border: ${(props) =>
    props.$img ? "1.15px solid rgba(89, 177, 122, 0.6)" : "none"};
  border-radius: 20px;
  width: 130px;
  height: 130px;
  margin-top: 4px;
  overflow: hidden;
  @media only screen and (min-width: 768px) {
    width: 160px;
    height: 160px;
  }
`;
export const Img = styled.img`
  width: 100%;
`;

export const Photo = styled.img`
  display: block;
  height: 100%;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
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
    column-gap: 8px;
    row-gap: 8px;
  }
`;
export const InputWrap = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  &:first-child {
    border: none;
    /* background-color: var(--green); */
    transition: all 0.3s;
    min-width: 100%;
    gap: 0;
    margin-bottom: 40px;
    transition: transform 0.3s ease;
    &:hover,
    &:active {
      /* background-color: var(--active); */
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
    /* & > span {
      display: none;
    } */
    @media only screen and (min-width: 768px) {
      margin-bottom: 17px;
    }
  }
`;

export const LabelName = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.28571;
  color: var(--black);
  padding-left: 18px;
  @media only screen and (min-width: 768px) {
    padding-left: 15px;
  }
`;

export const AttachPhotoWrap = styled.div`
  display: flex;
  gap: 8px;
  align-self: center;
`;

export const AttachPhotoStyled = styled(AttachPhotoSVG)``;

export const ImageInputText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  text-underline-offset: 2px;
  color: rgba(29, 30, 33, 0.6);
  text-align: center;
`;

export const Input = styled.input`
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 60px;
  padding: 12px 18px;
  min-width: 100%;
  background: var(--white);
  outline: none;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: var(--black);
  @media only screen and (min-width: 375px) {
    max-width: 295px;
  }
  &:last-child {
  }
  &::placeholder {
    color: rgba(29, 30, 33, 0.4);
  }

  &:focus-within {
    border: 1px solid var(--green);
  }
  @media only screen and (min-width: 768px) {
    width: 229px;
  }
`;

export const ErrorSpan = styled.span`
  color: #e90516;
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
`;

export const Textarea = styled.textarea`
  border: 1px solid rgba(29, 30, 33, 0.2);
  outline: none;
  border-radius: 15px;
  min-width: 100%;
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
  @media only screen and (min-width: 768px) {
    width: 468px;
  }
`;

export const FormButtonsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  @media only screen and (min-width: 768px) {
    margin-top: 1px;
    max-width: 285px;
  }
`;

export const MedicineButton = styled.button`
  border-radius: 60px;
  padding: 13px;
  border: none;
  background-color: var(--green);
  transition: all 0.3s;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: #f7f8fa;
  min-width: 51%;
  &:hover,
  &:active {
    background-color: var(--active);
  }
  @media only screen and (min-width: 335px) {
    max-width: 148px;
  }
  @media only screen and (min-width: 768px) {
    min-width: 20%;
    width: 144px;
  }
`;
export const CancelButton = styled.button`
  border-radius: 60px;
  padding: 13px;
  border: none;
  background-color: rgba(29, 30, 33, 0.1);
  transition: all 0.3s;
  min-width: 46%;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: rgba(29, 30, 33, 0.4);
  &:hover,
  &:active {
    background-color: var(--active);
  }
  @media only screen and (min-width: 335px) {
    width: 139px;
  }
  @media only screen and (min-width: 768px) {
    max-width: 133px;
  }
`;
