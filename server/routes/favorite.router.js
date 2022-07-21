const { response } = require('express');
const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const sqlText= 'SELECT * FROM "favorites";';
  pool.query(sqlText)
  .then(response =>{
    res.send(response.rows)
    console.log( response.rows )
    // res.sendStatus(200);
  })
  
  
});

// add a new favorite
router.post('/', (req, res) => {
  
  res.sendStatus(200);
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  let sqlText;
  const id = req.params.favId;
  switch (req.body.category) {
    case 'funny':
      sqlText= 'UPDATE favorites SET category_id= 2 WHERE id = $1;';
      break
    case 'cohort':
      
      sqlText= 'UPDATE favorites SET category_id= 3 WHERE id = $1;';
      break
    case 'cartoon':
      sqlText= 'UPDATE favorites SET category_id= 4 WHERE id = $1;';
      break
    case 'nsfw':
      sqlText= 'UPDATE favorites SET category_id= 5 WHERE id = $1;';
      break
    case 'meme':
      sqlText= 'UPDATE favorites SET category_id= 6 WHERE id = $1;';
      break
    default : 
      '';
  }
  pool.query(sqlText,[id]).then((response)=>{
    res.sendStatus(200)
  }).catch((error)=>{
    console.log('error in router put', error)
  })
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
