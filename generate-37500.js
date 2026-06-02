const fs = require('fs');
const path = require('path');

const sacramento_zipcodes = [
  '95814', '95816', '95818', '95819', '95820', '95821', '95822', '95823', '95824',
  '95825', '95826', '95827', '95828', '95829', '95831', '95832', '95833', '95834',
  '95835', '95837', '95838', '95841', '95842', '95843', '95864', '95865', '95899'
];

const neighborhoods = [
  'Downtown', 'Midtown', 'Land Park', 'Pocket', 'Curtis Park', 'Tahoe Park',
  'East Sacramento', 'Colonial Heights', 'Fruitridge', 'Oak Park', 'South Sacramento',
  'North Sacramento', 'Del Paso Heights', 'Robbie Davis', 'Meadowview', 'Florin',
  'Pangaea', 'Natomas', 'River Park', 'Northgate', 'Laguna Boulevard', 'North Natomas',
  'Folsom Boulevard Corridor', 'Fair Oaks Boulevard', 'El Camino Avenue', 'Stockton Boulevard',
  'Broadway Corridor', 'Highway 99 Corridor', 'Industrial Areas', 'Commercial Districts',
  'Residential Zones', 'Mixed-Use Areas', 'Historic Districts', 'Shopping Centers',
  'Business Parks', 'Office Corridors', 'Warehouse Districts', 'Entertainment District',
  'Arts District', 'Chinatown', 'Japantown', 'Little Ethiopia', 'South Natomas'
];

const streets_and_highways = [
  'Highway 50', 'Highway 99', 'Interstate 5', 'Interstate 80', 'Business 80',
  'J Street', 'K Street', 'L Street', 'M Street', 'N Street', 'O Street', 'P Street',
  '16th Street', '19th Street', '21st Street', '29th Street', '40th Street', '50th Street',
  'Capitol Avenue', 'Folsom Boulevard', 'Fair Oaks Boulevard', 'Stockton Boulevard',
  'Fruitridge Road', 'Franklin Boulevard', 'Pocket Road', 'Land Park Drive',
  'El Camino Avenue', 'Auburn Boulevard', 'Watt Avenue', 'Power Inn Road',
  'Florin Road', 'Bradshaw Road', 'Elk Grove Boulevard', 'Tahoe Boulevard',
  'Sunrise Boulevard', 'Madison Avenue', 'Sutter Street', 'Arden Way',
  'Marconi Avenue', 'Roseville Road', 'Elvas Avenue', 'Rio Linda Boulevard',
  'Del Paso Road', 'Bell Street', 'C Street', 'D Street', 'E Street', 'F Street',
  'G Street', 'H Street', 'I Street', 'Riverside Boulevard', 'American River Drive',
  'Munters Way', 'Landis Drive', 'Hurley Way', 'Natomas Crossing Drive',
  'Garfield Avenue', 'Sherman Way', 'Prospect Street', 'Broadway',
  'Freeport Boulevard', 'Kennedy Road', 'Mather Field Road', 'White Rock Road',
  'Grant Line Road', 'Big Horn Boulevard', 'Cosumnes River Boulevard'
];

