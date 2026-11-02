const express = require('express');
const app = express();
const PORT = 5000;

// ১. কিছু ডামি প্রোডাক্ট ডাটা (Array of Objects)
const products = [
    { id: 1, name: "iPhone 16", price: 120000, category: "Mobile" },
    { id: 2, name: "MacBook Air M3", price: 145000, category: "Laptop" },
    { id: 3, name: "Apple Watch S10", price: 45000, category: "Gadget" }
];

// ২. হোম রুট (টাক্সট রেসপন্স)
app.get('/', (req, res) => {
    res.send('আমাদের এক্সপ্রেস API সার্ভারে আপনাকে স্বাগতম!');
});

// ৩. নতুন রুট: প্রোডাক্টের ডাটা পাঠানোর জন্য API
app.get('/api/products', (req, res) => {
    res.json(products); // এখানে .send() এর বদলে .json() ব্যবহার করা হয়েছে
});

app.listen(PORT, () => {
    console.log(`সার্ভারটি চলছে: http://localhost:${PORT}`);
});
