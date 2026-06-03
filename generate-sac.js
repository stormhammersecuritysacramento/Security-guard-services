const fs = require('fs');

const sacMatrix = [
    {
        district: "Downtown and Midtown",
        slug: "downtown-midtown",
        zip: "95814",
        corridor: "J Street Commercial Corridor",
        street: "21st Street and K Street intersections",
        pain: "nightlife crowd loitering, commercial vandalism, and after-hours parking lot trespassing",
        solution: "visible foot sweeps, proactive entry point lockdown, and rapid dispatch trespass enforcement",
        govLink: "https://www.cityofsacramento.gov/police",
        // Auto-generates a sharp city nightlife security patrol theme
        fallbackImg: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80"
    },
    {
        district: "Arden-Arcade",
        slug: "arden-arcade",
        zip: "95825",
        corridor: "Fulton Avenue Automotive and Retail District",
        street: "Arden Way and Howe Avenue retail zones",
        pain: "overnight fleet vehicle break-ins, copper wire theft from HVAC units, and perimeter gate tampering",
        solution: "randomized vehicular patrol sweeps, high-visibility strobe presence, and fence-line integrity checks",
        govLink: "https://www.sacsheriff.com",
        // Auto-generates a high-visibility security vehicle lighting theme
        fallbackImg: "https://images.unsplash.com/photo-1615461065624-21b562ee5566?auto=format&fit=crop&w=800&q=80"
    },
    {
        district: "Natomas",
        slug: "natomas",
        zip: "95834",
        corridor: "I-5 Logistics and Office Park Corridor",
        street: "Truxel Road commercial hubs and Gateway Oaks Drive",
        pain: "distribution center cargo theft, catalytic converter siphoning in corporate lots, and midnight gate breaches",
        solution: "scheduled commercial perimeter sweeps, continuous loading dock verification, and automated vehicle logging",
        govLink: "https://www.cityofsacramento.gov",
        // Auto-generates an industrial logistics warehouse gate surveillance theme
        fallbackImg: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80"
    },
    {
        district: "South Sacramento",
        slug: "south-sacramento",
        zip: "95823",
        corridor: "Stockton Boulevard Business Corridor",
        street: "Florin Road retail centers and Mack Road commercial strips",
        pain: "retail shoplifting spikes, unauthorized property encampments, and persistent aggressive panhandling",
        solution: "dedicated property auditing, uniform presence at main storefront transitions, and immediate dynamic response",
        govLink: "https://www.sacsheriff.com",
        // Auto-generates a sharp corporate physical storefront security presence theme
        fallbackImg: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80"
    },
    {
        district: "East Sacramento and River Park",
        slug: "east-sacramento",
        zip: "95819",
        corridor: "Folsom Boulevard Commercial Strip",
        street: "J Street and H Street medical and retail blocks",
        pain: "unauthorized commercial alcove vagrancy, rear loading dock dumping, and employee safety concerns during late shifts",
        solution: "lockdown monitoring of structural access points, evening safety escorts, and systematic rear-alley clearings",
        govLink: "https://www.cityofsacramento.gov/police",
        // Auto-generates a commercial facility security monitoring theme
        fallbackImg: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80"
    },
    {
        district: "Del Paso Heights",
        slug: "del-paso-heights",
        zip: "95838",
        corridor: "Marysville Boulevard Enterprise Corridor",
        street: "Grand Avenue and Del Paso Boulevard retail corridors",
        pain: "HVAC scrap metal stripping, opportunistic smash-and-grabs, and storefront property defacement",
        solution: "highly visible standing guard presence, active perimeter tracking, and physical barrier validation loops",
        govLink: "https://www.cityofsacramento.gov",
        // Auto-generates a tactical uniform perimeter security tracking theme
        fallbackImg: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80"
    }
];

const keywords = ["Security Guard Services", "Security Patrol Services"];

