import moment from 'moment';
const ciDetext = require('@npmcli/ci-detect');
const popcorn = document.querySelector('#popcorn');
const tooltip = document.querySelector('#tooltip');

const inCI = ciDetext();


let date = moment()
console.log(date);

let sysinfo = [];
var elements = document.getElementsByClassName('main-header');
let ua = Navigator.userAgent

let height = window.innerHeight;
console.log(height);

let width = window.innerWidth;
console.log(width);

let uri = document.baseURI;
let hostname = window.location.hostname;

console.log(uri);
console.log(hostname);

let elem = window.document;
console.log(elem);

sysinfo.push(height);
sysinfo.push(width);
sysinfo.push(uri);
sysinfo.push(hostname);

console.log(sysinfo)