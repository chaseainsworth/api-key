

const fetch = require('node-fetch');
const apiKey = require('./key.js');

var url = 'http://newsapi.org/v2/everything?' +
        'q=cats&' +
        'from=2020-09-30&' +
        'sortBy=popularity&' +
        apiKey;

fetch(url)
        .then(res => res.json())
        .then(json => {
                const {articles} = json;
                console.log(`There have been ${articles.length} new articles on the topic of "Cats" in the last 24 hours.`)
                const {articles: [{author: a, title: t, url}]} = json;
                let articlesObj = {};
                json.articles.map((article, index) => articlesObj[index + 1] = `${article.title}. \n Author: ${article.author} \n Website: ${url}`);
                return articlesObj;
        })
        .then(title => {
                console.log(title);
        })
        .catch(err => {
                console.log(err);
        })


