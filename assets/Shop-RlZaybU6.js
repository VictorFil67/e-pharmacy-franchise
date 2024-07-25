import{p as i,j as e,d as R,e as W,r as p}from"./index-BdF_sfFs.js";const C=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1440px) {
    flex-direction: row;
  }
`,D=i.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  background: #fff;
  border-radius: 27px;
  gap: 40px;
  @media only screen and (min-width: 768px) {
    padding: 40px 38px;
  }
  @media only screen and (min-width: 1440px) {
    padding: 40px;
    width: 708px;
  }
`,F=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media only screen and (min-width: 768px) {
    gap: 14px;
  }
`,B=i.h1`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.4;
  color: var(--black);
  @media only screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 1.14286;
  }
`,N=i.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: #6a6a6f;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    max-width: 427px;
  }
`,Y=i.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 335px;
  @media only screen and (min-width: 768px) {
    max-width: 100%;
    gap: 16px;
  }
`,E=i.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 14px;
    row-gap: 16px;
  }
`,I=i.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  &:last-child {
    border-radius: 60px;
    padding: 13px 15px;
    border: none;
    background-color: var(--green);
    transition: all 0.3s;
    min-width: 100%;
    gap: 0;
    margin-top: 8px;
    transition: transform 0.3s ease;
    &:hover,
    &:active {
      background-color: var(--active);
      transform: scale(1.1);
    }
    & > input {
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      opacity: 0;
    }
    & > span {
      display: none;
    }
    @media only screen and (min-width: 768px) {
      min-width: 200px;
      height: 44px;
      margin-top: 26px;
    }
  }
`,T=i.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.28571;
  color: var(--black);
  padding-left: 18px;
`,U=i.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: 0.02em;
  color: var(--white);
  text-align: center;
`,x=i.input`
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 60px;
  padding: 12px 18px;
  min-width: 100%;
  background: var(--white);
  outline: none;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: var(--black);
  &:last-child {
  }
  &::placeholder {
    color: rgba(29, 30, 33, 0.4);
  }

  &:focus-within {
    border: 1px solid var(--green);
  }
  @media only screen and (min-width: 768px) {
    width: 200px;
  }
`,O=i.span`
  color: #e90516;
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
`,V=i.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,A=i.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.28571;
  color: var(--black);
`,G=i.div`
  display: flex;
`,h=i.label`
  position: relative;
  margin-right: 24px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
`,c=i.div`
  position: absolute;
  top: 0px;
  left: 0px;
`,g=i.input`
  margin-right: 8px;
  opacity: 0;
`,m=i.span`
  margin-left: 8px;
`,H=i.button`
  border-radius: 60px;
  padding: 13px 15px;
  border: none;
  background-color: var(--green);
  transition: all 0.3s;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  margin-top: 20px;

  color: var(--white);
  max-width: 155px;
  &:hover,
  &:active {
    background-color: var(--active);
  }
  @media only screen and (min-width: 768px) {
    max-width: 167px;
  }
`,q=i.div`
  min-width: 280px;
  border-radius: 27px;
  overflow: hidden;
  @media only screen and (min-width: 375px) {
    width: 335px;
  }
  @media only screen and (min-width: 768px) {
    width: 704px;
  }
  @media only screen and (min-width: 1440px) {
    width: 456px;
    height: 624px;
    & > img {
      max-width: 456px;
      height: 100%;
    }
  }
`,w=t=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",...t,children:[e.jsx("rect",{width:16,height:16,x:2,y:2,stroke:"#59B17A",strokeWidth:2,rx:8}),e.jsx("rect",{width:10,height:10,x:5,y:5,fill:"#59B17A",rx:5})]}),f=t=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",...t,children:e.jsx("rect",{width:16,height:16,x:2,y:2,stroke:"#121417",strokeOpacity:.2,strokeWidth:2,rx:8})}),K=({handleSubmit:t,onSubmit:u,inputs:y,register:a,errors:v,title:j,buttonName:s})=>{const o=R(W),[r,b]=p.useState("Yes"),[k,S]=p.useState(""),d=n=>{b(n.target.value)},z=n=>{S(n.target.value)};return e.jsxs(C,{children:[e.jsxs(D,{children:[e.jsxs(F,{children:[e.jsx(B,{children:j}),e.jsx(N,{children:"This information will be displayed publicly so be careful what you share."})]}),e.jsxs(Y,{onSubmit:t(u),children:[e.jsx(E,{children:y.map((n,L)=>{var l;return e.jsxs(I,{children:[n.type==="file"?e.jsxs(e.Fragment,{children:[e.jsxs(U,{children:[" ",k?"Logo is chosen":"Upload Logo"]}),e.jsx(x,{type:n.type,...a(n.name),onChange:z})]}):e.jsxs(e.Fragment,{children:[e.jsx(T,{children:n.label}),e.jsx(x,{placeholder:"Enter text",type:n.type,...a(n.name)})]}),e.jsx(O,{children:(l=v[a(n.name).name])==null?void 0:l.message})]},L)})}),e.jsxs(V,{children:[e.jsx(A,{children:"Has own Delivery System?"}),e.jsxs(G,{children:[e.jsxs(h,{children:[e.jsx(c,{children:r==="Yes"?e.jsx(w,{}):e.jsx(f,{})}),e.jsx(g,{...a("shopOwnDelivery"),type:"radio",value:"Yes",defaultChecked:r==="Yes",onChange:d}),e.jsx(m,{children:"Yes"})]}),e.jsxs(h,{children:[e.jsx(c,{children:r==="No"?e.jsx(w,{}):e.jsx(f,{})}),e.jsx(g,{...a("shopOwnDelivery"),type:"radio",value:"No",defaultChecked:r==="No",onChange:d}),e.jsx(m,{children:"No"})]})]})]}),e.jsx(H,{name:"submit",type:"submit","aria-label":s,children:s})]})]}),e.jsx(q,{children:(o==null?void 0:o.shopLogoURL)&&e.jsx("img",{src:o==null?void 0:o.shopLogoURL,alt:"Shop Logo"})})]})};export{K as S};
