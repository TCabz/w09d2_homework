const express = require("express");
const app = express();
const port = 3000;

// Greetings
app.get("/greeting", (request, response) => {
    response.send('Hello, stranger');
});

app.get("/greeting/:name", (request, response) => {
    res.send(greeting[request.params.id]);
});
///////////////////////////////////////////
// Tip Calculator
app.get("/tip/:num1/:num2", (request, response) => {
    const product = number(request.params.num1) / number(request.params.num2);
    res.send('the tip is ${product}');
});
///////////////////////////////////////////
// Magic 8 Ball
app.get('/magic/Will%20I%20Be%20A%20Millionaire', (request, response) => {
    const answer = answer(request.params.answer);
    res.send('<html>
        <body>
        <h1>${answer}</h1>
        <a href="/localhost:3000/"></a>
        </body></html>');
    }
const answer = ['/magic/Will%20I%20Be%20A%20Millionaire'];
const numberOfAnswers = answer => {
  const answer = answer.split(` `);
  const obj = {};
    for (let word of words) {
      word = word.toLowerCase();
    if (obj.hasOwnProperty(word)) {
      obj[word] += 1;
    }
    else {
      obj[word] = 1;
    }
  }
  return obj;
};