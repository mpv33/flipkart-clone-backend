// routes/userRoutes.js
import express from 'express';
import { signup, login,getUserDetails } from '../controller/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/user', authMiddleware, getUserDetails); // New route to get user details by ID

export default router;
