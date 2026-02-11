const express = require('express');
const cors = require('cors');
const db = require('./db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const userRoutes = require('./routes/users');
const transactionRoutes = require('./routes/transactions');
const notificationRoutes = require('./routes/notifications');

app.use('/api/users', userRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/notifications', notificationRoutes);

// Serve static files from the React frontend app
const path = require('path');
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
    // Check if request is for API
    if (req.path.startsWith('/api')) {
        return res.status(404).json({ error: 'API endpoint not found' });
    }
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// Health Check Endpoint
app.get('/health', async (req, res) => {
    try {
        const result = await db.query('SELECT NOW()');
        res.json({
            status: 'ok',
            message: 'Connected to Nexum Database',
            time: result.rows[0].now
        });
    } catch (err) {
        console.error('Database connection error:', err);
        res.status(500).json({
            status: 'error',
            message: 'Database connection failed',
            error: err.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
