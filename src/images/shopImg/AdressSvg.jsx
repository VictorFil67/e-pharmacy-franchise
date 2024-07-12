const AdressSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="#59B17A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.75 7.5c0 5.25-6.75 9.75-6.75 9.75s-6.75-4.5-6.75-9.75a6.75 6.75 0 0 1 13.5 0Z"
    />
    <path
      stroke="#59B17A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 9.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
    />
  </svg>
);
export default AdressSvg;
