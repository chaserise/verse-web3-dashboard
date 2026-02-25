const express = require('express');
const router = express.Router();

// Mock transaction history data
const transactionHistory = [
    { id: 1, amount: 100, date: '2026-02-20', description: 'Deposit' },
    { id: 2, amount: -50, date: '2026-02-21', description: 'Withdrawal' },
    { id: 3, amount: 200, date: '2026-02-22', description: 'Deposit' },
];

// Endpoint for getting transaction history
router.get('/transactions', (req, res) => {
    res.json(transactionHistory);
});

module.exports = router;