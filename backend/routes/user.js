const express = require('express');
const router = express.Router();

// User profile endpoint
router.get('/profile', (req, res) => {
    // Simulating user profile data
    const userProfile = {
        userId: req.user.id,
        username: req.user.username,
        email: req.user.email,
        createdAt: req.user.createdAt,
    };

    res.status(200).json(userProfile);
});

module.exports = router;