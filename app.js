const express = require('express');
const app = express();

// Middleware (JSON ডেটা প্রসেস করার জন্য)
app.use(express.json());

// Home Route (GET Request)
app.get('/', (req, res) => {
    res.send('স্বাগতম! এটি Express.js সার্ভার।');
});

// User Route (POST Request - ডেটা পাঠানো)
app.post('/api/user', (req, res) => {
    const userName = req.body.name;
    res.json({ message: `ব্যবহারকারী ${userName} সফলভাবে যুক্ত হয়েছেন!` });
});

app.listen(5000, () => {
    console.log('Express সার্ভার চলছে http://localhost:5000 পোর্টে');
});
