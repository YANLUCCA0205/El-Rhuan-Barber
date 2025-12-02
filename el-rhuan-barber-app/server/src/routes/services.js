const express = require('express');
const serviceController = require('../controllers/serviceController');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', serviceController.getServices);
router.post('/', auth, serviceController.createService);
router.delete('/:id', auth, serviceController.deleteService);

module.exports = router;
