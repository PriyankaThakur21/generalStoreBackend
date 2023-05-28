const express = require('express');
const router = express.Router();

const controllers = require('./controllers');

router.post('/postItems', controllers.postItems);
router.get('/getItems', controllers.getItems);
router.get('/delete1/:itemId', controllers.delete1);
router.get('/delete2/:itemId', controllers.delete2);
router.get('/delete3/:itemId', controllers.delete3);

module.exports = router;