const { response } = require('express');
const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const sqlText = 'SELECT * FROM "favorites";';
  pool.query(sqlText)
    .then(response => {
      res.send(response.rows)
      console.log(response.rows)
      // res.sendStatus(200);
    })


});

// add a new favorite
router.post('/', (req, res) => {
  console.log('THIS IS REQ>BODY', req.body);
  // req.body is the whole long object... So we created a key of url on postFavs(action) in index.jsx
  // variable url will hold the req.body with the key of url from the index.jsx that we passed through
  const url = req.body.url;
  const sqlText = 'INSERT INTO favorites (url) VALUES ($1);';
  // [url] is the $1 sanitization
  pool.query(sqlText, [url]).then((response) => {
    res.sendStatus(200)
  }).catch((error) => {
    console.log('ERROR IN POST', error);
    res.sendStatus(500)
  })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image


  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
