const express = require('express');
const router = express.Router();
const Thing = require('../models/thing');
const stuffCtrl = require('../controllers/stuff');


router.post('/', stuffCtrl.createThing);
router.put('/:id', stuffCtrl.updateThing);
router.delete('/:id', stuffCtrl.deleteThing);
  
  router.get('/:id', stuffCtrl.getOneThing);
  router.get('/', stuffCtrl.getAllThings);

    router.put('/:id', stuffCtrl.updateThing );

    module.exports = router