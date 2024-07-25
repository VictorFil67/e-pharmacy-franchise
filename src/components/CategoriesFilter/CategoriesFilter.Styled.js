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
  .category-select__control {
    background-color: var(--white);
    box-shadow: #3e3e3e;
    border-radius: 60px;
    width: 100%;
    padding-left: 10px;
    height: 44px;
    cursor: pointer;
    border: 1px solid rgba(29, 30, 33, 0.1);

    @media only screen and (min-width: 768px) {
      width: 214px;
    }

    &:hover {
      border-color: var(--green);
      outline: none;
    }

    &:active {
      border-color: var(--green);
      outline: none;
    }

    caret-color: transparent;
  }

  .category-select__control--menu-is-open .category-select__indicator {
    transform: rotate(180deg);
  }

  .category-select__single-value {
    color: var(--black);
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
  }

  .category-select__indicator {
    transform: rotate(0deg);
    color: var(--black);
    &:hover {
      transform: rotate(180deg);
    }

    &:active {
      transform: rotate(180deg);
    }
  }

  .category-select__indicatorSeparator {
    display: none;
  }

  .category-select-indicatorContainer {
    color: var(--black);
    padding-right: 17px;

    &:hover {
      color: var(--black);
    }

    &[aria-expanded="true"] {
      transform: rotate(180deg);
    }
  }

  .category-select__option {
    color: var(--green);
    background-color: var(--white);
    cursor: pointer;
    padding: 1px 10px 1px;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;

    &:last-child {
      padding-bottom: 5px;
    }

    &:active {
      color: var(--green);
    }

    &[aria-selected="true"] {
      color: var(--black);
    }
  }

  .category-select__menu {
    border-radius: 15px;
    background-color: var(--white);
    padding: 10px;
  }

  .category-select__placeholder {
    color: rgba(29, 30, 33, 0.4);
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
  }

  .category-select__menuList {
    color: var(--white);

    ::-webkit-scrollbar {
      width: 20px;
    }

    ::-webkit-scrollbar-track {
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.05);
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: rgba(18, 20, 23, 0.05);
    }

    ::-webkit-scrollbar-thumb:hover {
      border-radius: 10px;
      background: rgba(7, 8, 9, 0.05);
    }
  }
`;
