const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static frontend files (HTML, CSS, JS, Images)
app.use(express.static(__dirname));

// Initialize SQLite database
const dbPath = path.resolve(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        db.run('CREATE TABLE IF NOT EXISTS users ( \
            id INTEGER PRIMARY KEY AUTOINCREMENT, \
            name TEXT, \
            email TEXT UNIQUE, \
            password TEXT \
        )', (err) => {
            if (err) {
                console.error('Error creating table:', err.message);
            }
        });
    }
});

// Register Endpoint
app.post('/api/register', (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.run(query, [name, email, password], function (err) {
        if (err) {
            if (err.message.includes('UNIQUE constraint failed')) {
                return res.status(409).json({ error: 'Email already exists.' });
            }
            return res.status(500).json({ error: 'Failed to register user.' });
        }
        res.status(201).json({ message: 'User registered successfully!', id: this.lastID });
    });
});

// Login Endpoint
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required.' });
    }

    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.get(query, [email, password], (err, row) => {
        if (err) {
            return res.status(500).json({ error: 'Database error.' });
        }
        if (!row) {
            return res.status(401).json({ error: 'Invalid email or password.' });
        }
        res.status(200).json({ message: 'Login successful!', user: { id: row.id, name: row.name, email: row.email } });
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
