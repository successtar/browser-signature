module.exports=function(e){var t=localStorage.getItem("device-unique-signature")||"";if(t)return t;for(var r=0;r<5;r++)t+=Math.random().toString(36).slice(2);return localStorage.setItem("device-unique-signature",t),t};
//# sourceMappingURL=storage.js.map
