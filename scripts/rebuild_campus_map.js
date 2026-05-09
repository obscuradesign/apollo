const fs = require('fs');
let content = fs.readFileSync('src/components/CampusMap.jsx', 'utf8');

// 1. Change export and inject b function
content = content.replace('const SvgCampusMap = (props) => (', 'export const CampusMap = ({ onBuildingClick, ...props }) => {\n  const b = (id) => ({\n    onClick: () => onBuildingClick(id),\n    style: { cursor: "pointer", transition: "opacity 0.2s" },\n    onMouseEnter: (e) => { e.currentTarget.style.opacity = 0.7; },\n    onMouseLeave: (e) => { e.currentTarget.style.opacity = 1; }\n  });\n\n  return (\n');

content = content.replace(/\);\r?\nexport default SvgCampusMap;\r?\n?/g, '  );\n};\n');

// 2. Inject {...b("ID")} into building groups/paths
const buildings = [
  'ART', 'BUS', 'GYM', 'DRSCHR', 'PA', 'CAYTON', 'LIB', 'HSS', 'TH_ART', 'SCI', 'SSC', 'MSB'
];

for (const b of buildings) {
  const regex = new RegExp('(id="' + b + '")');
  content = content.replace(regex, '\$1 {...b("' + b + '")}');
}

// 3. Hide layers instead of deleting them to prevent JSX parsing errors
const layersToHide = [
  'GYM_Text',
  '_16th_Street_Text',
  'FV_Text',
  'Future_Art_Complex_Text',
  'Facilities_Planning',
  'Foundation'
];

for (const id of layersToHide) {
  const regex = new RegExp(`(id="${id}")`);
  content = content.replace(regex, '\$1 display="none"');
}

fs.writeFileSync('src/components/CampusMap.jsx', content, 'utf8');
console.log('Regenerated CampusMap.jsx');
