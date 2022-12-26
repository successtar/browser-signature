export default e=>{let t=localStorage.getItem("device-unique-signature")||"";if(t)return t;for(let e=0;e<5;e++)t+=Math.random().toString(36).slice(2);return localStorage.setItem("device-unique-signature",t),t};
//# sourceMappingURL=storage.modern.js.map