function generateHTMLContent(zipcode, neighborhood, street) {
  const title = `Security Guard and Patrol Services Sacramento ${zipcode} ${neighborhood} ${street}`;
  const slug = `${zipcode}-${neighborhood.toLowerCase().replace(/\s+/g, '-')}-${street.toLowerCase().replace(/\s+/g, '-')}`;
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Professional Security Guard and Patrol Services in ${neighborhood}, Sacramento ${zipcode} near ${street}. 24/7 monitoring, rapid response, and custom security solutions.">
  <meta name="keywords" content="security guard services, patrol services, ${neighborhood}, Sacramento ${zipcode}, ${street}, local security, business security">
  <meta name="geo.position" content="38.5816;-121.4944">
  <meta name="geo.placename" content="Sacramento, CA ${zipcode}">
  <meta name="geo.region" content="US-CA">
  <title>${title}</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
    }
    header {
      background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
      color: white;
      padding: 60px 20px;
      text-align: center;
    }
    header h1 {
      font-size: 2.2em;
      margin-bottom: 10px;
    }
    header p {
      font-size: 1.1em;
      opacity: 0.9;
    }
    .location-badge {
      background: rgba(255, 255, 255, 0.2);
      padding: 10px 20px;
      border-radius: 20px;
      display: inline-block;
      margin-top: 10px;
      font-size: 0.9em;
    }
    nav {
      background-color: #333;
      padding: 15px 0;
      text-align: center;
      position: sticky;
      top: 0;
      z-index: 100;
    }
    nav a {
      color: white;
      text-decoration: none;
      padding: 10px 20px;
      margin: 0 10px;
      display: inline-block;
      transition: background-color 0.3s;
    }
    nav a:hover {
      background-color: #2a5298;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 20px;
    }
    section {
      margin-bottom: 40px;
    }
    section h2 {
      color: #1e3c72;
      margin-bottom: 20px;
      font-size: 1.8em;
    }
    section p {
      margin-bottom: 15px;
      text-align: justify;
      line-height: 1.8;
    }
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin: 20px 0;
    }
    .feature {
      background: #f5f5f5;
      padding: 20px;
      border-radius: 8px;
      border-left: 4px solid #2a5298;
    }
    .feature h3 {
      color: #1e3c72;
      margin-bottom: 10px;
    }
    .location-info {
      background: #e8f4f8;
      padding: 20px;
      border-radius: 8px;
      margin: 20px 0;
      border-left: 4px solid #2a5298;
    }
    .location-info h3 {
      color: #1e3c72;
      margin-bottom: 10px;
    }
    .cta-button {
      background-color: #2a5298;
      color: white;
      padding: 15px 40px;
      font-size: 1.1em;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
      text-decoration: none;
      display: inline-block;
    }
    .cta-button:hover {
      background-color: #1e3c72;
    }
    footer {
      background-color: #333;
      color: white;
      text-align: center;
      padding: 20px;
      margin-top: 40px;
    }
    footer p {
      margin: 5px 0;
      font-size: 0.9em;
    }
  </style>
