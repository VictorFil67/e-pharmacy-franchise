import styled from "styled-components";

export const BudgetWrap = styled.div`
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 8px;
  /* padding: 20px; */
  /* width: 335px; */
  /* height: 511px; */
  width: 100%;
`;

export const TitleWrap = styled.div`
  background-color: #e7f1ed;
  padding: 14px;
  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`;
export const Title = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.4;
  color: var(--black);
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.3333;
  }
`;

export const ContentWrap = styled.div`
  padding: 0 14px;
  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 0 20px;
  }
`;

export const Today = styled.p`
  padding: 14px 0;
  width: 100%;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: rgba(29, 30, 33, 0.4);
  border-bottom: 1px solid rgba(29, 30, 33, 0.1);
  @media screen and (min-width: 768px) {
    padding: 20px 0;
  }
`;
export const BudgetItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 14px 0;
  width: 100%;
  /* font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: rgba(29, 30, 33, 0.4); */
  border-bottom: 1px solid rgba(29, 30, 33, 0.1);
  @media screen and (min-width: 768px) {
    padding: 20px 0;
  }
`;
export const ActionName = styled.p`
  border-radius: 40px;
  padding: 4px 17px;
  text-align: center;
  min-width: 80px;
  height: 23px;
  letter-spacing: -0.05em;
  font-weight: 500;
  font-size: 12px;
  color: ${(props) =>
    props.$type === "Expense"
      ? "#e85050"
      : props.$type === "Income"
      ? "var(--green)"
      : "var(--black)"};
  background-color: ${(props) =>
    props.$type === "Expense"
      ? "rgba(232, 80, 80, 0.1)"
      : props.$type === "Income"
      ? "rgba(89, 177, 122, 0.1)"
      : "rgba(29, 30, 33, 0.1)"};
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
export const ActionDescription = styled.p`
  /* max-width: 118px; */
  color: var(--black);
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  max-width: 100%;
  padding: 0 20px 0 28px;
  flex-grow: 1;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding-left: 40px;
  }
`;
export const ActionSum = styled.p`
  /* padding: 14px 0;
  width: 100%; */
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  /* color: rgba(29, 30, 33, 0.4); */
  /* border-bottom: 1px solid rgba(29, 30, 33, 0.1); */
  color: ${(props) =>
    props.$type === "Expense"
      ? "#e85050"
      : props.$type === "Income"
      ? "var(--green)"
      : "var(--black)"};
  text-decoration: ${(props) => props.$type === "Error" && "line-through"};
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.125;
  }
`;
