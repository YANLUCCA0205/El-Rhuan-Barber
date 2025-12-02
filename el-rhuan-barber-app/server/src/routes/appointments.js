const express = require('express');
const appointmentController = require('../controllers/appointmentController');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, appointmentController.getAppointments);
router.post('/', auth, appointmentController.createAppointment);
router.delete('/:id', auth, appointmentController.cancelAppointment);

module.exports = router;
