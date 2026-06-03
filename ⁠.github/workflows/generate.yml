const fs = require('fs');

const locations = [
    { city: "Citrus Heights", landmarks: "the Sunrise Mall corridor, Greenback Lane" },
    { city: "Roseville", landmarks: "Douglas Blvd commercial zones, Westfield Galleria" },
    { city: "Antelope", landmarks: "the Walerga Road commercial centers" },
    { city: "Folsom", landmarks: "Palladio Shopping Center, East Bidwell retail" },
    { city: "Rocklin", landmarks: "Granite Drive commercial strip" },
    { city: "Lincoln", landmarks: "Ferrari Ranch Road developments" },
    { city: "Granite Bay", landmarks: "Douglas Blvd luxury centers" },
    { city: "Fair Oaks", landmarks: "Madison Avenue retail complexes" },
    { city: "Orangevale", landmarks: "Greenback Lane storefronts" },
    { city: "North Highlands", landmarks: "McClellan Business Park, Watt Avenue" }
];

const industries = [
    { name: "Apartment Complexes", slug: "apartment", pain: "tenant vehicle break-ins, transient loitering", sol: "randomized, GPS-stamped foot sweeps" },
    { name: "Warehouses", slug: "warehouse", pain: "cargo theft, midnight gate breaches, cut fences", sol: "establish perimeter integrity, verify dock doors" },
    { name: "Shopping Centers", slug: "shopping-center", pain: "retail shoplifting, copper wire theft from HVACs", sol: "clear loading zones, live dispatch readiness" },
    { name: "Construction Sites", slug: "construction", pain: "lumber theft, diesel siphoning, machinery tampering", sol: "dynamic vehicular sweeps and barrier checks" },
    { name: "Corporate Offices", slug: "corporate-office", pain: "auto window smashing, corporate vandalism", sol: "lock down peripheral entrances, physical check-ins" }
];

const keywords = ["Security Guard Services", "Security Patrol Services"];

locations.forEach(loc => {
    industries.forEach(ind => {
        keywords.forEach(kw => {
            const slugKW = kw.toLowerCase().replace(/\s+/g, "-");
            const fileName = `${loc.city.toLowerCase().replace(/\s+/g, "-")}-${ind.slug}-${slugKW}.html`;
            const title = `Stormhammer Security | ${loc.city} CA ${ind.name} ${kw}`;
            
            const html = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-zinc-950 text-zinc-100 flex items-center justify-center min-h-screen p-6">
    <div class="max-w-md w-full text-center space-y-6 border border-zinc-800 bg-zinc-900/50 p-8 rounded-2xl shadow-2xl">
        <h1 class="text-3xl font-black tracking-tight uppercase text-white">STORMHAMMER SECURITY</h1>
        <div class="bg-blue-500/10 text-blue-400 font-mono text-[10px] tracking-widest uppercase py-1 px-3 rounded-full inline-block">${loc.city} Operations</div>
        <h2 class="text-xl font-bold tracking-tight text-white leading-tight">${kw} for ${ind.name}</h2>
        <div class="text-left bg-zinc-900 border border-zinc-800/80 p-4 rounded-xl space-y-2">
            <p class="text-xs text-zinc-400"><strong class="text-red-400">The Friction:</strong> Property managers face ${ind.pain}.</p>
            <p class="text-xs text-zinc-400"><strong class="text-blue-400">The Solution:</strong> We deploy targeted security near ${loc.landmarks} utilizing ${ind.sol}.</p>
        </div>
        <div class="space-y-2">
            <a href="tel:+15309029390" class="flex items-center justify-center gap-2 bg-white text-zinc-950 py-4 rounded-xl font-black text-xl shadow-lg">Call 530-902-9390</a>
            <a href="mailto:sales@stormhammersecurity.com" class="flex items-center justify-center bg-zinc-800 text-zinc-300 py-3 rounded-xl font-bold text-xs">Request Dedicated Contract Quote</a>
        </div>
        <p class="text-[9px] text-zinc-600 tracking-widest uppercase font-bold">Licensed California PPO #121830</p>
    </div>
</body>
</html>`;
            fs.writeFileSync(fileName, html);
        });
    });
});
console.log("All 100 landing pages safely built!");
