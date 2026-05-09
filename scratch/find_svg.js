const fs = require('fs');
const content = fs.readFileSync('src/components/CampusMap.svg', 'utf8');
console.log('Includes BUS?', content.includes('id="BUS"'));
