const express = require("express");
const router = express.Router();
const Admin = require("./adminController");
router.patch('/adminstatus/:id', Admin.makeRemoveAdmin)
router.post('/:userId/details',Admin.addAdminDetails)
router.patch('/:userId/details', Admin.editDetails)
router.get('/flights', Admin.getFlights)
router.get('/flights/:id', Admin.getFlight)
router.post('/flights', Admin.addFlight)
router.delete('/flights/:id',Admin.removeFlight)
router.get('/airports', Admin.getAirport)
router.post('/airports', Admin.addAirport)
router.delete('/airports/:id', Admin.removeAirport)
router.get('/:id/users', Admin.getAllAssignedUsers)


module.exports = router;
