// game.js

const express = require('express');
const router = express.Router();

// Spin Game Endpoint
router.post('/spin', async (req, res) => {
    const userId = req.body.userId;
    const betAmount = req.body.betAmount;

    // Validate input
    if (!userId || !betAmount) {
        return res.status(400).json({ message: 'User ID and bet amount are required.' });
    }

    // Logic for spinning the game
    const spinResult = Math.random() > 0.5 ? 'Win' : 'Lose';

    // Respond with the result
    return res.status(200).json({ userId, spinResult });
});

module.exports = router;