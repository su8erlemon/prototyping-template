!function r(e,t,n){function o(i,c){if(!t[i]){if(!e[i]){var f="function"==typeof require&&require;if(!c&&f)return f(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var d=t[i]={exports:{}};e[i][0].call(d.exports,function(r){var t=e[i][1][r];return o(t?t:r)},d,d.exports,r,e,t,n)}return t[i].exports}for(var u="function"==typeof require&&require,i=0;i<n.length;i++)o(n[i]);return o}({1:[function(r,e,t){"use strict";e.exports=function(r,e){return r+e}},{}],2:[function(r,e,t){"use strict";var n=r("./add"),o="test";console.log(o);var u=document.createTextNode(n(111,111));document.body.appendChild(u)},{"./add":1}]},{},[2]);
