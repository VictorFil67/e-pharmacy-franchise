import{u,d as b,e as f,a as S,r as y,j as p,y as x,B as n}from"./index-CL0YKYDY.js";import{c as g,a as t,o as w}from"./index.esm-Zswy7i1T.js";import{u as E}from"./index.esm-BmTzlNPA.js";import{S as N}from"./Shop-CBQqK08X.js";const P=g({shopName:t(),shopOwnerName:t(),shopEmail:t(),shopPhone:t(),shopStreet:t(),shopCity:t(),shopZip:t(),password:t()}),D=()=>{const h=u(),o=b(f),r=S();y.useEffect(()=>{o||r("/create-shop")},[o,r]);const m=[{label:"Shop Name",name:"shopName",type:"text"},{label:"Shop Owner Name",name:"shopOwnerName",type:"text"},{label:"Email address",name:"shopEmail",type:"text"},{label:"Phone number",name:"shopPhone",type:"text"},{label:"Street Address",name:"shopStreet",type:"text"},{label:"City",name:"shopCity",type:"text"},{label:"Zip / Postal",name:"shopZip",type:"number"},{label:"Password",name:"password",type:"password"},{label:"Upload Logo",name:"shopLogoURL",type:"file"}],{register:i,handleSubmit:l,formState:{errors:c}}=E({mode:"onChange",resolver:w(P)});function d(s){const a=new FormData;for(const e in s)e==="shopLogoURL"&&s[e][0]?a.append(e,s[e][0]):s[e]&&a.append(e,s[e]);h(x({id:o.shopId,formData:a})).unwrap().then(()=>{n.success("The shop has been edited!")}).catch(e=>n.error(e))}return p.jsx(p.Fragment,{children:p.jsx(N,{title:"Edit data",inputs:m,register:i,handleSubmit:l,onSubmit:d,errors:c,buttonName:"Save"})})};export{D as default};