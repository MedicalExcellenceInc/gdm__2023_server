
const express = require('express');
const router = express.Router();
const gdmcontroller = require('./gdm.controller');


 router.get('/get', gdmcontroller.api.getData );
 router.get('/get/recent', gdmcontroller.api.getRecentDataOne );

 router.post('/add', gdmcontroller.api.addData );
 router.post('/delete', gdmcontroller.api.deleteData );

module.exports = router;