const express = require('express');
const donorController = require('../controllers/donorController');
const router = express.Router();

router.get('/get-all-donors', donorController.getAllDonors);
router.post('/add-donor', donorController.addDonor); 
router.delete('/delete-donor', donorController.deleteDonor); 

module.exports = router;