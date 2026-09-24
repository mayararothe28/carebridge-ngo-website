const fs = require('fs');

const validGallery = [
    {
      image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=85",
      category: "Education",
      title: "Building Brighter Futures",
    },
    {
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=85",
      category: "Volunteers",
      title: "Together We Can Make a Difference",
    },
    {
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=85",
      category: "Community",
      title: "Serving Our Community",
    },
    {
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85",
      category: "Children",
      title: "Every Child Deserves a Chance",
    },
    {
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=85",
      category: "Food Support",
      title: "Sharing Food, Sharing Hope",
    },
    {
      image: "https://images.unsplash.com/photo-1576091160550-2173eca0237e?auto=format&fit=crop&w=1200&q=85",
      category: "Healthcare",
      title: "Care For Every Community",
    },
    {
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=85",
      category: "Community",
      title: "Empowering Women",
    },
    {
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85",
      category: "Education",
      title: "Nurturing Young Minds",
    },
    {
      image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1200&q=85",
      category: "Volunteers",
      title: "Small Actions, Big Impact",
    },
    {
      image: "https://images.unsplash.com/photo-1526976668812-d9e71181518b?auto=format&fit=crop&w=1200&q=85",
      category: "Volunteers",
      title: "People Who Care",
    },
    {
      image: "https://images.unsplash.com/photo-1524813686514-c2e859c4709d?auto=format&fit=crop&w=1200&q=85",
      category: "Education",
      title: "Learning Without Limits",
    },
    {
      image: "https://images.unsplash.com/photo-1573164713619-24cb71542f53?auto=format&fit=crop&w=1200&q=85",
      category: "Healthcare",
      title: "Growing a Greener Future",
    }
];

let content = fs.readFileSync('src/Pages/Gallery.jsx', 'utf8');

// Match the galleryItems array block
const regex = /const galleryItems = \[\s*\{[\s\S]*?\}\s*\];/;
const replacement = `const galleryItems = [\n` + validGallery.map(item => `    {\n      image: "${item.image}",\n      category: "${item.category}",\n      title: "${item.title}",\n    }`).join(',\n') + `\n  ];`;

content = content.replace(regex, replacement);
fs.writeFileSync('src/Pages/Gallery.jsx', content);

