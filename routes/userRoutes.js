const express = require('express');
const {
  getUsers,
  getUser,
  updateUser,
  deleteUser
} = require('../controllers/userController');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').get(protect, getUsers);
router.route('/:id').get(protect, getUser).put(protect, updateUser).delete(protect, deleteUser);

module.exports = router;
