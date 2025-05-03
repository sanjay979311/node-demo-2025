// routes/logoRoutes.js

const express = require('express');
const router = express.Router();
const { getLogo } = require('../controllers/logoController');

router.get('/logo', getLogo);

module.exports = router;
