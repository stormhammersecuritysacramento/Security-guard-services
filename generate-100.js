const fs = require('fs');

// --- THE 100-PAGE LOCALIZED B2B MATRIX ---
const locations = [
    { city: "Citrus Heights", county: "Sacramento", landmarks: "the Sunrise Mall corridor, Greenback Lane, and Birdcage Center" },
    { city: "Roseville", county: "Placer", landmarks: "Douglas Blvd commercial zones, Westfield Galleria, and Blue Oaks business parks" },
    { city: "Antelope", county: "Sacramento", landmarks: "the Walerga Road commercial centers, Elverta Road, and local community hubs" },
    { city: "Folsom", county: "Sacramento", landmarks: "Palladio Shopping Center, East Bidwell retail plazas, and Folsom historic commercial sectors" },
    { city: "Rocklin", county: "Placer", landmarks: "Granite Drive commercial strip, Sunset Blvd logistics zones, and Sierra College corridors" },
    { city: "Lincoln", county: "Placer", landmarks: "Ferrari Ranch Road developments, Lincoln Blvd industrial sectors, and Joiner Parkway spaces" },
    { city: "Granite Bay", county: "Placer", landmarks: "Douglas Blvd luxury centers, Auburn-Folsom professional strips, and local corporate hubs" },
    { city: "Fair Oaks", county: "Sacramento", landmarks: "Madison Avenue retail complexes, Sunrise Blvd intersections, and Hazel Ave plazas" },
    { city: "Orangevale", county: "Sacramento", landmarks: "Greenback Lane storefronts, Hazel Avenue developments, and community business points" },
    { city: "North Highlands", county: "Sacramento", landmarks: "McClellan Business Park, Watt Avenue industrial corridors, and Elkhorn Blvd spaces" }
];

const industries = [
    { 
        name: "Apartment Complexes", 
        slug: "apartment",
        painPoint: "Frustrated with tenant vehicle break-ins, transient loitering in breezeways, illegal dumpster dumping, and guards who sleep on duty or skip night shifts.",
        solution: "Our field officers execute randomized, GPS-stamped foot sweeps of breezeways, parking carports, and utility areas, generating electronic Daily Activity Reports (DARs) with real-time incident tracking."
    },
    { 
        name: "Warehouses & Logistics Hubs", 
        slug: "warehouse",
        painPoint: "Exposed to cargo theft, midnight gate breaches, cut fences, vandalism, lack of cargo-bay control, and late-night guard no-shows.",
        solution: "We establish firm perimeter integrity, verify high-risk dock doors, log inbound/outbound commercial carriers, and maintain constant live dispatch connection to eliminate physical blind spots."
    },
    { 
        name: "Shopping Centers & Plazas", 
        slug: "shopping-center",
        painPoint: "Plagued by retail shoplifting, aggressive panhandling in front of anchor stores, copper wire theft from HVAC units, and slow local law enforcement response times.",
        solution: "Our proactive presence stops behavioral issues before they scale. We clear loading zones, provide safe employee escorts at closing, and maintain immediate 24/7 radio dispatch readiness."
    },
    { 
        name: "Construction Sites", 
        slug: "construction",
        painPoint: "Losing thousands of dollars to lumber theft, diesel siphoning, heavy machinery tampering, copper pipe loss, and trespassing liabilities.",
        solution: "We implement dynamic vehicular sweeps and barrier checks during high-risk off-hours, ensuring your active build site remains fully monitored and legally insulated from perimeter liabilities."
    },
    { 
        name: "Corporate Office Parks", 
        slug: "corporate-office",
        painPoint: "Facing auto window smashing in employee garages, unauthorized access to dark office wings, corporate vandalism, and zero guard reporting tracking data.",
        solution: "We lock down peripheral entrances, conduct physical check-ins at structural choke points, track accountability metrics with verifiable electronic checkpoints, and protect corporate property lines."
    }
];

const keywords = [
    "Security Guard Services",
    "Security Patrol Services"
];

const PHONE = "530-902-9390";
const PHONE_HREF = "tel:+15309029390";
const PPO = "PPO #121830";
const EMAIL = "sales@stormhammersecurity.com";

const buildPage = (loc, ind, kw) => {
    const title = `Stormhammer Security | ${loc.city} CA ${ind.name} ${kw}`;
    const desc = `Licensed California ${PPO}. Top-tier commercial ${kw.toLowerCase()} optimized for ${ind.name.toLowerCase()} properties across ${loc.city}, CA. 24/7 live dispatch.`;
    const slugKW = kw.toLowerCase().replace(/\s+/g, '-');
    const fileName = `${loc.city.toLowerCase().replace(/\s+/g, '-')}-${ind.slug}-${slugKW}.html`;

    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>${title}</title>
    <meta name="description" content="${desc}">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800;900&family=JetBrains+Mono:wght@500;700&display=swap');
        body { font-family: 'Inter', sans-serif; background-color: #050505; color: #f8fafc; margin: 0; letter-spacing: -0.01em; }
        .mono { font-family: 'JetBrains Mono', monospace; }
        .hero-viewport { min-height: 90vh; display: flex; flex-direction: column; justify-content: center; }
    </style>
</head>
<body class="bg-zinc-950">
    <div id="root"></div>
    <script type="text/babel">
        const { useEffect } = React;
        const App = () => {
            useEffect(() => { lucide.createIcons(); }, []);
            return (
                <div class="min-h-screen flex flex-col justify-between">
                    <div class="border-b border-zinc-800/60 bg-zinc-950/50 backdrop-blur px-4 py-3 sticky top-0 z-50 flex items-center justify-between">
                        <div
