const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let quotes = [
  { id: 1, author: "Albert Einstein", quote: "Life is like riding a bicycle. To keep your balance you must keep moving." },
  { id: 2, author: "Isaac Newton", quote: "If I have seen further it is by standing on the shoulders of Giants." }
];

// GET /quotes
app.get('/quotes', (req, res) => {
  res.status(200).json(quotes);
});

// POST /quotes
app.post('/quotes', (req, res) => {
  const { author, quote } = req.body;

  if (!author || !quote) {
    return res.status(400).json({ message: "Both 'author' and 'quote' fields are required." });
  }

  const newQuote = {
    id: quotes.length + 1,
    author,
    quote,
  };

  quotes.push(newQuote);
  res.status(201).json(newQuote);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
