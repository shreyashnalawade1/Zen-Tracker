const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.get('/currentUser', authController.protect, authController.current);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);
router.use(authController.protect);
router.patch('/updatePassword', authController.updatePassword);
module.exports = router;
