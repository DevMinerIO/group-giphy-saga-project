const { default: axios } = require('axios');
const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get(`/search/:search`, (req, res) => {
  const url = `http://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY_GIF}&rating=pg-13&q=${req.params.search}`;
  console.log('this is what is being searched!!!!',req.params);
  axios.get(url)
    .then((result) => {
      // console.log('result from category router is:', result.data);
      // res.send(result.data) is sending 1 large object with a ton of data properties, which are the searched gif. 
      res.send(result.data);
    })
    .catch((error) => {
      console.log('ERROR in category Router:', error);
    })
});

router.get('/', (req, res) => {
  // return all categories
  const queryText = `SELECT * FROM category ORDER BY name ASC`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

module.exports = router;
