const express = require('express');
const router = express.Router();
const dataController = require('../db/controllers').dataController

// Llamado a servicios de data
router.get('/', dataController.listData);

module.exports = router;
