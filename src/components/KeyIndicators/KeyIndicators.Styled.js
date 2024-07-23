import styled from "styled-components";

export const Indexes = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-bottom: 20px;
`;

export const IndexItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 14px;
  max-width: 157px;
  height: 98px;
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 8px;
`;
export const IndexTitleWrap = styled.div`
  display: flex;
  gap: 8px;
  /* padding: 14px; */
  width: 157px;
  height: 98px;

  border-radius: 8px;
`;
export const IndexTitle = styled.p`
  /* font-weight: 600; */
  font-size: 12px;
  line-height: 1.16667;
  color: var(--placeholder);
`;
export const IndexTotal = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;
  color: var(--black);
`;
