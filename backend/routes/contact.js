const express = require('express');
const pool = require('../db');
const router = express.Router();

// POST request to add a contact message
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const result = await pool.query(
      'INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3) RETURNING *',
      [name, email, message]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error:', err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;

