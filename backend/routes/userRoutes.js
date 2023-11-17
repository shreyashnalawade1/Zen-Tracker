const express = require('express');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

const router = express.Router();
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);
// all the following routes must be accesible to the user that are already logged in and also all them uses req.user prop to function properly
router.use(authController.protect);
router.patch('/updatePassword', authController.updatePassword);
router.get('/me', userController.getMe);
router.patch('/updateMe', userController.updateMe);
router.delete('/deleteMe', userController.deleteMe);
//  all the routes below must be restricted to the admin or specific rules

// all them made using the handle factory

router.get('/search', userController.searchUser);

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);
module.exports = router;
