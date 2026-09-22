const fs = require('fs');
let content = fs.readFileSync('src/Pages/Gallery.jsx', 'utf8');
const urls = [
    '"https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=85"',
    '"https://images.unsplash.com/photo-1542810634-71277d95dc8c?auto=format&fit=crop&w=1200&q=85"',
    '"https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=85"',
    '"https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85"',
    '"https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=1200&q=85"',
    '"https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1200&q=85"'
];
let i = 0;
content = content.replace(/image: ".*?"/g, () => {
    return `image: ${urls[i++ % urls.length]}`;
});
fs.writeFileSync('src/Pages/Gallery.jsx', content);
