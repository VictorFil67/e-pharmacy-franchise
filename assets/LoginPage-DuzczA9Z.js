import{u as d,j as r,s as p,B as e,g as l}from"./index-D7eF3JtB.js";import{c as w,a as s,o as g}from"./index.esm-C6LJeu5v.js";import{u as f}from"./index.esm-CG_mvzg_.js";import{A as v}from"./AuthComponent-Bo-6AZeA.js";const x=w({email:s().email("Please write a valid email").matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Please write a valid email").required("The email is required"),password:s().min(8,"The password must contain a minimum of 8 characters").required("The password is required")}),A=()=>{const a=d(),o=[{placeholder:"Email address",name:"email",type:"text"},{placeholder:"Password",name:"password",type:"password"}],{register:t,handleSubmit:n,formState:{errors:i}}=f({mode:"onChange",resolver:g(x)});function m({email:u,password:c}){a(p({email:u,password:c})).unwrap().then(()=>{e.success("Welcome!"),a(l()).unwrap().then(()=>{e.success("You have your own shop")}).catch(()=>e.error("You don't have your own shop"))}).catch(h=>e.error(h))}return r.jsx("div",{children:r.jsx(v,{inputs:o,register:t,handleSubmit:n,onSubmit:m,errors:i,buttonName:"Log in",account:"Don't have an account?",rout:"/register",marg:!0})})};export{A as default};
