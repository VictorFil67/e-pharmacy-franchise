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
    />
  );
};

export default CategoriesFilter;
