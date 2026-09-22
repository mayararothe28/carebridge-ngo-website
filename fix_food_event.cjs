const fs = require('fs');

// Fix Events.jsx
let eventsContent = fs.readFileSync('src/Pages/Events.jsx', 'utf8');
eventsContent = eventsContent.replace(
    /img: "https:\/\/images.unsplash.com\/photo-1488521787991-ed7bbaae773c\?auto=format\&fit=crop\&w=800\&q=80",(\s*)title: "Community Food Drive"/,
    'img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",$1title: "Community Food Drive"'
);
fs.writeFileSync('src/Pages/Events.jsx', eventsContent);

// Fix Home.jsx
let homeContent = fs.readFileSync('src/Pages/Home.jsx', 'utf8');
homeContent = homeContent.replace(
    /img: "https:\/\/images.unsplash.com\/photo-1488521787991-ed7bbaae773c\?auto=format\&fit=crop\&w=800\&q=80",(\s*)title: "Community Food Drive"/,
    'img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",$1title: "Community Food Drive"'
);
fs.writeFileSync('src/Pages/Home.jsx', homeContent);

// Fix EventDetails.jsx
let edContent = fs.readFileSync('src/Pages/EventDetails.jsx', 'utf8');
edContent = edContent.replace(
    /img: "https:\/\/images.unsplash.com\/photo-1488521787991-ed7bbaae773c\?auto=format\&fit=crop\&w=1200\&q=80",(\s*)title: "Community Food Drive"/,
    'img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1200&q=80",$1title: "Community Food Drive"'
);
fs.writeFileSync('src/Pages/EventDetails.jsx', edContent);