</head>
<body>
  <header>
    <h1>Security Guard & Patrol Services</h1>
    <p>${neighborhood}, Sacramento ${zipcode}</p>
    <div class="location-badge">📍 ${street} Area</div>
  </header>
  
  <nav>
    <a href="index.html">Home</a>
    <a href="#services">Services</a>
    <a href="#location">Coverage Area</a>
    <a href="#contact">Contact</a>
  </nav>
  
  <div class="container">
    <section id="services">
      <h2>Our Security Services</h2>
      <p>Storm Hammer Security Sacramento provides comprehensive security guard and patrol services throughout ${neighborhood} and the ${zipcode} area. Our professional team is dedicated to protecting your property, business, and employees with the highest level of service and attention to detail.</p>
      
      <div class="features">
        <div class="feature">
          <h3>24/7 Security Patrols</h3>
          <p>Round-the-clock patrol coverage ensuring your property is always protected, day and night.</p>
        </div>
        <div class="feature">
          <h3>On-Site Security Guards</h3>
          <p>Uniformed, licensed security professionals stationed at your location for immediate response.</p>
        </div>
        <div class="feature">
          <h3>Mobile Patrol Services</h3>
          <p>Rapid response mobile units covering multiple properties throughout ${neighborhood} and surrounding areas.</p>
        </div>
        <div class="feature">
          <h3>Video Surveillance Monitoring</h3>
          <p>Professional monitoring of CCTV systems with recorded evidence for incident investigation.</p>
        </div>
        <div class="feature">
          <h3>Access Control Management</h3>
          <p>Secure entry and exit control to prevent unauthorized access to your property.</p>
        </div>
        <div class="feature">
          <h3>Incident Response</h3>
          <p>Immediate response to emergencies with trained professionals who know how to handle any situation.</p>
        </div>
      </div>
    </section>
    
    <section id="location">
      <h2>Coverage Area: ${neighborhood}, Sacramento ${zipcode}</h2>
      <div class="location-info">
        <h3>📍 Service Area Details</h3>
        <p><strong>Neighborhood:</strong> ${neighborhood}</p>
        <p><strong>Zip Code:</strong> ${zipcode}</p>
        <p><strong>Primary Corridor:</strong> ${street}</p>
        <p><strong>City:</strong> Sacramento, California</p>
      </div>
      <p>We provide dedicated security services throughout the ${neighborhood} area, with special focus on properties along ${street} and surrounding streets. Our guards are familiar with the local area, understand the specific security challenges of this neighborhood, and provide tailored solutions for your needs.</p>
      <p>Whether you're in a residential area, commercial district, warehouse, or retail location, our team has the experience and expertise to secure your property effectively. We serve businesses, property managers, and property owners throughout the ${zipcode} zip code and surrounding areas.</p>
    </section>
    
    <section>
      <h2>Why Choose Storm Hammer Security Sacramento?</h2>
      <p><strong>Local Expertise:</strong> We know the ${neighborhood} area, the local law enforcement agencies, and understand the unique security needs of this community.</p>
      <p><strong>Professional Staff:</strong> All our security guards are licensed, background-checked, trained, and insured.</p>
      <p><strong>Rapid Response:</strong> Our mobile patrol units can respond to any incident within minutes.</p>
      <p><strong>Customized Solutions:</strong> Every client gets a security plan tailored to their specific needs and budget.</p>
      <p><strong>Reliable Service:</strong> We're available 24/7/365 to protect your property and peace of mind.</p>
    </section>
    
    <section id="contact">
      <h2>Get Security Services for ${street}, ${neighborhood}</h2>
      <p>Ready to enhance your security? Contact Storm Hammer Security Sacramento today for a free consultation and custom security quote for your ${neighborhood} property near ${street}.</p>
      <button class="cta-button">Request a Free Security Consultation</button>
    </section>
  </div>
  
  <footer>
    <p>&copy; 2026 Storm Hammer Security Sacramento. All rights reserved.</p>
    <p>Professional Security Guard and Patrol Services | Sacramento ${zipcode} | ${neighborhood} | ${street}</p>
    <p>Local Security Solutions for Residential, Commercial, Industrial, and Retail Properties</p>
  </footer>
</body>
</html>`;
}

function generateAllPages() {
  let count = 0;
  const totalExpected = sacramento_zipcodes.length * neighborhoods.length * streets_and_highways.length;
  
  console.log(`\n🚀 Starting generation of ${totalExpected} hyper-local landing pages...`);
  console.log(`📊 Zipcodes: ${sacramento_zipcodes.length} | Neighborhoods: ${neighborhoods.length} | Streets: ${streets_and_highways.length}\n`);
  
  for (const zipcode of sacramento_zipcodes) {
    for (const neighborhood of neighborhoods) {
      for (const street of streets_and_highways) {
        const filename = `${zipcode}-${neighborhood.toLowerCase().replace(/\s+/g, '-')}-${street.toLowerCase().replace(/\s+/g, '-')}.html`;
        const filePath = path.join(__dirname, filename);
        const htmlContent = generateHTMLContent(zipcode, neighborhood, street);
        
        fs.writeFileSync(filePath, htmlContent, 'utf8');
        count++;
        
        // Progress indicator every 1000 files
        if (count % 1000 === 0) {
          console.log(`✅ Generated ${count}/${totalExpected} pages...`);
        }
      }
    }
  }
  
  console.log(`\n🎉 SUCCESS! Generated ${count} hyper-local landing pages.`);
  console.log(`📁 All files saved to repository root.`);
  console.log(`🌍 Coverage: ${sacramento_zipcodes.length} zipcodes × ${neighborhoods.length} neighborhoods × ${streets_and_highways.length} streets/highways`);
  console.log(`📍 All pages optimized for local Sacramento SEO with geo-targeting meta tags.`);
}

generateAllPages();
