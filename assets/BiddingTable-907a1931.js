import{j as s}from"./index-39c65143.js";import{O as i}from"./OutLink-45fd4ae7.js";import{T as l}from"./Table-aa9625fc.js";const o={oc:"Opening Ceremony",sf1:"Semi-Final 1",sf2:"Semi-Final 2",gf:"Grand Final"},h=Object.keys(o).map(n=>({id:n,name:o[n]})),f=["sf1","sf2","gf"],p=[{value:"esc",label:"Eurovision Style (12, 10, 8-1 points)",points:[12,10,8,7,6,5,4,3,2,1]}];function u({data:n,stopLinks:t}){return s.jsx(l,{columns:["City","Venue","Notes"],children:n.map((e,r)=>s.jsxs("tr",{className:e.won?"selected":"",children:[s.jsx("td",{children:e.city}),s.jsx("td",{children:s.jsx(i,{to:!t&&e.link,children:e.venue})}),s.jsx("td",{children:e.notes})]},r))})}export{u as B,h as a,f as b,o as s,p as v};