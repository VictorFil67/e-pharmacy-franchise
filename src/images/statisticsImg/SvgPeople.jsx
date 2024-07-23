const SvgPeople = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={window.innerWidth < 768 ? "18" : "20"}
    height={window.innerWidth < 768 ? "18" : "20"}
    fill="none"
    {...props}
  >
    <path
      stroke="#1D1E21"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d={
        window.innerWidth < 768
          ? "M15.75 15c0-1.306-1.252-2.417-3-2.83M11.25 15c0-1.658-2.014-3-4.5-3s-4.5 1.342-4.5 3m9-5.25a3 3 0 0 0 0-6m-4.5 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
          : "M17.5 16.667c0-1.452-1.392-2.686-3.333-3.144M12.5 16.667c0-1.842-2.238-3.333-5-3.333s-5 1.491-5 3.333m10-5.833a3.333 3.333 0 1 0 0-6.667m-5 6.667a3.333 3.333 0 1 1 0-6.667 3.333 3.333 0 0 1 0 6.667Z"
      }
    />
  </svg>
);
export default SvgPeople;
