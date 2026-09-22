const fs = require('fs');

function fixFile(file) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace broken image 1 (Food Drive event)
    content = content.replace(/1488521787991-ed7bbaae773c/g, (match, offset, full) => {
        // Only replace if it's in the Events section/array (we'll just replace the specific broken ones carefully)
        // Wait, 148852... is a VALID image (used in About/Work). The broken ones were the other two.
        return match; 
    });

    // The actual broken ones were:
    // 1524069290683-0457abfac42c (used for Education event)
    content = content.replace(/1524069290683-0457abfac42c/g, '1509062522246-3755977927d7');

    // 1576091160550-2173eca0237e (used for Health event)
    content = content.replace(/1576091160550-2173eca0237e/g, '1576091160399-112ba8d25d1d');

    fs.writeFileSync(file, content);
}

fixFile('src/Pages/Home.jsx');
fixFile('src/Pages/Events.jsx');
fixFile('src/Pages/EventDetails.jsx');

// For Food Drive event, the user specifically wanted the ORIGINAL image (1532629345422-7515f3d16bb6 - Hands with coins).
// But in my commit I changed it to 1488521787991 (Kids smiling).
// In Home.jsx, 148852... is ALSO used in About and Work. I only want to change it in the Events section.
let homeContent = fs.readFileSync('src/Pages/Home.jsx', 'utf8');
homeContent = homeContent.replace(
    /title: "Community Food Drive",\s*desc: "Join us in distributing nutritious food to families and children in need across Mumbai district.",\s*date: "15",\s*month: "Oct",/g,
    `title: "Community Food Drive",
                desc: "Join us in distributing nutritious food to families and children in need across Mumbai district.",
                date: "15",
                month: "Oct",`
);
// Actually, it's easier to just do a string replace for the whole block in Home, Events, EventDetails.
