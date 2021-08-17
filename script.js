// api key : cd0ccfd7af994c9b9f17077524a0c856
let image = document.querySelector('.image');
let headlines = document.querySelector('.heading');
let content = document.querySelector('.content');
let left = document.querySelector('#left');
let right = document.querySelector('#right');
const apikey = 'cd0ccfd7af994c9b9f17077524a0c856';

const api = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apikey}`;

const random = Math.floor(Math.random() * 10);
console.log(random);

fetch(api)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log(data.articles[0].content);
    content.textContent = data.articles[random].content;
    headlines.textContent = data.articles[random].title;
    image.src = data.articles[random].urlToImage;
  });
left.addEventListener('click', function () {});
