const RadioChecked = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <rect
      width={16}
      height={16}
      x={2}
      y={2}
      stroke="#59B17A"
      strokeWidth={2}
      rx={8}
    />
    <rect width={10} height={10} x={5} y={5} fill="#59B17A" rx={5} />
  </svg>
);
export default RadioChecked;
