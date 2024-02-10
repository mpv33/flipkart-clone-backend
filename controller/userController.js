// controllers/userController.js
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/userSchema.js';

export const signup = async (req, res) => {
  try {
    const { email, password, firstname, lastname, phone } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword, firstname, lastname, phone });
    await newUser.save();
    res.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error: ' + error); // Concatenate error message
  }
};


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid User' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid Password' });
    }

    const token = jwt.sign({ userId: user._id }, 'secret');
    res.json({ token });

  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
export const getUserDetails = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    // Return user details excluding the password field
    const { _id, email,firstname } = user;
    res.json({ _id, email,firstname });

  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
