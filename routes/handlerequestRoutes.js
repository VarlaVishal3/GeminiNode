const handler = require('../controllers/handlerequest');
const express = require('express');
const router = express.Router();


router.post('/handlerequest',  handler.handleGenerateRequest);

module.exports = router;