sacMatrix.forEach(item => {
    keywords.forEach(kw => {
        const kwSlug = kw.toLowerCase().replace(/\s+/g, "-");
        const fileName = `sacramento-${item.slug}-${kwSlug}.html`;
        const title = `Stormhammer Security | Sacramento CA ${item.district} ${kw}`;

        const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-zinc-950 text-zinc-100 min-h-screen flex items-center justify-center p-4 antialiased">
    <div class="max-w-lg w-full bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl p-6 md:p-8 space-y-6">
        
        <!-- Premium Branding Header Without Local Image Dependencies -->
        <div class="flex flex-col items-center text-center space-y-2">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <span class="text-zinc-950 text-2xl font-black tracking-tighter">SH</span>
            </div>
            <div class="space-y-1">
                <h1 class="text-2xl font-black tracking-tight text-white uppercase">STORMHAMMER SECURITY</h1>
                <div class="inline-block bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[10px] tracking-wider uppercase px-3 py-1 rounded-full">
                    Sacramento Regional Dispatch — Zip ${item.zip}
                </div>
            </div>
        </div>
        
        <!-- Public API Image Stream Integration -->
        <div class="relative h-52 w-full bg-zinc-950 rounded-xl overflow-hidden border border-zinc-800 shadow-inner">
            <img src="${item.fallbackImg}" alt="Stormhammer Sector Enforcement Presence" class="w-full h-full object-cover object-center bg-zinc-800">
            <div class="absolute bottom-3 left-3 bg-zinc-950/80 backdrop-blur-md text-[9px] font-black text-zinc-200 px-2 py-1 rounded border border-zinc-700 uppercase tracking-wide">
                Zone: ${item.district}
            </div>
        </div>

        <!-- Copy Writing Matrix Injections -->
        <div class="space-y-4">
            <h2 class="text-lg font-extrabold tracking-tight text-white text-center">
                Proactive ${kw} Along the ${item.corridor}
            </h2>
            <p class="text-xs text-zinc-400 leading-relaxed">
                Commercial stakeholders, property administrators, and facility directors operating near <span class="text-zinc-200 font-semibold">${item.street}</span> are combatting persistent operating risks, including <span class="text-red-400 font-medium">${item.pain}</span>. Leaving your physical perimeter exposed invites costly vulnerabilities.
            </p>
            <div class="bg-zinc-950 border border-zinc-800 p-4 rounded-xl space-y-1.5">
                <span class="text-[10px] font-black uppercase text-blue-400 tracking-wider">The Stormhammer Protocol</span>
                <p class="text-xs text-zinc-300 leading-relaxed">
                    We completely shut down these vulnerabilities through structured property auditing and tactical assets, prioritizing <span class="text-white font-medium">${item.solution}</span> to maintain absolute control.
                </p>
            </div>
        </div>

        <!-- Strong Direct Calls to Action -->
        <div class="space-y-3 pt-1">
            <a href="tel:+15309029390" class="flex items-center justify-center gap-2 bg-white text-zinc-950 py-3.5 rounded-xl font-black text-xl shadow-lg hover:bg-zinc-200 transition">Call 530-902-9390</a>
            <a href="mailto:sales@stormhammersecurity.com" class="flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 text-zinc-200 py-3 rounded-xl font-bold text-xs tracking-wide transition">Request Dedicated Property Audit & Contract Quote</a>
        </div>

        <!-- Regulatory Credentials Footer -->
        <div class="border-t border-zinc-800/80 pt-4 flex flex-col sm:flex-row items-center justify-between text-[10px] text-zinc-500 gap-2 font-medium">
            <span>PPO LIC #121830</span>
            <a href="${item.govLink}" target="_blank" rel="noopener noreferrer" class="hover:text-zinc-300 underline flex items-center gap-1">
                Verify Local ${item.district} Directives ↗
            </a>
        </div>
    </div>
</body>
</html>`;

        fs.writeFileSync(fileName, html);
    });
});

console.log("Sacramento local campaigns auto-generated with premium cloud photography networks.");
