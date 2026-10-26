const fs = require('fs');

const p05 = fs.readFileSync('public/icons/Arrow 05.svg', 'utf8');
const p12 = fs.readFileSync('public/icons/Arrow 12.svg', 'utf8');
const p6  = fs.readFileSync('public/icons/Arrow 6.svg', 'utf8');

const extractPath = (svg) => {
  const m = svg.match(/<path d="([^"]+)"/);
  return m ? m[1] : '';
};

const d05 = extractPath(p05);
const d12 = extractPath(p12);
const d6  = extractPath(p6);

// Let's create an SVG container of size 320 x 480
// Origin point (where the 3 tails meet):
// Let origin be at (40, 240) inside our 320x480 SVG.
// For Arrow 05: tail is at (32.2335, 204.045).
// translate = (40 - 32.2335, 240 - 204.045) = (7.7665, 35.955)
// For Arrow 12: tail is at (1.77617, 25.2).
// translate = (40 - 1.77617, 240 - 25.2) = (38.2238, 214.8)
// For Arrow 6: tail is at (31.0315, 0.1704).
// translate = (40 - 31.0315, 240 - 0.1704) = (8.9685, 239.8296)

const unifiedSvg = `<svg width="320" height="480" viewBox="0 0 320 480" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(7.7665, 35.955)">
    <path d="${d05}" fill="white" fill-opacity="0.7"/>
  </g>
  <g transform="translate(38.2238, 214.8)">
    <path d="${d12}" fill="white" fill-opacity="0.7"/>
  </g>
  <g transform="translate(8.9685, 239.8296)">
    <path d="${d6}" fill="white" fill-opacity="0.7"/>
  </g>
</svg>`;

fs.writeFileSync('public/icons/arrows-cluster.svg', unifiedSvg);
console.log('Saved arrows-cluster.svg successfully!');
