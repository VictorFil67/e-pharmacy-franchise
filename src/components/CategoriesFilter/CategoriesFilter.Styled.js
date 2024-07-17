import styled from "styled-components";
import Select from "react-select";

export const FilterSelect = styled(Select)`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--black);
  border: none;
  outline: none;
  @media only screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.128571;
  }
`;
