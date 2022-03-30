// import './styles.css';
const fs = require('fs');
const ciDetext = require('@npmcli/ci-detect');
const moment = require('moment');
const jsdom = require('jsdom');

const { JSDOM } = jsdom;
const inCi = ciDetext();

let charecters = [];
let time = moment().format('LLLL');
console.log(time);

fs.readFile('test.js', 'utf8', function(err, data) {
    console.log(data);
})

let sysinfo = [];
var elements = document.getElementsByClassName('main-header');
let ua = Navigator.userAgent;

// get system info
let height = window.innerHeight;
let width = window.innerWidth;
let hostname = window.location.hostname;
let baseurl = window.location.origin;
let host = window.location.host;
let uri = document.baseURI;
let elem = window.document;
let arr = window.location.pathname.split('/');
let path = window.location.pathname;

// sysinfo to console
console.log(width, height, baseurl, uri, hostname, elem, host, path);

// get pathname
console.log(arr);

sysinfo.push(height);
sysinfo.push(width);
sysinfo.push(uri);
sysinfo.push(hostname);
console.log(sysinfo)

let scheme_light = [
    { "hex": "#fcfcfc" }, { "websafe": "#ffffff" },
    { "rgb": "252, 252, 252" }, { "hsl": "0, 0, 99" },
    { "hsb": "0, 0, 99" }, { "cmyk": "0 , 0, 0, 1" }
]

console.log(scheme_light);
console.log(window)
console.log(window.Element);

let appPath = window.__filename
let url = window.CacheStorage

// local storage
let store = localStorage.setItem("name", "goku");
let recall = localStorage.getItem("name");

var style = document.getElementById('home-section').style;
var propertyName = style.item(1);

console.log(style);
console.log(propertyName);



















// var msg = new SpeechSynthesisUtterance();
// msg.text = "Good Morning";
// window.speechSynthesis.speak(msg);

// var msg = new SpeechSynthesisUtterance();
// var voices = window.speechSynthesis.getVoices();
// msg.voice = voices[10];
// msg.volume = 1; // From 0 to 1
// msg.rate = 1; // From 0.1 to 10
// msg.pitch = 2; // From 0 to 2
// msg.text = "Como estas Joel";
// msg.lang = 'es';

// console.log(charecters[5]);
// console.log(charecters[Math.floor(50 * Math.random())]);
// console.log(charecters[Math.floor(50 * Math.random())]);
// console.log(charecters[Math.floor(50 * Math.random())]);
// console.log(charecters[Math.floor(50 * Math.random())]);
// console.log(Math.random());


// // text to speech
// if ('speechSynthesis' in window) { // Speech Synthesis supported 🎉
// } else { // Speech Synthesis Not Supported 😣
//     alert("Sorry, your browser doesn't support text to speech!");
// }
// speechSynthesis.speak(msg);
// speechSynthesis.getVoices().forEach(function(voice) {
//     console.log(voice.name, voice.default ? voice.default : '');
// });
// console.log(propertyName);