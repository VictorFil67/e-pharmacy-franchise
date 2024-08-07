const CloseSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={window.innerWidth < 768 ? "20" : "24"}
    height={window.innerWidth < 768 ? "20" : "24"}
    fill="none"
    {...props}
  >
    <path
      stroke="#1D1E21"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d={
        window.innerWidth < 768
          ? "M15 5 5 15M5 5l10 10"
          : "M18 6 6 18M6 6l12 12"
      }
    />
  </svg>
);
export default CloseSVG;
