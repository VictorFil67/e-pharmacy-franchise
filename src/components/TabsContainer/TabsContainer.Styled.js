import styled from "styled-components";

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 27px;
  padding: 20px 20px 40px;
  background: var(--white);
  @media only screen and (min-width: 768px) {
    padding: 32px 32px 64px;
    gap: 32px;
  }
  @media only screen and (min-width: 1440px) {
    padding: 40px 40px 80px;
    width: 800px;
  }
`;
export const TabButtonsWrap = styled.div`
  display: flex;
  gap: 8px;
`;

export const DescriptionBtn = styled.button`
  border-radius: 30px;
  padding: 8px 24px;
  width: 120px;
  height: 33px;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${(props) =>
    props.$tab === "Description" ? "var(--white)" : "var(--green)"};
  background: ${(props) =>
    props.$tab === "Description" ? "var(--green)" : "rgba(89, 177, 122, 0.1)"};
`;

export const ReviewsBtn = styled.button`
  border-radius: 30px;
  padding: 8px 24px;
  width: 102px;
  height: 33px;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${(props) =>
    props.$tab === "Reviews" ? "var(--white)" : "var(--green)"};
  background: ${(props) =>
    props.$tab === "Reviews" ? "var(--green)" : "rgba(89, 177, 122, 0.1)"};
`;
