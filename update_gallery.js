const fs = require('fs');
let content = fs.readFileSync('src/Pages/Gallery.jsx', 'utf8');
content = content.replace(/image: ".*?"/g, (match, offset) => {
    const urls = [
        '"https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=85"',
        '"https://images.unsplash.com/photo-1542810634-71277d95dc8c?auto=format&fit=crop&w=1200&q=85"',
        '"https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=85"',
        '"https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=85"',
        '"https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85"',
        '"https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=85"'
    ];
    // Keep it simple and just replace sequentially
    return `image: ${urls[Math.floor(Math.random() * urls.length)]}`;
});
fs.writeFileSync('src/Pages/Gallery.jsx', content);
