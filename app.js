const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const ejs = require('ejs');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const date = new Date();
  const today = date.getDay();

  switch (today) {
    case 0:
      day = 'Sunday';
      break;

    case 1:
      day = 'Monday';
      break;

    case 2:
      day = 'Tuesday';
      break;

    case 3:
      day = 'Wednesday';
      break;

    case 4:
      day = 'Thursday';
      break;

    case 5:
      day = 'Friday';
      break;

    case 6:
      day = 'Saturday';
      break;

    default:
        res.send("invalid input")
      break;
  }

res.render("list" , {day: day});
});

app.listen(PORT, () => {
  console.log('Server is running.....');
});
