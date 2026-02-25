'use strict';

const express = require('express');
const router = express.Router();

/**
 * @route   GET api/leaderboard
 * @desc    Get the leaderboard
 * @access  Public
 */
router.get('/', (req, res) => {
    // TODO: Implement actual leaderboard logic
    res.json({ message: 'Leaderboard endpoint' });
});

module.exports = router;