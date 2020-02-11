const express = require('express');

const messages = require('./App/messages');

const filedb = require('./filedb');

const cors = require('cors');

const port = 8080;

const app = express();

app.use(express.json());

app.use(cors());

app.use('/messages', messages);

filedb.init();

app.listen(port, () => {
  console.log("Try ", port);
});