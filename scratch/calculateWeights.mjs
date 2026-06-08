import fs from 'fs';
import path from 'path';
import { svgPathProperties } from 'svg-path-properties';

const COMPONENT_DIR = './src/components';
const PATH_GRAPHS_FILE = './src/data/pathGraphs.js';

// Get all JSX files
const files = fs.readdirSync(COMPONENT_DIR).filter(f => f.endsWith('.jsx'));

const segmentWeights = {};

// Regex patterns to match elements with IDs
const lineRegex = /<line\s+[^>]*id=["']([^"']+)["'][^>]*>/gi;
const polylineRegex = /<polyline\s+[^>]*id=["']([^"']+)["'][^>]*>/gi;
const pathRegex = /<path\s+[^>]*id=["']([^"']+)["'][^>]*>/gi;

function extractAttributes(tagStr) {
    const attrs = {};
    const attrRegex = /([a-zA-Z0-9_-]+)=["']([^"']+)["']/g;
    let match;
    while ((match = attrRegex.exec(tagStr)) !== null) {
        attrs[match[1]] = match[2];
    }
    return attrs;
}

for (const file of files) {
    const content = fs.readFileSync(path.join(COMPONENT_DIR, file), 'utf8');
    
    // Parse <line>
    let match;
    while ((match = lineRegex.exec(content)) !== null) {
        const tag = match[0];
        const id = match[1];
        const attrs = extractAttributes(tag);
        if (attrs.x1 && attrs.y1 && attrs.x2 && attrs.y2) {
            const dx = parseFloat(attrs.x2) - parseFloat(attrs.x1);
            const dy = parseFloat(attrs.y2) - parseFloat(attrs.y1);
            segmentWeights[id] = Math.sqrt(dx*dx + dy*dy);
        }
    }

    // Parse <polyline>
    while ((match = polylineRegex.exec(content)) !== null) {
        const tag = match[0];
        const id = match[1];
        const attrs = extractAttributes(tag);
        if (attrs.points) {
            const pts = attrs.points.trim().split(/[\s,]+/).filter(p => p !== '').map(parseFloat);
            let length = 0;
            for (let i = 0; i < pts.length - 2; i += 2) {
                const dx = pts[i+2] - pts[i];
                const dy = pts[i+3] - pts[i+1];
                length += Math.sqrt(dx*dx + dy*dy);
            }
            segmentWeights[id] = length;
        }
    }

    // Parse <path>
    while ((match = pathRegex.exec(content)) !== null) {
        const tag = match[0];
        const id = match[1];
        const attrs = extractAttributes(tag);
        if (attrs.d) {
            try {
                const properties = new svgPathProperties(attrs.d);
                segmentWeights[id] = properties.getTotalLength();
            } catch (e) {
                // Ignore parse errors for paths that aren't routing segments
            }
        }
    }
}

// Now we need to update pathGraphs.js
let pathGraphsContent = fs.readFileSync(PATH_GRAPHS_FILE, 'utf8');

const segmentDefRegex = /("[a-zA-Z0-9_:-]+"\s*:\s*\[\s*"[^"]+"\s*,\s*"[^"]+"\s*)(?:,\s*[\d.]+)?(\s*\])/g;

let matchCount = 0;
let updatedCount = 0;

const SCALE_MULTIPLIERS = {
    "CAMPUS": 2.35,
    "SCI": 0.247,
    "HSS": 0.356,
    "DRSCHR": 0.402,
    "BUS": 0.352,
    "ART": 0.236,
    "TH_ART": 0.236,
    "SSC": 0.325,
    "CPC": 0.3,
    "MSB": 0.25,
    "LIB": 0.3,
    "CAYTON": 0.3,
    "PA": 0.3,
    "FV": 0.3,
    "M": 0.3
};

pathGraphsContent = pathGraphsContent.replace(segmentDefRegex, (fullMatch, prefix, suffix) => {
    matchCount++;
    const keyMatch = fullMatch.match(/"([^"]+)"/);
    if (!keyMatch) return fullMatch;
    
    let key = keyMatch[1];
    
    let weight = null;
    if (segmentWeights[key]) {
        weight = segmentWeights[key];
    } else {
        const shortKey = key.split(':').pop();
        const withoutCampus = key.replace(/^CAMPUS:/, '');
        if (segmentWeights[withoutCampus]) {
            weight = segmentWeights[withoutCampus];
        } else if (segmentWeights[shortKey]) {
            weight = segmentWeights[shortKey];
        }
    }
    
    if (weight !== null) {
        updatedCount++;
        // Identify which map this segment belongs to
        const buildingPrefix = key.split(':')[0];
        const scaleFactor = SCALE_MULTIPLIERS[buildingPrefix] || 0.3; // fallback
        
        // Convert the raw SVG pixel length to precise physical feet
        const physicalFeet = weight * scaleFactor;
        
        // Round to 1 decimal place for readability
        const roundedWeight = Math.round(physicalFeet * 10) / 10;
        return `${prefix}, ${roundedWeight}${suffix}`;
    }
    
    return fullMatch;
});

fs.writeFileSync(PATH_GRAPHS_FILE, pathGraphsContent, 'utf8');

console.log(`Found ${Object.keys(segmentWeights).length} segment lengths from SVGs.`);
console.log(`Found ${matchCount} segment definitions in pathGraphs.js.`);
console.log(`Successfully updated ${updatedCount} segments with accurate weights.`);
