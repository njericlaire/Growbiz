// /routes/profileRoutes.js
const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

router.post('/profiles', profileController.createProfile);
router.get('/profiles/:id', profileController.getProfileById);
router.put('/profiles/:id', profileController.updateProfileById);

module.exports = router;
