const SvgMoney = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={window.innerWidth < 768 ? "18" : "20"}
    height={window.innerWidth < 768 ? "18" : "20"}
    fill="none"
    {...props}
  >
    <g
      stroke="#1D1E21"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#a)"
    >
      <path
        d={
          window.innerWidth < 768
            ? "M11.57 9.643c3.196 0 5.787-1.151 5.787-2.572 0-1.42-2.59-2.571-5.786-2.571-3.195 0-5.786 1.151-5.786 2.571 0 1.42 2.59 2.572 5.786 2.572Z"
            : "M12.858 10.714c3.55 0 6.429-1.279 6.429-2.857C19.287 6.28 16.409 5 12.858 5 9.308 5 6.43 6.28 6.43 7.857c0 1.578 2.878 2.857 6.428 2.857Z"
        }
      />
      <path
        d={
          window.innerWidth < 768
            ? "M5.785 7.071v7.715c0 1.414 2.572 2.571 5.786 2.571 3.214 0 5.786-1.157 5.786-2.571V7.07"
            : "M6.43 7.857v8.572c0 1.571 2.857 2.857 6.428 2.857 3.572 0 6.429-1.286 6.429-2.857V7.857"
        }
      />
      <path
        d={
          window.innerWidth < 768
            ? "M17.357 10.929c0 1.414-2.572 2.571-5.786 2.571-3.214 0-5.786-1.157-5.786-2.571m5.658-9A8.704 8.704 0 0 0 6.428.643C3.227.643.643 1.8.643 3.215c0 .758.745 1.44 1.928 1.928"
            : "M19.286 12.143c0 1.572-2.857 2.857-6.428 2.857-3.572 0-6.429-1.285-6.429-2.857m6.286-10A9.671 9.671 0 0 0 7.143.715C3.586.715.715 2 .715 3.572c0 .843.828 1.6 2.143 2.143"
        }
      />
      <path
        d={
          window.innerWidth < 768
            ? "M2.571 12.858c-1.183-.489-1.928-1.17-1.928-1.929V3.215"
            : "M2.858 14.287c-1.315-.543-2.143-1.3-2.143-2.143V3.572"
        }
      />
      <path
        d={
          window.innerWidth < 768
            ? "M2.571 9C1.388 8.51.643 7.83.643 7.07"
            : "M2.858 10C1.543 9.457.715 8.7.715 7.857"
        }
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMoney;
