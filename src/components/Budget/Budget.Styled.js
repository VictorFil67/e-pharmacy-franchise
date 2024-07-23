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
`;
export const Title = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.4;
  color: var(--black);
`;

export const ContentWrap = styled.div`
  padding: 0 14px;
  width: 100%;
`;

export const Today = styled.p`
  padding: 14px 0;
  width: 100%;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: rgba(29, 30, 33, 0.4);
  border-bottom: 1px solid rgba(29, 30, 33, 0.1);
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
`;
export const ActionName = styled.p`
  border-radius: 40px;
  padding: 4px 17px;
  width: 80px;
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
`;
export const ActionDescription = styled.p`
  max-width: 118px;
  color: var(--black);
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
`;
