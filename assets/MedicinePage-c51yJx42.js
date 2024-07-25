import{p as i,L as y,d as u,C as f,u as j,j as e,m as k,B as h,h as z,r as v}from"./index-D7eF3JtB.js";import{P}from"./Pagination-DbmiUUUG.js";const D=i.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
    margin-bottom: 16px;
  }
  @media only screen and (min-width: 1440px) {
    flex-direction: column;
    gap: 20px;
    margin-bottom: 0;
  }
`,I=i.div`
  min-width: 280px;
  border: 1.15px solid rgba(89, 177, 122, 0.6);
  border-radius: 27px;
  overflow: hidden;
  height: 337px;
  @media only screen and (min-width: 375px) {
    width: 335px;
  }
  @media only screen and (min-width: 768px) {
    width: 364px;
    height: 284px;
  }
  @media only screen and (min-width: 1440px) {
    height: 337px;
  }
`,C=i.img`
  width: 100%;
  height: 100%;
`,T=i.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-radius: 20px;
  padding: 20px;
  background: var(--white);
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    width: 324px;
    max-height: 284px;
    padding: 32px;
  }
  @media only screen and (min-width: 1440px) {
    width: 100%;
    padding: 20px;
    flex-direction: column;
    max-height: fit-content;
    gap: 20px;
  }
`,R=i.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (min-width: 768px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 1440px) {
    flex-direction: row;
  }
`,$=i.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,w=i.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.4;
  color: var(--black);
  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
`,W=i.span`
  font-size: 12px;
  line-height: 1.5;
  color: rgba(29, 30, 33, 0.6);
`;i.div`
  display: flex;
  gap: 8px;
`;i.button`
  border-radius: 24px;
  padding: 10px 25px;
  width: 76px;
  height: 34px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  color: #f7f8fa;
  background-color: var(--green);
  @media only screen and (min-width: 768px) {
  }
`;i.button`
  border-radius: 24px;
  padding: 10px 16px;
  width: 76px;
  height: 34px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  color: var(--green);
  background-color: rgba(89, 177, 122, 0.1);
`;i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;const S=i.button`
  border-radius: 24px;
  padding: 10px 8px;
  width: 146px;
  height: 44px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  color: #f7f8fa;
  background-color: var(--green);
  @media only screen and (min-width: 768px) {
    align-self: flex-end;
    width: 114px;
    height: 34px;
  }
  @media only screen and (min-width: 1440px) {
    align-self: flex-start;
    width: 114px;
    height: 34px;
  }
`;i(y)`
  background: transparent;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: var(--black);
  text-decoration: underline;
  text-decoration-skip-ink: none;
  text-underline-offset: 2px;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1440px) {
  }
`;const A=()=>{const{photo:n,name:t,price:d,suppliers:s,productId:c,shopId:x}=u(f),p=j();function g({shopId:l,productId:o}){p(k({shopId:l,productId:o})).unwrap().then(()=>{h.success("The product has been added to your shop successfully!"),p(z({id:l})).unwrap().then(()=>{h.success("The products of your shop are received")}).catch(m=>h.error(m))}).catch(m=>h.error(m))}return e.jsxs(D,{children:[n&&e.jsx(I,{children:e.jsx(C,{src:n,alt:t})}),e.jsxs(T,{children:[e.jsxs(R,{children:[e.jsxs($,{children:[e.jsx(w,{children:t}),e.jsx(W,{children:s})]}),e.jsxs(w,{children:["₴",d]})]}),e.jsx(S,{onClick:()=>g({shopId:x,productId:c}),children:"Add to shop"})]})]})},b=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,r=i.p`
  font-size: 14px;
  line-height: 1.28571;
  color: #6a6a6f;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,a=i.span`
  font-size: 14px;
  line-height: 1.28571;
  color: var(--black);
  @media only screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,M=()=>{const{description:n}=u(f);return e.jsx(e.Fragment,{children:n?e.jsx(b,{children:e.jsx(r,{children:n})}):e.jsxs(b,{children:[e.jsx(r,{children:"Although it's typically considered safe, excessive consumption can lead to side effects. Therefore, it's recommended to consult a healthcare professional before using moringa, especially if you're pregnant, nursing, or taking other medications. This balanced approach allows for the benefits of moringa while recognizing the importance of proper usage and caution."}),e.jsxs(r,{children:["Medicinal Uses: Antioxidant Properties:"," ",e.jsx(a,{children:"Moringa is packed with antioxidants that help fight oxidative stress and inflammation in the body."})]}),e.jsxs(r,{children:["Anti-Diabetic Effects:",e.jsx(a,{children:"Some studies have shown that moringa leaves might lower blood sugar levels, making it a valuable supplement for managing diabetes."})]}),e.jsxs(r,{children:["Heart Health:",e.jsx(a,{children:"The plant has been linked to reduced cholesterol levels, which is vital for heart health."})]}),e.jsxs(r,{children:["Anti-Cancer Properties:",e.jsx(a,{children:"Certain compounds in moringa, such as niazimicin, have been found to suppress the growth of cancer cells in laboratory studies"})]}),e.jsxs(r,{children:["Immune Support:",e.jsx(a,{children:"With its high vitamin C content, moringa can boost the immune system."})]}),e.jsxs(r,{children:["Digestive Aid:",e.jsx(a,{children:"Moringa can help in treating digestive disorders due to its anti-inflammatory properties."})]})]})})},B=i.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,L=i.li`
  display: flex;
  flex-direction: column;
  border: 1px solid #f1f1f1;
  border-radius: 20px;
  padding: 14px 28px;
  width: 295px;
  background: var(--white);
  @media only screen and (min-width: 768px) {
    width: 640px;
  }
  @media only screen and (min-width: 768px) {
    width: 100%;
  }
`,E=i.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.4;
  color: var(--black);
  @media only screen and (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 4px;
  }
