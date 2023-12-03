const express = require('express');
const router = express.Router();
const { User } = require('../db/models');

// POST - Add data to the users table
router.post('/insertUser', async (req, res) => {
  try {
    const newUser = await User.query().insert(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Could not add user' });
  }
});

// GET - Get all data from the users table
router.get('/getUsers', async (req, res) => {
  try {
    const users = await User.query();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve users' });
  }
});

// GET - Get specific record based on ID
router.get('/getUser/:id', async (req, res) => {
  try {
    const user = await User.query().findById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve user' });
  }
});

// DELETE - Delete specific record based on ID
router.delete('/deleteUser/:id', async (req, res) => {
  try {
    const deletedUser = await User.query().deleteById(req.params.id);
    if (deletedUser) {
      res.json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Could not delete user' });
  }
});

// PATCH - Alter specific record based on ID
router.patch('/updateUser/:id', async (req, res) => {
  try {
    const updatedUser = await User.query().findById(req.params.id).patch(req.body);
    if (updatedUser) {
      res.json({ message: 'User updated successfully' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Could not update user' });
  }
});

module.exports = router;
