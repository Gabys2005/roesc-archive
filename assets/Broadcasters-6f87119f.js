import{r,j as i}from"./index-beff47e6.js";import{b as m}from"./fetchData-8482bb86.js";import{E as p}from"./Editor-3b70754e.js";import{g as n}from"./users-0bc15ced.js";import"./Button-48b929c1.js";import"./UserInput-d955c1cb.js";import"./Editor-bf85b5b9.js";import"./Markdown-178a2702.js";import"./utils-a9b59537.js";import"./parseDate-e6b73185.js";import"./BroadcastingTable-d76a920a.js";import"./Table-58916d27.js";import"./OutLink-2b6af22f.js";function U(){const[s,o]=r.useState(),[e,a]=r.useState();return r.useEffect(()=>{m().then(t=>{o(t)}),n().then(t=>{a(t)})},[]),!s||!e?i.jsx("h1",{children:"Loading..."}):i.jsx(p,{broadcasters:s,setBroadcasters:o,users:e,setUsers:a})}export{U as default};