`,O=i.p`
  font-size: 12px;
  line-height: 1.5;
  color: rgba(29, 30, 33, 0.6);
  @media only screen and (min-width: 768px) {
    margin-bottom: 14px;
  }
`,F=i.p`
  font-size: 14px;
  line-height: 1.28571;
  color: #6a6a6f;
`,H=()=>{const{reviews:n}=u(f),[t,d]=v.useState(0),s=3,c=(t+1)*s,x=c-s,p=n.slice(x,c),g=Math.ceil(n.length/s),l=o=>{d(o.selected)};return e.jsxs("div",{children:[e.jsx(B,{children:p.map(o=>e.jsxs(L,{children:[e.jsx(E,{children:o.name}),e.jsxs(O,{children:["Rating:",o.rating]}),e.jsx(F,{children:o.testimonial})]},o._id))}),e.jsx(P,{arrey:n,itemsPerPage:s,currentPage:t,setCurrentPage:d,pageCount:g,handlePageClick:l})]})},U=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 27px;
  padding: 20px 20px 40px;
  background: var(--white);
  @media only screen and (min-width: 768px) {
    padding: 32px 32px 64px;
    gap: 32px;
  }
  @media only screen and (min-width: 1440px) {
    padding: 40px 40px 80px;
    width: 800px;
  }
`,_=i.div`
  display: flex;
  gap: 8px;
`,q=i.button`
  border-radius: 30px;
  padding: 8px 24px;
  width: 120px;
  height: 33px;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${n=>n.$tab==="Description"?"var(--white)":"var(--green)"};
  background: ${n=>n.$tab==="Description"?"var(--green)":"rgba(89, 177, 122, 0.1)"};
`,G=i.button`
  border-radius: 30px;
  padding: 8px 24px;
  width: 102px;
  height: 33px;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${n=>n.$tab==="Reviews"?"var(--white)":"var(--green)"};
  background: ${n=>n.$tab==="Reviews"?"var(--green)":"rgba(89, 177, 122, 0.1)"};
`,J=()=>{const[n,t]=v.useState("Description");return e.jsxs(U,{children:[e.jsxs(_,{children:[e.jsx(q,{type:"button","aria-label":"Description button",onClick:()=>t("Description"),$tab:n,children:"Description"}),e.jsx(G,{type:"button","aria-label":"Reviews button",onClick:()=>t("Reviews"),$tab:n,children:"Reviews"})]}),n==="Description"?e.jsx(M,{}):e.jsx(H,{})]})},K=i.div`
  @media only screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
`,V=()=>e.jsxs(K,{children:[e.jsx(A,{}),e.jsx(J,{})]});export{V as default};
