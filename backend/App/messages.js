const express = require('express');

const filedb = require('../filedb');

const router = express.Router();

router.post('/', (req, res) => {
  if(req.body.author && req.body.message){
    filedb.addMessage(req.body)
  }else{
    res.status(400).send(JSON.stringify({"error": "Author and message must be present in the request"}));
  }
});

router.get('/', (req, res) => {
  const messages =  filedb.getMessages();
  res.send(messages);
});

module.exports = router;