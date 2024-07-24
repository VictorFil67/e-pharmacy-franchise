import { FilterSelect } from "./CategoriesFilter.Styled";

const options = [
  { value: "Medicine", label: "Medicine" },
  { value: "Head", label: "Head" },
  { value: "Dental Care", label: "Dental Care" },
  { value: "Leg", label: "Leg" },
  { value: "Heart", label: "Heart" },
  { value: "Hand", label: "Hand" },
  { value: "Skin Care", label: "Skin Care" },
  { value: null, label: "All Medicines" },
];

const CategoriesFilter = ({ selectedOption, setSelectedOption }) => {
  return (
    <FilterSelect
      onChange={setSelectedOption}
      name="filter"
      components={{
        IndicatorSeparator: () => null,
      }}
      options={options}
      aria-label="Filter for the categories"
      placeholder="Product category"
      defaultValue={selectedOption}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: "var(--white)",
          boxShadow: state.isFocused ? "#3e3e3e" : "#3e3e3e",
          borderRadius: "60px",
          width: "100%",
          paddingLeft: "10px",
          "@media only screen and (min-width: 768px)": {
            width: "214px",
          },
          height: "44px",
          cursor: "pointer",
          border: "1px solid rgba(29, 30, 33, 0.1)",
          ":hover": {
            borderColor: "var(--green)",
            outline: "none",
          },
          ":active": {
            borderColor: "var(--green)",
            outline: "none",
          },
          caretColor: "transparent",
        }),
        singleValue: (b) => ({
          ...b,
          color: "var(--black)",
        }),
        dropdownIndicator: (b, s) => ({
          ...b,
          color: "var(--black)",
          paddingRight: "17px",
          transform: s.selectProps.menuIsOpen
            ? "rotate(180deg)"
            : "rotate(0deg)",
          ":hover": {
            color: "var(--black)",
          },
        }),
        option: (b, s) => ({
          ...b,
          color: !s.isSelected ? "var(--green)" : "var(--black)",
          backgroundColor: "var(--white)",
          cursor: "pointer",
          padding: "0 0 4px 0",
          "&:last-child": {
            paddingBottom: "0px",
          },
          ":active": {
            color: s.isSelected ? "var(--green)" : "var(--black)",
          },
        }),
        menu: (styles) => ({
          ...styles,
          borderRadius: "15px",
          backgroundColor: "var(--white)",
          padding: "18px",
        }),
        placeholder: (defaultStyles) => ({
          ...defaultStyles,
          color: "rgba(29, 30, 33, 0.4)",
        }),
        menuList: (styles) => ({
          ...styles,

          color: "var(--white)",
          "::-webkit-scrollbar": {
            width: "20px",
          },
          "::-webkit-scrollbar-track": {
            borderRadius: "10px",

            background: "rgba(255, 255, 255, 0.05)",
          },
          "::-webkit-scrollbar-thumb": {
            borderRadius: "10px",

            background: "rgba(18, 20, 23, 0.05)",
          },
          "::-webkit-scrollbar-thumb:hover": {
            borderRadius: "10px",

            background: "rgba(7, 8, 9, 0.05)",
          },
        }),
      }}
    />
  );
};

export default CategoriesFilter;
