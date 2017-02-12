var add = require('./add');

const aaa = "test";
console.log(aaa);

var txt = document.createTextNode(add(111, 111));
document.body.appendChild(txt);