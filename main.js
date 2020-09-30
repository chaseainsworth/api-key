// Use any ONE of these API's that needs an API key to get data.
// Read the docs to see how to call for and get the data that you want
// Or you can use one of your choosing if you are comfortable, HOWEVER it must require an API Key
// Parse the data, and log any important information you would like to show in a nice format of your choosing.
// You can add your own spin to the data in how you present it.
// Use any tools we've practiced such as promises, destructuring, etc.
// Once everything works, upload the file and submit.

const fetch = require('node-fetch');
const apiKey = require('./key.js');

var url = 'http://newsapi.org/v2/everything?' +
        'q=space&' +
        'from=2020-09-30&' +
        'sortBy=popularity&' +
        apiKey;

fetch(url)
    .then(res => res.json())
    .then(json => console.log(json.author));


