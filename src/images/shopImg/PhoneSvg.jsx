const PhoneSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        stroke="#59B17A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.498 12.69v2.25a1.499 1.499 0 0 1-1.635 1.5 14.843 14.843 0 0 1-6.472-2.302 14.625 14.625 0 0 1-4.5-4.5 14.842 14.842 0 0 1-2.303-6.503A1.5 1.5 0 0 1 3.081 1.5h2.25a1.5 1.5 0 0 1 1.5 1.29 9.63 9.63 0 0 0 .525 2.108 1.5 1.5 0 0 1-.338 1.582l-.952.953a12 12 0 0 0 4.5 4.5l.952-.953a1.5 1.5 0 0 1 1.583-.337c.68.253 1.387.43 2.107.525a1.5 1.5 0 0 1 1.29 1.522Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default PhoneSvg;
