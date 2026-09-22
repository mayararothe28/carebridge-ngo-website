const fs = require('fs');

function replaceIt(file, w) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(
        `title: "Community Food Drive",\n      date: "Oct 15, 2026",\n      time: "10:00 AM - 4:00 PM",\n      location: "Community Center, Mumbai",\n      desc: "Join us in distributing nutritious food to families and children in need across Mumbai district.",\n      img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=${w}&q=80",`,
        `title: "Community Food Drive",\n      date: "Oct 15, 2026",\n      time: "10:00 AM - 4:00 PM",\n      location: "Community Center, Mumbai",\n      desc: "Join us in distributing nutritious food to families and children in need across Mumbai district.",\n      img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=${w}&q=80",`
    );
    fs.writeFileSync(file, content);
}
replaceIt('src/Pages/Events.jsx', '800');

// Just replace everything in Home.jsx that is inside the events block
let homeContent = fs.readFileSync('src/Pages/Home.jsx', 'utf8');
homeContent = homeContent.replace(
    /img: "https:\/\/images.unsplash.com\/photo-1488521787991-ed7bbaae773c\?auto=format\&fit=crop\&w=800\&q=80",\s*title: "Community Food Drive"/,
    'img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",\n                title: "Community Food Drive"'
);
fs.writeFileSync('src/Pages/Home.jsx', homeContent);

let edContent = fs.readFileSync('src/Pages/EventDetails.jsx', 'utf8');
edContent = edContent.replace(
    /img: "https:\/\/images.unsplash.com\/photo-1488521787991-ed7bbaae773c\?auto=format\&fit=crop\&w=1200\&q=80",\s*title: "Community Food Drive"/,
    'img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1200&q=80",\n      title: "Community Food Drive"'
);
fs.writeFileSync('src/Pages/EventDetails.jsx', edContent);

