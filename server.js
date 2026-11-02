const express = require('express');
const appf = express();
const PORT = 5000;

// একটি সাধারণ গেট (GET) রুট তৈরি
appf.get('/', (req, res) => {
    res.send('অভিনন্দন! আপনার Hallow প্রথম ব্যাক-এন্ড সার্ভার সফলভাবে চালু হয়েছে।');
});

// সার্ভারটি লিসেন (Listen) করানো
appf.listen(PORT, () => {
    console.log(`সার্ভারটি চলছে: http://localhost:${PORT}`);
});
