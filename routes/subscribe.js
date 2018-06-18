const express = require('express');

const router = express.Router();

router.post('/', (req, res)=>{
  const subscribe = new Subscribe({
    email: req.body.email
  });
  subscribe.save()
  .then(result =>{
    res.status(201).json({
      message: 'Subsribed successfully.'
    });
  })
  .catch(err =>{
    res.status(500).json({
      message: 'Opps! an error occured',
      error: err
    })
  })
});

module.exports = router;
