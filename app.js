/* ===== FACE·PROMPT GENERATOR v2.0 ===== */
/* Forensic-Grade AI Image Prompt Generator */

// ===== MAPPING DATA =====

const GENDER_MAP = { male: 'male', female: 'female', androgynous: 'androgynous' };
const GENDER_LABEL = { male: 'Pria', female: 'Wanita', androgynous: 'Androgini' };

const SKIN_TONES = [
  { id: 'fair',       label: 'Fair',       base: '#f5d6b8', shadow: '#d4a574', light: '#ffe8d6', deep: '#b8805a', hex: '#f5d6b8' },
  { id: 'light',      label: 'Light',      base: '#e8c49a', shadow: '#c49a6a', light: '#f5dcc0', deep: '#a07848', hex: '#e8c49a' },
  { id: 'medium',     label: 'Medium',     base: '#c8956a', shadow: '#9a6040', light: '#e8b888', deep: '#7a4020', hex: '#c8956a' },
  { id: 'olive',      label: 'Olive',      base: '#b8885a', shadow: '#8a6038', light: '#d4a878', deep: '#6a4020', hex: '#b8885a' },
  { id: 'tan',        label: 'Tan',        base: '#a07040', shadow: '#784828', light: '#c09060', deep: '#583018', hex: '#a07040' },
  { id: 'brown',      label: 'Brown',      base: '#8a5830', shadow: '#603818', light: '#a87848', deep: '#482010', hex: '#8a5830' },
  { id: 'dark',       label: 'Dark',       base: '#6a4020', shadow: '#482810', light: '#8a6038', deep: '#301808', hex: '#6a4020' },
  { id: 'deep-dark',  label: 'Deep Dark',  base: '#4a2810', shadow: '#301808', light: '#6a4020', deep: '#200800', hex: '#4a2810' },
];

const FACE_SHAPE_PRESETS = [
  { id: 'oval',       label: 'Oval',       fw: 45, jaw: 35 },
  { id: 'round',      label: 'Round',      fw: 65, jaw: 20 },
  { id: 'square',     label: 'Square',     fw: 60, jaw: 75 },
  { id: 'heart',      label: 'Heart',      fw: 40, jaw: 30 },
  { id: 'oblong',     label: 'Oblong',     fw: 35, jaw: 45 },
  { id: 'diamond',    label: 'Diamond',    fw: 42, jaw: 70 },
  { id: 'triangular', label: 'Triangular', fw: 55, jaw: 80 },
  { id: 'custom',     label: 'Custom',     fw: 50, jaw: 50 },
];

const EYESHAPE_OPTIONS = [
  { value: 'round',          label: 'Bulat' },
  { value: 'almond-shaped',  label: 'Almond' },
  { value: 'narrow',         label: 'Sipit' },
  { value: 'hooded',         label: 'Hooded' },
  { value: 'monolid',        label: 'Monolid' },
  { value: 'upturned',       label: 'Upturned' },
  { value: 'downturned',     label: 'Downturned' },
  { value: 'deep-set',       label: 'Deep-set' },
  { value: 'wide-set',       label: 'Wide-set' },
  { value: 'close-set',      label: 'Close-set' },
];

const EYECOLOR_OPTIONS = [
  { value: 'brown',          label: 'Coklat' },
  { value: 'dark brown',     label: 'Coklat Tua' },
  { value: 'amber',          label: 'Amber' },
  { value: 'blue',           label: 'Biru' },
  { value: 'light blue',     label: 'Biru Muda' },
  { value: 'green',          label: 'Hijau' },
  { value: 'gray',           label: 'Abu-abu' },
  { value: 'hazel',          label: 'Hazel' },
  { value: 'black',          label: 'Hitam' },
  { value: 'heterochromia',  label: 'Heterochromia' },
];

const HAIRSTYLE_OPTIONS = [
  { value: 'short hair',              label: 'Pendek' },
  { value: 'very short buzz cut',     label: 'Sangat Pendek' },
  { value: 'medium-length hair',      label: 'Sedang' },
  { value: 'shoulder-length hair',    label: 'Sebahu' },
  { value: 'long flowing hair',       label: 'Panjang' },
  { value: 'very long hair',          label: 'Sangat Panjang' },
  { value: 'pixie cut',               label: 'Pixie Cut' },
  { value: 'bob cut',                 label: 'Bob Cut' },
  { value: 'curly hair',              label: 'Keriting' },
  { value: 'wavy hair',               label: 'Bergelombang' },
  { value: 'afro',                    label: 'Afro' },
  { value: 'dreadlocks',              label: 'Dreadlocks' },
  { value: 'braided hair',            label: 'Kepang' },
  { value: 'ponytail',                label: 'Kuncir Kuda' },
  { value: 'bun',                     label: 'Sanggul' },
  { value: 'side-parted hair',        label: 'Belah Samping' },
  { value: 'slicked-back hair',       label: 'Slicked Back' },
  { value: 'mohawk',                  label: 'Mohawk' },
  { value: 'undercut',                label: 'Undercut' },
  { value: 'bald',                    label: 'Botak' },
  { value: 'shaved sides',            label: 'Shaved Sides' },
  { value: 'man bun',                 label: 'Man Bun' },
];

const HAIRCOLOR_OPTIONS = [
  { value: 'black',         label: 'Hitam' },
  { value: 'dark brown',    label: 'Coklat Tua' },
  { value: 'medium brown',  label: 'Coklat Sedang' },
  { value: 'light brown',   label: 'Coklat Muda' },
  { value: 'auburn',        label: 'Auburn' },
  { value: 'red',           label: 'Merah' },
  { value: 'strawberry blonde', label: 'Strawberry Blonde' },
  { value: 'blonde',        label: 'Pirang' },
  { value: 'platinum blonde', label: 'Platinum' },
  { value: 'white silver',  label: 'Putih/Perak' },
  { value: 'gray',          label: 'Abu-abu' },
  { value: 'blue',          label: 'Biru' },
  { value: 'pink',          label: 'Pink' },
  { value: 'purple',        label: 'Ungu' },
  { value: 'green',         label: 'Hijau' },
  { value: 'ombre',         label: 'Ombre' },
  { value: 'highlights',    label: 'Highlights' },
];

const FACIAL_HAIR_OPTIONS = [
  { value: 'none',              label: 'Tidak Ada' },
  { value: 'stubble',           label: 'Stubble' },
  { value: 'short beard',       label: 'Jenggot Pendek' },
  { value: 'full beard',        label: 'Jenggot Penuh' },
  { value: 'long beard',        label: 'Jenggot Panjang' },
  { value: 'goatee',            label: 'Goatee' },
  { value: 'mustache',          label: 'Kumis' },
  { value: 'handlebar mustache', label: 'Kumis Handlebar' },
  { value: 'van dyke beard',    label: 'Van Dyke' },
  { value: 'chin strap beard',  label: 'Chin Strap' },
  { value: 'mutton chops',      label: 'Mutton Chops' },
];

const EXPRESSION_OPTIONS = [
  { value: 'neutral expression',    label: 'Netral' },
  { value: 'slight smile',          label: 'Senyum Tipis' },
  { value: 'broad smile',           label: 'Senyum Lebar' },
  { value: 'serious expression',    label: 'Serius' },
  { value: 'stern look',            label: 'Tegas' },
  { value: 'contemplative look',    label: 'Berpikir' },
  { value: 'melancholic expression', label: 'Melankolis' },
  { value: 'confident smirk',       label: 'Smug' },
  { value: 'surprised expression',  label: 'Terkejut' },
  { value: 'angry expression',      label: 'Marah' },
  { value: 'fearful expression',    label: 'Takut' },
  { value: 'disgusted look',        label: 'Jijik' },
  { value: 'playful expression',    label: 'Main-main' },
  { value: 'mysterious smile',      label: 'Misterius' },
];

const ACCESSORIES_OPTIONS = [
  { value: 'none',                label: 'Tidak Ada' },
  { value: 'round glasses',       label: 'Kacamata Bulat' },
  { value: 'rectangular glasses', label: 'Kacamata Kotak' },
  { value: 'aviator sunglasses',  label: 'Aviator' },
  { value: 'wayfarer sunglasses', label: 'Wayfarer' },
  { value: 'reading glasses',     label: 'Kacamata Baca' },
  { value: 'rimless glasses',     label: 'Rimless' },
  { value: 'earrings',            label: 'Anting' },
  { value: 'nose ring',           label: 'Cincin Hidung' },
  { value: 'lip ring',            label: 'Cincin Bibir' },
  { value: 'eyebrow piercing',    label: 'Piercing Alis' },
  { value: 'headband',            label: 'Headband' },
  { value: 'beanie hat',          label: 'Beanie' },
  { value: 'baseball cap',        label: 'Topi Baseball' },
  { value: 'fedora hat',          label: 'Fedora' },
];

const LIGHTING_OPTIONS = [
  { value: 'studio lighting with soft key light',    label: 'Studio Soft' },
  { value: 'dramatic Rembrandt lighting',            label: 'Rembrandt' },
  { value: 'butterfly lighting',                     label: 'Butterfly' },
  { value: 'split lighting',                         label: 'Split' },
  { value: 'rim lighting with dark background',      label: 'Rim Light' },
  { value: 'natural window light',                   label: 'Window Light' },
  { value: 'golden hour warm sunlight',              label: 'Golden Hour' },
  { value: 'overcast soft diffused light',           label: 'Overcast' },
  { value: 'harsh directional light with deep shadows', label: 'Harsh' },
  { value: 'neon colored lighting',                  label: 'Neon' },
  { value: 'candlelight warm glow',                  label: 'Candlelight' },
  { value: 'moonlight cool tones',                   label: 'Moonlight' },
  { value: 'high-key lighting minimal shadows',      label: 'High-key' },
  { value: 'low-key chiaroscuro lighting',           label: 'Chiaroscuro' },
  { value: 'backlit silhouette edge light',          label: 'Backlit' },
];

const CAMERA_ANGLE_OPTIONS = [
  { value: 'straight-on eye-level shot',      label: 'Eye Level' },
  { value: 'slightly elevated angle',         label: 'Slight High' },
  { value: 'low angle looking up',            label: 'Low Angle' },
  { value: 'bird\'s eye view from above',     label: 'Bird\'s Eye' },
  { value: 'three-quarter view',              label: '3/4 View' },
  { value: 'profile side view',               label: 'Profile' },
  { value: 'close-up face shot',              label: 'Close-up' },
  { value: 'medium shot from chest up',       label: 'Medium Shot' },
  { value: 'Dutch angle tilted',              label: 'Dutch Angle' },
  { value: 'over-the-shoulder perspective',   label: 'OTS' },
];

const BACKGROUND_OPTIONS = [
  { value: 'plain dark background',                label: 'Dark Plain' },
  { value: 'plain white studio background',        label: 'White Studio' },
  { value: 'gradient gray background',             label: 'Gray Gradient' },
  { value: 'blurred urban city background',        label: 'Urban Blur' },
  { value: 'blurred nature forest background',     label: 'Forest Blur' },
  { value: 'abstract bokeh lights background',     label: 'Bokeh' },
  { value: 'textured concrete wall background',    label: 'Concrete' },
  { value: 'vintage sepia toned background',       label: 'Vintage' },
  { value: 'dark moody atmospheric background',    label: 'Moody Dark' },
  { value: 'colorful gradient background',         label: 'Colorful' },
];

const IMAGE_STYLE_OPTIONS = [
  { value: 'photorealistic, hyperrealistic photography',    label: 'Hyperrealistic' },
  { value: 'professional studio portrait photography',      label: 'Studio Portrait' },
  { value: 'editorial fashion photography',                 label: 'Editorial' },
  { value: 'cinematic film still',                          label: 'Cinematic' },
  { value: 'documentary style candid photography',          label: 'Documentary' },
  { value: 'fine art portrait painting',                    label: 'Fine Art' },
  { value: 'oil painting classical style',                  label: 'Oil Painting' },
  { value: 'watercolor soft artistic style',                label: 'Watercolor' },
  { value: 'pencil sketch detailed drawing',                label: 'Pencil Sketch' },
  { value: 'charcoal drawing dramatic style',               label: 'Charcoal' },
  { value: 'digital art concept art style',                 label: 'Concept Art' },
  { value: 'anime cel-shaded style',                        label: 'Anime' },
  { value: 'comic book illustration style',                 label: 'Comic Book' },
  { value: 'pop art bold colors style',                     label: 'Pop Art' },
  { value: 'noir black and white photography',              label: 'Noir B&W' },
  { value: 'retro 1970s film grain photography',            label: 'Retro 70s' },
  { value: 'cyberpunk neon-lit futuristic style',           label: 'Cyberpunk' },
  { value: 'fantasy ethereal glowing style',                label: 'Fantasy' },
];

const CAMERA_OPTIONS = [
  { value: '85mm f/1.4 prime lens, shallow depth of field',  label: '85mm f/1.4' },
  { value: '50mm f/1.8 standard lens, natural perspective',  label: '50mm f/1.8' },
  { value: '135mm f/2 telephoto lens, compressed bokeh',     label: '135mm f/2' },
  { value: '35mm f/1.4 wide-angle lens, environmental shot', label: '35mm f/1.4' },
  { value: '105mm f/2.8 macro lens, extreme detail',         label: '105mm Macro' },
  { value: '24-70mm f/2.8 zoom lens, versatile framing',     label: '24-70mm' },
  { value: 'Hasselblad medium format, studio quality',       label: 'Hasselblad' },
  { value: 'Leica M rangefinder, classic rendering',         label: 'Leica M' },
  { value: 'large format 4x5 film camera, ultra detail',     label: '4x5 Film' },
];

const QUALITY_PRESETS = [
  { value: 'standard',   label: 'Standard',   tags: 'highly detailed, sharp focus' },
  { value: 'high',       label: 'High',       tags: 'highly detailed, sharp focus, 4k resolution, professional quality' },
  { value: 'ultra',      label: 'Ultra',      tags: 'extremely detailed, tack sharp focus, 8k ultra-high resolution, masterpiece quality, award-winning photography' },
  { value: 'maximum',    label: 'Maximum',    tags: 'extremely detailed skin pores and texture, tack sharp focus, 8k ultra-high resolution, masterpiece quality, award-winning photography, hyper-detailed, cinematic color grading, professional retouching, magazine cover quality' },
];

// Hair color definitions for canvas
const HAIR_COLORS = {
  'black':            { base: '#1a1008', mid: '#2d1f0e', hi: '#3d2b14' },
  'dark brown':       { base: '#3b1f0a', mid: '#5c3212', hi: '#7a4520' },
  'medium brown':     { base: '#5a3818', mid: '#7a5028', hi: '#9a6838' },
  'light brown':      { base: '#7a5828', mid: '#9a7838', hi: '#b89848' },
  'auburn':           { base: '#6a2810', mid: '#8a4020', hi: '#a85830' },
  'red':              { base: '#7a1f0a', mid: '#a03010', hi: '#c04020' },
  'strawberry blonde': { base: '#9a6828', mid: '#b88838', hi: '#d4a848' },
  'blonde':           { base: '#8a6820', mid: '#b8901e', hi: '#d4ad4a' },
  'platinum blonde':  { base: '#c8b878', mid: '#d8c898', hi: '#e8d8b0' },
  'white silver':     { base: '#888888', mid: '#b0b0b0', hi: '#d8d8d8' },
  'gray':             { base: '#606060', mid: '#808080', hi: '#a0a0a0' },
  'blue':             { base: '#1a2a5a', mid: '#2a4080', hi: '#3a58a0' },
  'pink':             { base: '#8a2040', mid: '#b03060', hi: '#d04080' },
  'purple':           { base: '#4a1a6a', mid: '#6a2890', hi: '#8a38b0' },
  'green':            { base: '#1a4a20', mid: '#2a6830', hi: '#3a8840' },
  'ombre':            { base: '#3b1f0a', mid: '#b8901e', hi: '#d4ad4a' },
  'highlights':       { base: '#2d1f0e', mid: '#7a4520', hi: '#d4ad4a' },
};

const EYE_IRIS_COLORS = {
  'brown':          { iris: '#6b3a1f', pupil: '#2a1008', hi: '#a05830' },
  'dark brown':     { iris: '#4a2810', pupil: '#1a0804', hi: '#7a4020' },
  'amber':          { iris: '#b88a30', pupil: '#6a4810', hi: '#d8aa40' },
  'blue':           { iris: '#2e6ca0', pupil: '#102840', hi: '#5090c8' },
  'light blue':     { iris: '#4a90d0', pupil: '#204870', hi: '#70b0e8' },
  'green':          { iris: '#3a6e30', pupil: '#182810', hi: '#5a9848' },
  'gray':           { iris: '#607080', pupil: '#283038', hi: '#8090a0' },
  'hazel':          { iris: '#6b5020', pupil: '#281e08', hi: '#9a7838' },
  'black':          { iris: '#1a1008', pupil: '#080404', hi: '#3a2818' },
  'heterochromia':  { iris: '#2e6ca0', pupil: '#2a1008', hi: '#5090c8' },
};

// ===== UTILITY FUNCTIONS =====

function lerp(a, b, t) { return a + (b - a) * t; }
function t01(val) { return val / 100; }
function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

function sliderLabel(val, low, mid, high) {
  if (val < 28) return low;
  if (val < 72) return mid;
  return high;
}

function sliderPrompt(val, terms) {
  const idx = Math.round((val / 100) * (terms.length - 1));
  return terms[idx];
}

function lerpColor(c1, c2, t) {
  const r1 = parseInt(c1.slice(1,3),16), g1 = parseInt(c1.slice(3,5),16), b1 = parseInt(c1.slice(5,7),16);
  const r2 = parseInt(c2.slice(1,3),16), g2 = parseInt(c2.slice(3,5),16), b2 = parseInt(c2.slice(5,7),16);
  const r = Math.round(lerp(r1,r2,t)), g = Math.round(lerp(g1,g2,t)), b = Math.round(lerp(b1,b2,t));
  return '#' + [r,g,b].map(v => v.toString(16).padStart(2,'0')).join('');
}

// ===== PRESETS =====

const PRESETS = {
  'young-asian-female': {
    gender: 'female', age: 22, skinTone: 'fair', faceShape: 'oval',
    facewidth: 40, jaw: 30, eyeshape: 'almond-shaped', eyecolor: 'dark brown',
    eyedist: 50, nose: 35, lips: 55, hairstyle: 'long flowing hair',
    haircolor: 'black', facialhair: 'none', expression: 'slight smile',
    accessories: 'none', lighting: 'natural window light',
    cameraAngle: 'three-quarter view', background: 'blurred nature forest background',
    imageStyle: 'professional studio portrait photography', camera: '85mm f/1.4 prime lens, shallow depth of field',
    quality: 'ultra'
  },
  'mature-european-male': {
    gender: 'male', age: 45, skinTone: 'light', faceShape: 'square',
    facewidth: 55, jaw: 70, eyeshape: 'deep-set', eyecolor: 'gray',
    eyedist: 50, nose: 60, lips: 40, hairstyle: 'short hair',
    haircolor: 'gray', facialhair: 'short beard', expression: 'serious expression',
    accessories: 'none', lighting: 'dramatic Rembrandt lighting',
    cameraAngle: 'straight-on eye-level shot', background: 'plain dark background',
    imageStyle: 'noir black and white photography', camera: '105mm f/2.8 macro lens, extreme detail',
    quality: 'ultra'
  },
  'african-male-portrait': {
    gender: 'male', age: 30, skinTone: 'dark', faceShape: 'oval',
    facewidth: 48, jaw: 55, eyeshape: 'round', eyecolor: 'dark brown',
    eyedist: 50, nose: 55, lips: 60, hairstyle: 'fade cut',
    haircolor: 'black', facialhair: 'stubble', expression: 'confident smirk',
    accessories: 'none', lighting: 'golden hour warm sunlight',
    cameraAngle: 'three-quarter view', background: 'abstract bokeh lights background',
    imageStyle: 'editorial fashion photography', camera: '85mm f/1.4 prime lens, shallow depth of field',
    quality: 'ultra'
  },
  'elderly-asian-female': {
    gender: 'female', age: 65, skinTone: 'fair', faceShape: 'round',
    facewidth: 50, jaw: 25, eyeshape: 'narrow', eyecolor: 'dark brown',
    eyedist: 50, nose: 40, lips: 45, hairstyle: 'bun',
    haircolor: 'white silver', facialhair: 'none', expression: 'warm gentle smile',
    accessories: 'reading glasses', lighting: 'soft diffused natural light',
    cameraAngle: 'straight-on eye-level shot', background: 'gradient gray background',
    imageStyle: 'fine art portrait painting', camera: '105mm f/2.8 macro lens, extreme detail',
    quality: 'ultra'
  },
  'punk-young-male': {
    gender: 'male', age: 20, skinTone: 'fair', faceShape: 'diamond',
    facewidth: 42, jaw: 65, eyeshape: 'narrow', eyecolor: 'green',
    eyedist: 45, nose: 45, lips: 35, hairstyle: 'mohawk',
    haircolor: 'blue', facialhair: 'stubble', expression: 'defiant look',
    accessories: 'eyebrow piercing', lighting: 'neon colored lighting',
    cameraAngle: 'Dutch angle tilted', background: 'dark moody atmospheric background',
    imageStyle: 'cyberpunk neon-lit futuristic style', camera: '35mm f/1.4 wide-angle lens, environmental shot',
    quality: 'ultra'
  }
};

// ===== STATE =====
let currentPreset = null;
let promptFormat = 'paragraph'; // paragraph | tags | comma | json

// ===== MAIN UPDATE =====
function update() {
  const gender = document.getElementById('gender').value;
  const age = +document.getElementById('age').value;
  const skinTone = document.getElementById('skin-tone-select')?.value || 'medium';
  const faceShape = document.getElementById('face-shape')?.value || 'custom';
  const facewidth = +document.getElementById('facewidth').value;
  const jaw = +document.getElementById('jaw').value;
  const eyeshape = document.getElementById('eyeshape').value;
  const eyecolor = document.getElementById('eyecolor').value;
  const eyedist = +document.getElementById('eyedist').value;
  const nose = +document.getElementById('nose').value;
  const lips = +document.getElementById('lips').value;
  const hairstyle = document.getElementById('hairstyle').value;
  const haircolor = document.getElementById('haircolor').value;
  const facialhair = document.getElementById('facialhair')?.value || 'none';
  const expression = document.getElementById('expression')?.value || 'neutral expression';
  const accessories = document.getElementById('accessories')?.value || 'none';
  const lighting = document.getElementById('lighting')?.value || 'dramatic lighting';
  const cameraAngle = document.getElementById('camera-angle')?.value || 'straight-on eye-level shot';
  const background = document.getElementById('background')?.value || 'plain dark background';
  const imageStyle = document.getElementById('image-style')?.value || 'photorealistic, hyperrealistic photography';
  const camera = document.getElementById('camera')?.value || '85mm f/1.4 prime lens, shallow depth of field';
  const quality = document.getElementById('quality')?.value || 'ultra';

  // Update display labels
  document.getElementById('val-gender').textContent = GENDER_LABEL[gender];
  document.getElementById('val-age').textContent = age + ' tahun';
  document.getElementById('val-facewidth').textContent = sliderLabel(facewidth, 'Sempit', 'Sedang', 'Lebar');
  document.getElementById('val-jaw').textContent = sliderLabel(jaw, 'Lembut', 'Sedang', 'Tajam');
  document.getElementById('val-eyedist').textContent = sliderLabel(eyedist, 'Dekat', 'Sedang', 'Jauh');
  document.getElementById('val-nose').textContent = sliderLabel(nose, 'Kecil', 'Sedang', 'Besar');
  document.getElementById('val-lips').textContent = sliderLabel(lips, 'Tipis', 'Sedang', 'Tebal');

  // Skin tone button highlight
  document.querySelectorAll('.skin-tone-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tone === skinTone);
  });

  // Face shape button highlight
  document.querySelectorAll('.face-shape-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.shape === faceShape);
  });

  // Build forensic-grade prompt
  const prompt = buildForensicPrompt({
    gender, age, skinTone, faceShape, facewidth, jaw,
    eyeshape, eyecolor, eyedist, nose, lips,
    hairstyle, haircolor, facialhair, expression,
    accessories, lighting, cameraAngle, background,
    imageStyle, camera, quality
  });

  // Format output
  const formatted = formatPrompt(prompt, promptFormat);
  document.getElementById('prompt-output').value = formatted;

  // Word / char count
  const words = formatted.split(/\s+/).filter(Boolean).length;
  document.getElementById('word-count').textContent = words + ' WORDS · ' + formatted.length + ' CHARS';
  document.getElementById('char-count-badge').textContent = formatted.length + ' chars';

  // Tags
  buildTags(prompt.tags);

  // Update face canvas preview
  drawFace({
    gender, age, skinTone,
    facewidth, jaw, eyeshape, eyecolor, eyedist,
    nose, lips, hairstyle, haircolor, facialhair, expression
  });
}

function buildForensicPrompt(p) {
  const genderStr = p.gender === 'male' ? 'male' : p.gender === 'female' ? 'female' : 'androgynous person';
  const ageStr = p.age + '-year-old ' + genderStr;

  // Skin tone description
  const skinDesc = {
    'fair': 'fair porcelain skin', 'light': 'light-toned skin', 'medium': 'medium-toned skin',
    'olive': 'olive complexion', 'tan': 'tan warm skin', 'brown': 'brown skin',
    'dark': 'dark brown skin', 'deep-dark': 'deep dark skin'
  }[p.skinTone] || 'natural skin';

  // Face shape description
  const faceShapeDesc = {
    'oval': 'oval-shaped face', 'round': 'round face shape', 'square': 'square jawline face',
    'heart': 'heart-shaped face', 'oblong': 'oblong face shape', 'diamond': 'diamond face shape',
    'triangular': 'triangular face shape', 'custom': sliderPrompt(p.facewidth, ['narrow face', 'slightly narrow face', 'average face width', 'slightly wide face', 'wide face'])
  }[p.faceShape] || sliderPrompt(p.facewidth, ['narrow face', 'slightly narrow face', 'average face width', 'slightly wide face', 'wide face']);

  const jawStr = sliderPrompt(p.jaw, ['very soft rounded jawline', 'soft rounded jawline', 'defined jawline', 'sharp angular jawline', 'very sharp angular jawline']);
  const eyedistStr = sliderPrompt(p.eyedist, ['close-set eyes', 'slightly close-set eyes', 'normal eye spacing', 'slightly wide-set eyes', 'wide-set eyes']);
  const noseStr = sliderPrompt(p.nose, ['small delicate button nose', 'small refined nose', 'medium-proportioned nose', 'prominent aquiline nose', 'large broad nose']);
  const lipsStr = sliderPrompt(p.lips, ['very thin pursed lips', 'thin defined lips', 'medium-proportioned lips', 'full plump lips', 'very full thick lips']);

  // Eye description
  const eyeColorDesc = {
    'brown': 'warm brown eyes', 'dark brown': 'deep dark brown eyes', 'amber': 'golden amber eyes',
    'blue': 'piercing blue eyes', 'light blue': 'ice-blue eyes', 'green': 'vivid green eyes',
    'gray': 'steel gray eyes', 'hazel': 'hazel-brown eyes', 'black': 'deep black eyes',
    'heterochromia': 'heterochromatic eyes (one blue, one brown)'
  }[p.eyecolor] || 'eyes';

  const eyeShapeDesc = {
    'round': 'round', 'almond-shaped': 'almond-shaped', 'narrow': 'narrow',
    'hooded': 'hooded', 'monolid': 'monolid', 'upturned': 'upturned',
    'downturned': 'downturned', 'deep-set': 'deep-set', 'wide-set': 'wide-set', 'close-set': 'close-set'
  }[p.eyeshape] || '';

  // Hair description
  const hairColorDesc = {
    'black': 'jet black', 'dark brown': 'dark brown', 'medium brown': 'medium brown',
    'light brown': 'light brown', 'auburn': 'auburn red-brown', 'red': 'fiery red',
    'strawberry blonde': 'strawberry blonde', 'blonde': 'golden blonde',
    'platinum blonde': 'platinum blonde', 'white silver': 'silver-white',
    'gray': 'salt-and-pepper gray', 'blue': 'dyed blue', 'pink': 'dyed pink',
    'purple': 'dyed purple', 'green': 'dyed green', 'ombre': 'ombre gradient',
    'highlights': 'with highlights'
  }[p.haircolor] || '';

  const hairstyleDesc = {
    'short hair': 'short cropped', 'very short buzz cut': 'buzz-cut', 'medium-length hair': 'medium-length',
    'shoulder-length hair': 'shoulder-length', 'long flowing hair': 'long flowing',
    'very long hair': 'very long', 'pixie cut': 'pixie-cut', 'bob cut': 'bob-cut',
    'curly hair': 'curly', 'wavy hair': 'wavy', 'afro': 'afro', 'dreadlocks': 'dreadlocked',
    'braided hair': 'braided', 'ponytail': 'ponytail', 'bun': 'bun',
    'side-parted hair': 'side-parted', 'slicked-back hair': 'slicked-back',
    'mohawk': 'mohawk', 'undercut': 'undercut', 'bald': 'bald/shaved',
    'shaved sides': 'shaved sides', 'man bun': 'man bun'
  }[p.hairstyle] || '';

  // Facial hair
  const facialHairDesc = {
    'none': '', 'stubble': 'with light stubble', 'short beard': 'with a short groomed beard',
    'full beard': 'with a full thick beard', 'long beard': 'with a long flowing beard',
    'goatee': 'with a goatee', 'mustache': 'with a mustache',
    'handlebar mustache': 'with a handlebar mustache', 'van dyke beard': 'with a Van Dyke beard',
    'chin strap beard': 'with a chin strap beard', 'mutton chops': 'with mutton chops'
  }[p.facialhair] || '';

  // Expression
  const expressionDesc = p.expression || 'neutral expression';

  // Accessories
  const accessoryDesc = p.accessories === 'none' ? '' : 'wearing ' + p.accessories;

  // Build parts array
  const parts = [];
  parts.push(`A portrait of a ${ageStr}`);
  parts.push(skinDesc);
  parts.push(faceShapeDesc + ' with ' + jawStr);

  // Eyes - combine shape, color, spacing
  parts.push(`${eyeShapeDesc} ${eyeColorDesc}, ${eyedistStr}`);

  parts.push(noseStr);
  parts.push(lipsStr);

  // Hair
  if (p.hairstyle !== 'bald') {
    parts.push(`${hairColorDesc} ${hairstyleDesc} hair`);
  } else {
    parts.push('bald/shaved head');
  }

  // Facial hair
  if (facialHairDesc) parts.push(facialHairDesc);

  // Expression
  parts.push(expressionDesc);

  // Accessories
  if (accessoryDesc) parts.push(accessoryDesc);

  // Technical
  parts.push(p.lighting);
  parts.push(p.cameraAngle);
  parts.push(p.background);
  parts.push(p.camera);
  parts.push(p.imageStyle);

  // Quality tags
  const qPreset = QUALITY_PRESETS.find(q => q.value === p.quality) || QUALITY_PRESETS[2];
  parts.push(qPreset.tags);

  const paragraph = 'A portrait of a ' + parts.slice(1).join(', ') + '.';

  // Build tags
  const tags = [
    { text: ageStr, cls: 'tag-blue' },
    { text: skinDesc, cls: 'tag-yellow' },
    { text: faceShapeDesc, cls: 'tag-purple' },
    { text: jawStr, cls: 'tag-purple' },
    { text: eyeShapeDesc + ' ' + eyeColorDesc, cls: 'tag-blue' },
    { text: eyedistStr, cls: 'tag-blue' },
    { text: noseStr, cls: 'tag-orange' },
    { text: lipsStr, cls: 'tag-orange' },
  ];
  if (p.hairstyle !== 'bald') {
    tags.push({ text: hairColorDesc + ' ' + hairstyleDesc, cls: 'tag-green' });
  } else {
    tags.push({ text: 'bald', cls: 'tag-green' });
  }
  if (facialHairDesc) tags.push({ text: facialHairDesc, cls: 'tag-pink' });
  tags.push({ text: expressionDesc, cls: 'tag-pink' });
  if (accessoryDesc) tags.push({ text: accessoryDesc, cls: 'tag-yellow' });
  tags.push({ text: p.lighting, cls: 'tag-blue' });
  tags.push({ text: p.cameraAngle, cls: 'tag-purple' });
  tags.push({ text: p.imageStyle, cls: 'tag-green' });
  tags.push({ text: qPreset.tags.split(',')[0].trim(), cls: 'tag-green' });

  return { paragraph, tags, parts };
}

function formatPrompt(prompt, format) {
  switch(format) {
    case 'tags':
      return prompt.tags.map(t => `[${t.text}]`).join(' ');
    case 'comma':
      return prompt.tags.map(t => t.text).join(', ');
    case 'json':
      return JSON.stringify(prompt.tags.map(t => t.text), null, 2);
    case 'paragraph':
    default:
      return prompt.paragraph;
  }
}

function buildTags(tags) {
  const row = document.getElementById('tags-row');
  row.innerHTML = '';
  tags.forEach((t, i) => {
    const el = document.createElement('span');
    el.className = 'tag ' + t.cls;
    el.textContent = t.text;
    el.style.animationDelay = (i * 0.04) + 's';
    row.appendChild(el);
  });
}

// ===== FACE PRESET BUTTONS =====
function selectFaceShape(shapeId) {
  const preset = FACE_SHAPE_PRESETS.find(s => s.id === shapeId);
  if (!preset) return;

  document.getElementById('face-shape').value = shapeId;

  if (shapeId !== 'custom') {
    document.getElementById('facewidth').value = preset.fw;
    document.getElementById('jaw').value = preset.jaw;
  }

  document.querySelectorAll('.face-shape-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.shape === shapeId);
  });

  update();
}

function selectSkinTone(toneId) {
  document.getElementById('skin-tone-select').value = toneId;
  document.querySelectorAll('.skin-tone-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tone === toneId);
  });
  update();
}

// ===== PRESET LOADING =====
function loadPreset(presetId) {
  const p = PRESETS[presetId];
  if (!p) return;

  document.getElementById('gender').value = p.gender;
  document.getElementById('age').value = p.age;
  if (document.getElementById('skin-tone-select')) document.getElementById('skin-tone-select').value = p.skinTone;
  if (document.getElementById('face-shape')) document.getElementById('face-shape').value = p.faceShape;
  document.getElementById('facewidth').value = p.facewidth;
  document.getElementById('jaw').value = p.jaw;
  document.getElementById('eyeshape').value = p.eyeshape;
  document.getElementById('eyecolor').value = p.eyecolor;
  document.getElementById('eyedist').value = p.eyedist;
  document.getElementById('nose').value = p.nose;
  document.getElementById('lips').value = p.lips;
  document.getElementById('hairstyle').value = p.hairstyle;
  document.getElementById('haircolor').value = p.haircolor;
  if (document.getElementById('facialhair')) document.getElementById('facialhair').value = p.facialhair;
  if (document.getElementById('expression')) document.getElementById('expression').value = p.expression;
  if (document.getElementById('accessories')) document.getElementById('accessories').value = p.accessories;
  if (document.getElementById('lighting')) document.getElementById('lighting').value = p.lighting;
  if (document.getElementById('camera-angle')) document.getElementById('camera-angle').value = p.cameraAngle;
  if (document.getElementById('background')) document.getElementById('background').value = p.background;
  if (document.getElementById('image-style')) document.getElementById('image-style').value = p.imageStyle;
  if (document.getElementById('camera')) document.getElementById('camera').value = p.camera;
  if (document.getElementById('quality')) document.getElementById('quality').value = p.quality;

  // Update skin tone & face shape button states
  selectSkinTone(p.skinTone);
  selectFaceShape(p.faceShape);

  // Highlight preset button
  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.preset === presetId);
  });

  currentPreset = presetId;
  update();
}

// ===== RANDOM FACE =====
function randomFace() {
  const r = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const rv = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const gender = r(['male', 'female', 'androgynous']);
  const age = rv(18, 75);
  const skinTone = r(SKIN_TONES).id;
  const faceShape = r(FACE_SHAPE_PRESETS.filter(s => s.id !== 'custom')).id;
  const shapePreset = FACE_SHAPE_PRESETS.find(s => s.id === faceShape);

  document.getElementById('gender').value = gender;
  document.getElementById('age').value = age;
  if (document.getElementById('skin-tone-select')) document.getElementById('skin-tone-select').value = skinTone;
  document.getElementById('face-shape').value = faceShape;
  document.getElementById('facewidth').value = shapePreset ? shapePreset.fw : rv(30, 70);
  document.getElementById('jaw').value = shapePreset ? shapePreset.jaw : rv(20, 80);
  document.getElementById('eyeshape').value = r(EYESHAPE_OPTIONS).value;
  document.getElementById('eyecolor').value = r(EYECOLOR_OPTIONS).value;
  document.getElementById('eyedist').value = rv(25, 75);
  document.getElementById('nose').value = rv(20, 80);
  document.getElementById('lips').value = rv(20, 80);
  document.getElementById('hairstyle').value = r(HAIRSTYLE_OPTIONS).value;
  document.getElementById('haircolor').value = r(HAIRCOLOR_OPTIONS).value;
  if (document.getElementById('facialhair')) document.getElementById('facialhair').value = gender === 'female' ? 'none' : r(FACIAL_HAIR_OPTIONS).value;
  if (document.getElementById('expression')) document.getElementById('expression').value = r(EXPRESSION_OPTIONS).value;
  if (document.getElementById('accessories')) document.getElementById('accessories').value = r(ACCESSORIES_OPTIONS).value;
  if (document.getElementById('lighting')) document.getElementById('lighting').value = r(LIGHTING_OPTIONS).value;
  if (document.getElementById('camera-angle')) document.getElementById('camera-angle').value = r(CAMERA_ANGLE_OPTIONS).value;
  if (document.getElementById('background')) document.getElementById('background').value = r(BACKGROUND_OPTIONS).value;
  if (document.getElementById('image-style')) document.getElementById('image-style').value = r(IMAGE_STYLE_OPTIONS).value;
  if (document.getElementById('camera')) document.getElementById('camera').value = r(CAMERA_OPTIONS).value;
  if (document.getElementById('quality')) document.getElementById('quality').value = r(QUALITY_PRESETS).value;

  selectSkinTone(skinTone);
  selectFaceShape(faceShape);

  document.querySelectorAll('.preset-btn').forEach(btn => btn.classList.remove('active'));
  currentPreset = null;
  update();
}

// ===== FORMAT SWITCHING =====
function setPromptFormat(fmt) {
  promptFormat = fmt;
  document.querySelectorAll('.format-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.format === fmt);
  });
  update();
}

// ===== TOGGLE CATEGORY =====
function toggleCat(id) {
  const cat = document.getElementById(id);
  cat.classList.toggle('open');
}

// ===== COPY =====
function copyPrompt() {
  const text = document.getElementById('prompt-output').value;
  if (!text) return;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('copy-btn');
    const icon = document.getElementById('copy-icon');
    const label = document.getElementById('copy-text');
    btn.classList.add('copied');
    icon.textContent = '✓';
    label.textContent = 'TERSALIN!';
    showToast();
    setTimeout(() => {
      btn.classList.remove('copied');
      icon.textContent = '⧉';
      label.textContent = 'COPY TO CLIPBOARD';
    }, 2500);
  }).catch(() => {
    const ta = document.getElementById('prompt-output');
    ta.select();
    document.execCommand('copy');
    showToast();
  });
}

function showToast() {
  const t = document.getElementById('toast');
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// ===== RESET =====
function resetAll() {
  document.getElementById('gender').value = 'male';
  document.getElementById('age').value = 30;
  if (document.getElementById('skin-tone-select')) document.getElementById('skin-tone-select').value = 'medium';
  if (document.getElementById('face-shape')) document.getElementById('face-shape').value = 'custom';
  document.getElementById('facewidth').value = 50;
  document.getElementById('jaw').value = 50;
  document.getElementById('eyeshape').value = 'round';
  document.getElementById('eyecolor').value = 'brown';
  document.getElementById('eyedist').value = 50;
  document.getElementById('nose').value = 50;
  document.getElementById('lips').value = 50;
  document.getElementById('hairstyle').value = 'short hair';
  document.getElementById('haircolor').value = 'black';
  if (document.getElementById('facialhair')) document.getElementById('facialhair').value = 'none';
  if (document.getElementById('expression')) document.getElementById('expression').value = 'neutral expression';
  if (document.getElementById('accessories')) document.getElementById('accessories').value = 'none';
  if (document.getElementById('lighting')) document.getElementById('lighting').value = 'studio lighting with soft key light';
  if (document.getElementById('camera-angle')) document.getElementById('camera-angle').value = 'straight-on eye-level shot';
  if (document.getElementById('background')) document.getElementById('background').value = 'plain dark background';
  if (document.getElementById('image-style')) document.getElementById('image-style').value = 'photorealistic, hyperrealistic photography';
  if (document.getElementById('camera')) document.getElementById('camera').value = '85mm f/1.4 prime lens, shallow depth of field';
  if (document.getElementById('quality')) document.getElementById('quality').value = 'ultra';

  selectSkinTone('medium');
  selectFaceShape('custom');
  document.querySelectorAll('.preset-btn').forEach(btn => btn.classList.remove('active'));
  currentPreset = null;
  update();
}


// ===== CANVAS FACE RENDERER (Enhanced v2.0) =====

function drawFace(p) {
  const canvas = document.getElementById('face-canvas');
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  ctx.clearRect(0, 0, W, H);

  const cx = W / 2;

  // --- Parameters derived ---
  const fw = t01(p.facewidth);
  const jawSharp = t01(p.jaw);
  const eyeDist = t01(p.eyedist);
  const noseSize = t01(p.nose);
  const lipThick = t01(p.lips);
  const age = p.age;

  // Face dimensions (larger canvas)
  const faceRx = lerp(50, 75, fw);
  const faceRy = lerp(82, 72, fw);
  const faceCY = 155;

  // Jaw
  const chinY = faceCY + faceRy - lerp(6, 18, jawSharp);
  const jawW = faceRx * lerp(0.85, 0.65, jawSharp);

  // Skin tone
  const st = SKIN_TONES.find(s => s.id === p.skinTone) || SKIN_TONES[3];
  const skinBase = st.base;
  const skinShadow = st.shadow;
  const skinLight = st.light;
  const skinDeep = st.deep;

  // ---- HAIR BEHIND FACE ----
  const hc = HAIR_COLORS[p.haircolor] || HAIR_COLORS['black'];
  drawHairBack(ctx, cx, faceCY, faceRx, faceRy, chinY, p.hairstyle, hc, W, H);

  // ---- NECK ----
  drawNeck(ctx, cx, chinY, faceRx * 0.38, jawSharp, skinBase, skinShadow, skinDeep);

  // ---- FACE SHAPE ----
  drawFaceShape(ctx, cx, faceCY, faceRx, faceRy, chinY, jawW, jawSharp, skinBase, skinLight, skinShadow, skinDeep);

  // ---- EARS ----
  drawEars(ctx, cx, faceCY, faceRx, skinBase, skinShadow, skinDeep);

  // ---- EYEBROWS ----
  const eyeY = faceCY - faceRy * 0.22;
  const eyeGap = lerp(22, 38, eyeDist);
  const eyeLX = cx - eyeGap - 10;
  const eyeRX = cx + eyeGap + 10;
  drawEyebrows(ctx, eyeLX, eyeRX, eyeY - 13, p.gender, p.haircolor, age, faceRx);

  // ---- EYES ----
  const eyeColor = EYE_IRIS_COLORS[p.eyecolor] || EYE_IRIS_COLORS['brown'];
  drawEye(ctx, eyeLX, eyeY, p.eyeshape, eyeColor, false, age, skinShadow);
  drawEye(ctx, eyeRX, eyeY, p.eyeshape, eyeColor, true, age, skinShadow);

  // ---- NOSE ----
  const noseY = faceCY + faceRy * 0.06;
  drawNose(ctx, cx, noseY, noseSize, skinShadow, skinBase, skinLight, age);

  // ---- MOUTH ----
  const mouthY = faceCY + faceRy * 0.38;
  drawMouth(ctx, cx, mouthY, lipThick, p.gender, age, faceRx * 0.55);

  // ---- FACIAL HAIR ----
  if (p.facialhair && p.facialhair !== 'none') {
    drawFacialHair(ctx, cx, faceCY, faceRx, faceRy, chinY, mouthY, p.facialhair, hc, p.gender);
  }

  // ---- HAIR FRONT ----
  drawHairFront(ctx, cx, faceCY, faceRx, faceRy, p.hairstyle, hc, W);

  // ---- EXPRESSION LINES ----
  drawExpressionLines(ctx, cx, faceCY, faceRx, faceRy, eyeLX, eyeRX, eyeY, mouthY, p.expression, age);

  // ---- AGE LINES ----
  if (age > 35) drawAgeLines(ctx, cx, faceCY, faceRx, faceRy, eyeLX, eyeRX, eyeY, mouthY, age, skinShadow);

  // ---- AMBIENT OVERLAY / LIGHTING ----
  drawLighting(ctx, cx, faceCY, faceRx, faceRy, W, H, skinLight);

  // ---- SUB-SURFACE SCATTERING ----
  drawSSS(ctx, cx, faceCY, faceRx, faceRy, skinBase);

  // ---- HUD frame ----
  drawHUD(ctx, W, H);
}

function drawFaceShape(ctx, cx, cy, rx, ry, chinY, jawW, jawSharp, base, light, shadow, deep) {
  ctx.save();

  // Multi-stop gradient for realistic skin
  const grad = ctx.createRadialGradient(cx - rx*0.25, cy - ry*0.35, rx*0.08, cx, cy, rx*1.6);
  grad.addColorStop(0, light);
  grad.addColorStop(0.3, base);
  grad.addColorStop(0.6, lerpColor(base, shadow, 0.3));
  grad.addColorStop(0.85, shadow);
  grad.addColorStop(1, deep);

  ctx.beginPath();
  buildFacePath(ctx, cx, cy, rx, ry, chinY, jawW, jawSharp);
  ctx.fillStyle = grad;
  ctx.fill();

  // Edge darkening
  const edgeGrad = ctx.createRadialGradient(cx, cy, rx * 0.55, cx, cy, rx * 1.2);
  edgeGrad.addColorStop(0, 'rgba(0,0,0,0)');
  edgeGrad.addColorStop(1, 'rgba(0,0,0,0.25)');
  ctx.fillStyle = edgeGrad;
  ctx.fill();

  // Forehead specular highlight
  const specGrad = ctx.createRadialGradient(cx - rx*0.15, cy - ry*0.45, 2, cx - rx*0.15, cy - ry*0.35, rx*0.45);
  specGrad.addColorStop(0, 'rgba(255,255,255,0.12)');
  specGrad.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = specGrad;
  ctx.fill();

  ctx.restore();
}

function buildFacePath(ctx, cx, cy, rx, ry, chinY, jawW, jawSharp) {
  ctx.moveTo(cx, cy - ry);
  ctx.bezierCurveTo(cx + rx * 1.05, cy - ry * 0.6, cx + rx * 1.05, cy + ry * 0.1, cx + jawW, cy + ry * 0.55);
  if (jawSharp > 0.55) {
    ctx.lineTo(cx + jawW * 0.4, chinY - 6);
    ctx.lineTo(cx, chinY);
    ctx.lineTo(cx - jawW * 0.4, chinY - 6);
  } else {
    ctx.bezierCurveTo(cx + jawW * 0.8, cy + ry * 0.78, cx + jawW * 0.3, chinY - 2, cx, chinY);
  }
  if (jawSharp > 0.55) {
    ctx.lineTo(cx - jawW * 0.4, chinY - 6);
    ctx.lineTo(cx - jawW, cy + ry * 0.55);
  } else {
    ctx.bezierCurveTo(cx - jawW * 0.3, chinY - 2, cx - jawW * 0.8, cy + ry * 0.78, cx - jawW, cy + ry * 0.55);
  }
  ctx.bezierCurveTo(cx - rx * 1.05, cy + ry * 0.1, cx - rx * 1.05, cy - ry * 0.6, cx, cy - ry);
  ctx.closePath();
}

function drawNeck(ctx, cx, chinY, neckW, jawSharp, base, shadow, deep) {
  ctx.save();
  const neckH = 50;
  const grad = ctx.createLinearGradient(cx - neckW, 0, cx + neckW, 0);
  grad.addColorStop(0, shadow);
  grad.addColorStop(0.25, base);
  grad.addColorStop(0.5, lerpColor(base, shadow, 0.15));
  grad.addColorStop(0.75, base);
  grad.addColorStop(1, shadow);

  ctx.beginPath();
  ctx.moveTo(cx - neckW * 1.1, chinY + 6);
  ctx.bezierCurveTo(cx - neckW, chinY + 2, cx - neckW * 0.7, chinY + neckH, cx - neckW * 0.85, chinY + neckH + 4);
  ctx.lineTo(cx + neckW * 0.85, chinY + neckH + 4);
  ctx.bezierCurveTo(cx + neckW * 0.7, chinY + neckH, cx + neckW, chinY + 2, cx + neckW * 1.1, chinY + 6);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  // Neck shadow from chin
  const chinShadow = ctx.createRadialGradient(cx, chinY + 4, 2, cx, chinY + 10, neckW * 1.2);
  chinShadow.addColorStop(0, 'rgba(0,0,0,0.18)');
  chinShadow.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = chinShadow;
  ctx.fill();

  // Adam's apple hint (males)
  ctx.beginPath();
  ctx.ellipse(cx, chinY + neckH * 0.45, 5, 7, 0, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(0,0,0,0.06)';
  ctx.fill();

  ctx.restore();
}

function drawEars(ctx, cx, cy, rx, base, shadow, deep) {
  ctx.save();
  for (const side of [-1, 1]) {
    const ex = cx + side * (rx * 0.97);
    const ey = cy - 2;
    const ew = 12, eh = 26;

    // Ear shadow
    ctx.beginPath();
    ctx.ellipse(ex + side * 2, ey + 2, ew + 3, eh + 3, side * 0.15, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0,0,0,0.12)';
    ctx.fill();

    // Ear shape
    const g = ctx.createRadialGradient(ex + side * 3, ey - 3, 1, ex, ey, ew * 1.5);
    g.addColorStop(0, lerpColor(base, '#ffffff', 0.1));
    g.addColorStop(0.5, base);
    g.addColorStop(1, shadow);
    ctx.beginPath();
    ctx.ellipse(ex, ey, ew, eh, side * 0.15, 0, Math.PI * 2);
    ctx.fillStyle = g;
    ctx.fill();

    // Inner ear detail
    ctx.beginPath();
    ctx.ellipse(ex + side * 1.5, ey, ew * 0.4, eh * 0.5, side * 0.1, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0,0,0,0.15)';
    ctx.fill();

    // Inner ear fold
    ctx.beginPath();
    ctx.ellipse(ex + side * 0.5, ey + 2, ew * 0.25, eh * 0.35, side * 0.05, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0,0,0,0.08)';
    ctx.fill();
  }
  ctx.restore();
}

function drawEyebrows(ctx, lx, rx, y, gender, hairColor, age, faceRx) {
  const hc = HAIR_COLORS[hairColor] || HAIR_COLORS['black'];
  const thick = gender === 'female' ? 3 : 4.8;
  const arch = gender === 'female' ? 7 : 4;
  const len = faceRx * 0.55;

  ctx.save();
  ctx.lineCap = 'round';

  for (const [bx, dir] of [[lx, 1], [rx, -1]]) {
    const x0 = bx - dir * len * 0.5;
    const x2 = bx + dir * len * 0.5;

    // Brow shadow
    ctx.beginPath();
    ctx.moveTo(x0, y + 3);
    ctx.quadraticCurveTo(bx, y - arch + 4, x2, y + 3);
    ctx.strokeStyle = 'rgba(0,0,0,0.2)';
    ctx.lineWidth = thick + 3;
    ctx.stroke();

    // Main brow
    ctx.beginPath();
    ctx.moveTo(x0, y);
    ctx.quadraticCurveTo(bx, y - arch, x2, y);
    ctx.strokeStyle = hc.base;
    ctx.lineWidth = thick;
    ctx.stroke();

    // Brow highlight
    ctx.beginPath();
    ctx.moveTo(x0 + (x2-x0)*0.15, y - 0.5);
    ctx.quadraticCurveTo(bx, y - arch + 2, x2 - (x2-x0)*0.15, y - 0.5);
    ctx.strokeStyle = hc.hi + '44';
    ctx.lineWidth = thick * 0.35;
    ctx.stroke();

    // Hair texture strokes
    for (let i = 0; i < 3; i++) {
      const t = 0.25 + i * 0.25;
      const px = x0 + (x2 - x0) * t;
      const py = y - arch * (1 - Math.pow(2*t - 1, 2)) + 1;
      ctx.beginPath();
      ctx.moveTo(px - dir * 2, py + 2);
      ctx.lineTo(px + dir * 2, py - 2);
      ctx.strokeStyle = hc.hi + '33';
      ctx.lineWidth = 0.8;
      ctx.stroke();
    }
  }
  ctx.restore();
}

function drawEye(ctx, ex, ey, shape, colors, flip, age, skinShadow) {
  ctx.save();
  if (flip) { ctx.translate(ex * 2, 0); ctx.scale(-1, 1); }

  let rw = 16, rh = 10;
  let topLiftL = 0, topLiftR = 0;
  if (shape === 'round') { rw = 14; rh = 11; }
  else if (shape === 'almond-shaped') { rw = 17; rh = 9; topLiftL = 4; topLiftR = 3; }
  else if (shape === 'narrow') { rw = 17; rh = 6; topLiftL = 1; topLiftR = 1; }
  else if (shape === 'hooded') { rw = 16; rh = 8; topLiftL = 0; topLiftR = 0; }
  else if (shape === 'monolid') { rw = 17; rh = 7; topLiftL = 0; topLiftR = 0; }
  else if (shape === 'upturned') { rw = 16; rh = 9; topLiftL = 5; topLiftR = 2; }
  else if (shape === 'downturned') { rw = 16; rh = 9; topLiftL = -2; topLiftR = -4; }
  else if (shape === 'deep-set') { rw = 15; rh = 9; topLiftL = 2; topLiftR = 2; }
  else if (shape === 'wide-set') { rw = 17; rh = 10; topLiftL = 2; topLiftR = 2; }
  else if (shape === 'close-set') { rw = 15; rh = 10; topLiftL = 2; topLiftR = 2; }

  const lx = ex - rw, rx2 = ex + rw;

  // ---- Eye socket shadow (deeper for deep-set) ----
  const socketDepth = shape === 'deep-set' ? 0.4 : 0.28;
  const socketGrad = ctx.createRadialGradient(ex, ey + 2, 1, ex, ey + 2, rw * 1.4);
  socketGrad.addColorStop(0, 'rgba(0,0,0,0)');
  socketGrad.addColorStop(1, `rgba(0,0,0,${socketDepth})`);
  ctx.beginPath();
  ctx.ellipse(ex, ey + 2, rw + 5, rh + 8, 0, 0, Math.PI * 2);
  ctx.fillStyle = socketGrad;
  ctx.fill();

  // ---- Sclera with blood vessel hints ----
  const scleraGrad = ctx.createRadialGradient(ex - 2, ey - 2, 1, ex, ey, rw);
  scleraGrad.addColorStop(0, '#f8f4ec');
  scleraGrad.addColorStop(0.6, '#ece4d4');
  scleraGrad.addColorStop(1, '#d0c0a8');

  ctx.beginPath();
  eyeOutlinePath(ctx, ex, ey, rw, rh, topLiftL, topLiftR, shape);
  ctx.fillStyle = scleraGrad;
  ctx.fill();

  // Subtle blood vessels
  ctx.save();
  ctx.beginPath();
  eyeOutlinePath(ctx, ex, ey, rw, rh, topLiftL, topLiftR, shape);
  ctx.clip();
  for (let i = 0; i < 3; i++) {
    ctx.beginPath();
    const sx = ex - rw * 0.6 + i * 4;
    ctx.moveTo(sx, ey + rh * 0.3);
    ctx.quadraticCurveTo(sx + rw * 0.3, ey + rh * 0.1, sx + rw * 0.5, ey - rh * 0.2);
    ctx.strokeStyle = 'rgba(180,60,60,0.08)';
    ctx.lineWidth = 0.5;
    ctx.stroke();
  }
  ctx.restore();

  // ---- Iris ----
  const irisR = rh * 0.85;
  const irisGrad = ctx.createRadialGradient(ex - 2, ey - 2, 0.5, ex, ey, irisR);
  irisGrad.addColorStop(0, colors.hi);
  irisGrad.addColorStop(0.35, colors.iris);
  irisGrad.addColorStop(0.7, lerpColor(colors.iris, colors.pupil, 0.5));
  irisGrad.addColorStop(1, colors.pupil);

  ctx.save();
  ctx.beginPath();
  eyeOutlinePath(ctx, ex, ey, rw, rh, topLiftL, topLiftR, shape);
  ctx.clip();

  ctx.beginPath();
  ctx.arc(ex, ey, irisR, 0, Math.PI * 2);
  ctx.fillStyle = irisGrad;
  ctx.fill();

  // Iris texture (radial lines)
  for (let i = 0; i < 12; i++) {
    const angle = (i / 12) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(ex + Math.cos(angle) * irisR * 0.3, ey + Math.sin(angle) * irisR * 0.3);
    ctx.lineTo(ex + Math.cos(angle) * irisR * 0.9, ey + Math.sin(angle) * irisR * 0.9);
    ctx.strokeStyle = 'rgba(0,0,0,0.06)';
    ctx.lineWidth = 0.5;
    ctx.stroke();
  }

  // Iris ring
  ctx.beginPath();
  ctx.arc(ex, ey, irisR * 0.78, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(0,0,0,0.08)';
  ctx.lineWidth = 0.8;
  ctx.stroke();

  // Pupil
  ctx.beginPath();
  ctx.arc(ex, ey, irisR * 0.4, 0, Math.PI * 2);
  ctx.fillStyle = '#080604';
  ctx.fill();

  // Pupil inner highlight
  ctx.beginPath();
  ctx.arc(ex, ey, irisR * 0.15, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(30,20,10,0.5)';
  ctx.fill();

  // Catchlights (realistic dual reflection)
  ctx.beginPath();
  ctx.arc(ex - 4, ey - 4, 3, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255,255,255,0.92)';
  ctx.fill();
  ctx.beginPath();
  ctx.arc(ex + 2.5, ey - 2, 1.5, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255,255,255,0.55)';
  ctx.fill();
  // Small tertiary catchlight
  ctx.beginPath();
  ctx.arc(ex - 1, ey + 3, 0.8, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255,255,255,0.25)';
  ctx.fill();

  ctx.restore();

  // ---- Eyelid ----
  ctx.beginPath();
  eyeOutlinePath(ctx, ex, ey, rw, rh, topLiftL, topLiftR, shape);
  ctx.strokeStyle = 'rgba(40,20,10,0.6)';
  ctx.lineWidth = 1;
  ctx.stroke();

  // Upper eyelid crease
  ctx.beginPath();
  ctx.moveTo(lx + 1, ey - rh * 0.3);
  ctx.quadraticCurveTo(ex, ey - rh * 1.4, rx2 - 1, ey - rh * 0.3);
  ctx.strokeStyle = 'rgba(80,40,20,0.2)';
  ctx.lineWidth = 0.8;
  ctx.stroke();

  // Upper lash line (thick, dark)
  ctx.beginPath();
  upperLashLine(ctx, ex, ey, rw, rh, topLiftL, topLiftR, shape);
  ctx.strokeStyle = 'rgba(10,5,2,0.9)';
  ctx.lineWidth = 2.2;
  ctx.stroke();

  // Lower lash line (subtle)
  ctx.beginPath();
  lowerLashLine(ctx, ex, ey, rw, rh, topLiftL, topLiftR, shape);
  ctx.strokeStyle = 'rgba(40,20,10,0.3)';
  ctx.lineWidth = 0.8;
  ctx.stroke();

  // Under-eye shadow
  ctx.beginPath();
  ctx.ellipse(ex, ey + rh + 3, rw * 0.8, 4, 0, 0, Math.PI);
  ctx.fillStyle = 'rgba(0,0,0,0.06)';
  ctx.fill();

  ctx.restore();
}

function eyeOutlinePath(ctx, ex, ey, rw, rh, tl, tr, shape) {
  ctx.moveTo(ex - rw, ey);
  if (shape === 'narrow' || shape === 'monolid') {
    ctx.bezierCurveTo(ex - rw * 0.5, ey - rh - tl, ex + rw * 0.2, ey - rh - tr, ex + rw, ey);
    ctx.bezierCurveTo(ex + rw * 0.5, ey + rh * 0.6, ex - rw * 0.5, ey + rh * 0.6, ex - rw, ey);
  } else if (shape === 'almond-shaped' || shape === 'upturned' || shape === 'downturned') {
    ctx.bezierCurveTo(ex - rw * 0.3, ey - rh * 1.2 - tl, ex + rw * 0.4, ey - rh * 1.1 - tr, ex + rw, ey);
    ctx.bezierCurveTo(ex + rw * 0.4, ey + rh * 0.85, ex - rw * 0.5, ey + rh * 0.9, ex - rw, ey);
  } else if (shape === 'hooded') {
    ctx.bezierCurveTo(ex - rw * 0.4, ey - rh * 0.9, ex + rw * 0.4, ey - rh * 0.9, ex + rw, ey);
    ctx.bezierCurveTo(ex + rw * 0.4, ey + rh * 1.0, ex - rw * 0.4, ey + rh * 1.0, ex - rw, ey);
  } else if (shape === 'deep-set') {
    ctx.bezierCurveTo(ex - rw * 0.35, ey - rh * 1.35, ex + rw * 0.35, ey - rh * 1.35, ex + rw, ey);
    ctx.bezierCurveTo(ex + rw * 0.35, ey + rh * 0.9, ex - rw * 0.35, ey + rh * 0.9, ex - rw, ey);
  } else {
    ctx.bezierCurveTo(ex - rw * 0.4, ey - rh * 1.3, ex + rw * 0.4, ey - rh * 1.3, ex + rw, ey);
    ctx.bezierCurveTo(ex + rw * 0.4, ey + rh * 1.1, ex - rw * 0.4, ey + rh * 1.1, ex - rw, ey);
  }
  ctx.closePath();
}

function upperLashLine(ctx, ex, ey, rw, rh, tl, tr, shape) {
  ctx.moveTo(ex - rw, ey);
  if (shape === 'narrow' || shape === 'monolid') {
    ctx.bezierCurveTo(ex - rw * 0.5, ey - rh - tl, ex + rw * 0.2, ey - rh - tr, ex + rw, ey);
  } else if (shape === 'almond-shaped' || shape === 'upturned' || shape === 'downturned') {
    ctx.bezierCurveTo(ex - rw * 0.3, ey - rh * 1.2 - tl, ex + rw * 0.4, ey - rh * 1.1 - tr, ex + rw, ey);
  } else if (shape === 'hooded') {
    ctx.bezierCurveTo(ex - rw * 0.4, ey - rh * 0.9, ex + rw * 0.4, ey - rh * 0.9, ex + rw, ey);
  } else {
    ctx.bezierCurveTo(ex - rw * 0.4, ey - rh * 1.3, ex + rw * 0.4, ey - rh * 1.3, ex + rw, ey);
  }
}

function lowerLashLine(ctx, ex, ey, rw, rh, tl, tr, shape) {
  ctx.moveTo(ex - rw, ey);
  if (shape === 'narrow' || shape === 'monolid') {
    ctx.bezierCurveTo(ex - rw * 0.5, ey + rh * 0.6, ex + rw * 0.5, ey + rh * 0.6, ex + rw, ey);
  } else {
    ctx.bezierCurveTo(ex + rw * 0.4, ey + rh * 0.9, ex - rw * 0.4, ey + rh * 0.9, ex - rw, ey);
  }
}

function drawNose(ctx, cx, ny, size, shadow, base, light, age) {
  ctx.save();
  const nw = lerp(12, 22, size);
  const nh = lerp(18, 30, size);
  const nostrilR = lerp(4, 7, size);

  // Nose bridge shadow (left side - key light from left)
  ctx.beginPath();
  ctx.moveTo(cx - 4, ny - nh);
  ctx.quadraticCurveTo(cx - 5, ny - nh * 0.4, cx - 4, ny);
  ctx.strokeStyle = 'rgba(0,0,0,0.1)';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Nose bridge highlight (right side)
  ctx.beginPath();
  ctx.moveTo(cx + 1, ny - nh * 0.85);
  ctx.quadraticCurveTo(cx + 2, ny - nh * 0.3, cx + 1, ny + 1);
  ctx.strokeStyle = 'rgba(255,255,255,0.12)';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Nose tip - multi-gradient for volume
  const tipGrad = ctx.createRadialGradient(cx - nw * 0.12, ny + 2, 1, cx, ny + 4, nw * 0.9);
  tipGrad.addColorStop(0, light);
  tipGrad.addColorStop(0.4, base);
  tipGrad.addColorStop(0.7, shadow + 'cc');
  tipGrad.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.beginPath();
  ctx.ellipse(cx, ny + 3, nw * 0.7, nostrilR * 1.3, 0, 0, Math.PI * 2);
  ctx.fillStyle = tipGrad;
  ctx.fill();

  // Nostrils
  for (const side of [-1, 1]) {
    const nx = cx + side * (nw * 0.5);
    // Nostril shadow
    ctx.beginPath();
    ctx.ellipse(nx, ny + 5, nostrilR, nostrilR * 0.7, side * 0.4, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.fill();
    // Nostril edge highlight
    ctx.beginPath();
    ctx.ellipse(nx - side * 0.5, ny + 3, nostrilR * 0.5, nostrilR * 0.35, side * 0.3, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,220,180,0.15)';
    ctx.fill();
  }

  // Nose wing shadows
  for (const side of [-1, 1]) {
    ctx.beginPath();
    ctx.ellipse(cx + side * nw * 0.45, ny + 4, nostrilR * 0.6, nostrilR * 0.3, side * 0.5, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0,0,0,0.08)';
    ctx.fill();
  }

  ctx.restore();
}

function drawMouth(ctx, cx, my, lipThick, gender, age, halfW) {
  ctx.save();

  const upperH = lerp(5, 10, lipThick);
  const lowerH = lerp(6, 14, lipThick);
  const cornerDip = gender === 'female' ? 1 : 3;
  const bowPeak = upperH * 0.9;
  const lipColor = gender === 'female' ? { r: '#c05070', m: '#d06080', d: '#904060' } : { r: '#a05040', m: '#b06050', d: '#804030' };

  // Philtrum
  ctx.beginPath();
  ctx.moveTo(cx - 6, my - upperH * 0.5);
  ctx.lineTo(cx - 2.5, my - upperH * 2);
  ctx.moveTo(cx + 6, my - upperH * 0.5);
  ctx.lineTo(cx + 2.5, my - upperH * 2);
  ctx.strokeStyle = 'rgba(0,0,0,0.08)';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Upper lip
  const ulGrad = ctx.createLinearGradient(cx, my - upperH * 1.2, cx, my);
  ulGrad.addColorStop(0, lipColor.r);
  ulGrad.addColorStop(0.5, lipColor.m);
  ulGrad.addColorStop(1, lipColor.d);

  ctx.beginPath();
  ctx.moveTo(cx - halfW, my + cornerDip);
  ctx.bezierCurveTo(cx - halfW * 0.6, my, cx - halfW * 0.22, my - bowPeak * 1.2, cx - halfW * 0.08, my - upperH);
  ctx.bezierCurveTo(cx - halfW * 0.02, my - upperH - bowPeak * 0.3, cx + halfW * 0.02, my - upperH - bowPeak * 0.3, cx + halfW * 0.08, my - upperH);
  ctx.bezierCurveTo(cx + halfW * 0.22, my - bowPeak * 1.2, cx + halfW * 0.6, my, cx + halfW, my + cornerDip);
  ctx.bezierCurveTo(cx + halfW * 0.5, my + 1, cx, my + 1, cx - halfW, my + cornerDip);
  ctx.closePath();
  ctx.fillStyle = ulGrad;
  ctx.fill();

  // Upper lip highlight
  ctx.beginPath();
  ctx.ellipse(cx, my - upperH * 0.55, halfW * 0.25, upperH * 0.28, 0, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255,220,210,0.25)';
  ctx.fill();

  // Lower lip
  const llGrad = ctx.createLinearGradient(cx, my, cx, my + lowerH * 1.1);
  llGrad.addColorStop(0, lipColor.m);
  llGrad.addColorStop(0.4, lerpColor(lipColor.m, '#ffffff', 0.15));
  llGrad.addColorStop(1, lipColor.d);

  ctx.beginPath();
  ctx.moveTo(cx - halfW, my + cornerDip);
  ctx.bezierCurveTo(cx - halfW * 0.5, my + lowerH * 0.5, cx - halfW * 0.2, my + lowerH * 1.15, cx, my + lowerH);
  ctx.bezierCurveTo(cx + halfW * 0.2, my + lowerH * 1.15, cx + halfW * 0.5, my + lowerH * 0.5, cx + halfW, my + cornerDip);
  ctx.bezierCurveTo(cx + halfW * 0.4, my + lowerH * 0.3, cx - halfW * 0.4, my + lowerH * 0.3, cx - halfW, my + cornerDip);
  ctx.closePath();
  ctx.fillStyle = llGrad;
  ctx.fill();

  // Lower lip specular
  ctx.beginPath();
  ctx.ellipse(cx, my + lowerH * 0.45, halfW * 0.35, lowerH * 0.28, 0, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255,230,220,0.3)';
  ctx.fill();

  // Lip line
  ctx.beginPath();
  ctx.moveTo(cx - halfW, my + cornerDip);
  ctx.bezierCurveTo(cx - halfW * 0.5, my + 1.5, cx + halfW * 0.5, my + 1.5, cx + halfW, my + cornerDip);
  ctx.strokeStyle = 'rgba(80,20,20,0.45)';
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.restore();
}

function drawFacialHair(ctx, cx, faceCY, faceRx, faceRy, chinY, mouthY, style, hc, gender) {
  if (gender === 'female') return;
  ctx.save();

  const beardGrad = ctx.createLinearGradient(cx, mouthY, cx, chinY + 15);
  beardGrad.addColorStop(0, hc.base + '88');
  beardGrad.addColorStop(0.5, hc.mid + '66');
  beardGrad.addColorStop(1, hc.base + '44');

  const stubbleAlpha = style === 'stubble' ? 0.15 : 0;

  if (style === 'stubble' || style === 'short beard' || style === 'full beard' || style === 'long beard' ||
      style === 'goatee' || style === 'van dyke beard' || style === 'chin strap beard' || style === 'mutton chops') {

    // Stubble / beard area
    ctx.beginPath();
    const beardBottom = style === 'long beard' ? chinY + 35 : style === 'full beard' ? chinY + 18 : chinY + 5;

    if (style === 'goatee' || style === 'van dyke beard') {
      // Goatee - just chin area
      ctx.ellipse(cx, chinY - 3, faceRx * 0.2, 15, 0, 0, Math.PI * 2);
    } else if (style === 'chin strap beard') {
      // Chin strap along jawline
      ctx.moveTo(cx - faceRx * 0.7, faceCY + faceRy * 0.4);
      ctx.bezierCurveTo(cx - faceRx * 0.5, chinY - 5, cx + faceRx * 0.5, chinY - 5, cx + faceRx * 0.7, faceCY + faceRy * 0.4);
      ctx.lineTo(cx + faceRx * 0.65, faceCY + faceRy * 0.5);
      ctx.bezierCurveTo(cx + faceRx * 0.4, chinY + 3, cx - faceRx * 0.4, chinY + 3, cx - faceRx * 0.65, faceCY + faceRy * 0.5);
      ctx.closePath();
    } else if (style === 'mutton chops') {
      // Side burns only
      for (const side of [-1, 1]) {
        ctx.moveTo(cx + side * faceRx * 0.7, faceCY - 10);
        ctx.lineTo(cx + side * faceRx * 0.8, faceCY + 20);
        ctx.lineTo(cx + side * faceRx * 0.5, faceCY + 30);
        ctx.lineTo(cx + side * faceRx * 0.4, faceCY);
        ctx.closePath();
      }
    } else {
      // Full beard area
      ctx.moveTo(cx - faceRx * 0.65, faceCY + faceRy * 0.3);
      ctx.bezierCurveTo(cx - faceRx * 0.7, chinY, cx - faceRx * 0.3, beardBottom, cx, beardBottom + 3);
      ctx.bezierCurveTo(cx + faceRx * 0.3, beardBottom, cx + faceRx * 0.7, chinY, cx + faceRx * 0.65, faceCY + faceRy * 0.3);
      ctx.bezierCurveTo(cx + faceRx * 0.4, faceCY + faceRy * 0.2, cx - faceRx * 0.4, faceCY + faceRy * 0.2, cx - faceRx * 0.65, faceCY + faceRy * 0.3);
    }

    ctx.fillStyle = beardGrad;
    ctx.fill();

    // Stubble texture
    if (style === 'stubble' || style === 'short beard') {
      ctx.save();
      ctx.clip();
      for (let i = 0; i < 60; i++) {
        const sx = cx + (Math.random() - 0.5) * faceRx * 1.2;
        const sy = mouthY + Math.random() * (chinY - mouthY + 10);
        ctx.beginPath();
        ctx.arc(sx, sy, 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,0,0,${stubbleAlpha + Math.random() * 0.1})`;
        ctx.fill();
      }
      ctx.restore();
    }
  }

  // Mustache
  if (style === 'mustache' || style === 'handlebar mustache' || style === 'van dyke beard') {
    const mustW = faceRx * (style === 'handlebar mustache' ? 0.55 : 0.4);
    ctx.beginPath();
    ctx.moveTo(cx - mustW, mouthY - 6);
    ctx.bezierCurveTo(cx - mustW * 0.5, mouthY - 10, cx + mustW * 0.5, mouthY - 10, cx + mustW, mouthY - 6);
    ctx.bezierCurveTo(cx + mustW * 0.5, mouthY - 3, cx - mustW * 0.5, mouthY - 3, cx - mustW, mouthY - 6);
    ctx.fillStyle = hc.base + '99';
    ctx.fill();

    if (style === 'handlebar mustache') {
      // Curl ends
      for (const side of [-1, 1]) {
        ctx.beginPath();
        ctx.arc(cx + side * mustW * 1.1, mouthY - 4, 5, 0, Math.PI * 1.2);
        ctx.strokeStyle = hc.base + '88';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }
  }

  ctx.restore();
}

function drawExpressionLines(ctx, cx, faceCY, faceRx, faceRy, lx, rx, ey, my, expression, age) {
  ctx.save();
  ctx.lineCap = 'round';

  if (expression.includes('smile') || expression.includes('broad')) {
    // Smile lines (nasolabial)
    const intensity = expression.includes('broad') ? 0.2 : 0.1;
    ctx.strokeStyle = `rgba(0,0,0,${intensity})`;
    ctx.lineWidth = 1;
    for (const side of [-1, 1]) {
      ctx.beginPath();
      ctx.moveTo(cx + side * faceRx * 0.28, ey + 25);
      ctx.bezierCurveTo(cx + side * faceRx * 0.38, my - 3, cx + side * faceRx * 0.4, my + 5, cx + side * faceRx * 0.32, my + 15);
      ctx.stroke();
    }

    // Cheek lift
    for (const side of [-1, 1]) {
      const cheekGrad = ctx.createRadialGradient(cx + side * faceRx * 0.5, my - 8, 2, cx + side * faceRx * 0.5, my - 8, 15);
      cheekGrad.addColorStop(0, 'rgba(220,100,80,0.1)');
      cheekGrad.addColorStop(1, 'rgba(220,100,80,0)');
      ctx.beginPath();
      ctx.ellipse(cx + side * faceRx * 0.5, my - 8, 15, 10, 0, 0, Math.PI * 2);
      ctx.fillStyle = cheekGrad;
      ctx.fill();
    }
  }

  if (expression.includes('angry') || expression.includes('stern')) {
    // Brow furrow
    ctx.strokeStyle = 'rgba(0,0,0,0.15)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(cx - 8, ey - 20);
    ctx.lineTo(cx - 3, ey - 16);
    ctx.moveTo(cx + 8, ey - 20);
    ctx.lineTo(cx + 3, ey - 16);
    ctx.stroke();
  }

  if (expression.includes('surprised')) {
    // Raised brow lines
    ctx.strokeStyle = 'rgba(0,0,0,0.08)';
    ctx.lineWidth = 0.8;
    for (const side of [-1, 1]) {
      ctx.beginPath();
      ctx.moveTo(cx + side * 15, ey - 28);
      ctx.quadraticCurveTo(cx + side * 22, ey - 30, cx + side * 30, ey - 26);
      ctx.stroke();
    }
  }

  ctx.restore();
}

function drawAgeLines(ctx, cx, cy, rx, ry, lx, rx2, ey, my, age, shadow) {
  ctx.save();
  ctx.lineCap = 'round';
  const intensity = Math.min((age - 35) / 45, 1);

  // Nasolabial folds
  ctx.strokeStyle = `rgba(0,0,0,${0.06 + intensity * 0.08})`;
  ctx.lineWidth = lerp(0.5, 1.5, intensity);
  for (const side of [-1, 1]) {
    ctx.beginPath();
    ctx.moveTo(cx + side * rx * 0.32, ey + 20);
    ctx.bezierCurveTo(cx + side * rx * 0.45, my - 5, cx + side * rx * 0.48, my + 5, cx + side * rx * 0.38, my + 14);
    ctx.stroke();
  }

  // Forehead lines
  if (age > 45) {
    ctx.lineWidth = lerp(0.3, 1, intensity);
    for (let i = 0; i < 3; i++) {
      const lineY = cy - ry * 0.55 + i * 9;
      ctx.beginPath();
      ctx.moveTo(cx - rx * 0.5, lineY);
      ctx.bezierCurveTo(cx - rx * 0.2, lineY - 2, cx + rx * 0.2, lineY - 2, cx + rx * 0.5, lineY);
      ctx.stroke();
    }
  }

  // Crow's feet
  if (age > 40) {
    ctx.lineWidth = lerp(0.3, 0.9, intensity);
    for (const [ex, dir] of [[lx, -1], [rx2, 1]]) {
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(ex + dir * 14, ey + i * 4);
        ctx.quadraticCurveTo(ex + dir * 22, ey + i * 5, ex + dir * 28, ey - 2 + i * 7);
        ctx.stroke();
      }
    }
  }

  // Under-eye bags
  if (age > 50) {
    ctx.beginPath();
    ctx.ellipse(lx + 5, ey + 14, 10, 4, 0, 0, Math.PI);
    ctx.ellipse(rx2 - 5, ey + 14, 10, 4, 0, 0, Math.PI);
    ctx.fillStyle = `rgba(0,0,0,${0.04 + intensity * 0.04})`;
    ctx.fill();
  }

  ctx.restore();
}

function drawHairBack(ctx, cx, cy, rx, ry, chinY, style, hc, W, H) {
  if (style === 'bald') return;
  ctx.save();
  const grad = ctx.createLinearGradient(cx - rx * 1.4, cy - ry, cx + rx * 1.4, cy + ry * 0.5);
  grad.addColorStop(0, hc.hi);
  grad.addColorStop(0.4, hc.mid);
  grad.addColorStop(1, hc.base);

  ctx.beginPath();
  if (style.includes('long') || style === 'very long hair') {
    ctx.moveTo(cx - rx * 0.7, cy - ry * 0.85);
    ctx.bezierCurveTo(cx - rx * 1.6, cy - ry * 0.5, cx - rx * 1.7, cy + ry * 0.8, cx - rx * 1.55, H + 20);
    ctx.lineTo(cx + rx * 1.55, H + 20);
    ctx.bezierCurveTo(cx + rx * 1.7, cy + ry * 0.8, cx + rx * 1.6, cy - ry * 0.5, cx + rx * 0.7, cy - ry * 0.85);
    ctx.bezierCurveTo(cx + rx * 0.4, cy - ry * 1.25, cx - rx * 0.4, cy - ry * 1.25, cx - rx * 0.7, cy - ry * 0.85);
  } else if (style.includes('shoulder') || style === 'bob cut') {
    ctx.moveTo(cx - rx * 0.7, cy - ry * 0.85);
    ctx.bezierCurveTo(cx - rx * 1.55, cy - ry * 0.4, cx - rx * 1.6, cy + ry * 0.7, cx - rx * 1.45, chinY + 50);
    ctx.lineTo(cx + rx * 1.45, chinY + 50);
    ctx.bezierCurveTo(cx + rx * 1.6, cy + ry * 0.7, cx + rx * 1.55, cy - ry * 0.4, cx + rx * 0.7, cy - ry * 0.85);
    ctx.bezierCurveTo(cx + rx * 0.4, cy - ry * 1.25, cx - rx * 0.4, cy - ry * 1.25, cx - rx * 0.7, cy - ry * 0.85);
  } else if (style === 'afro') {
    ctx.ellipse(cx, cy - ry * 0.3, rx * 1.8, ry * 1.4, 0, 0, Math.PI * 2);
  } else if (style === 'dreadlocks') {
    ctx.moveTo(cx - rx * 0.7, cy - ry * 0.85);
    ctx.bezierCurveTo(cx - rx * 1.6, cy - ry * 0.3, cx - rx * 1.7, cy + ry * 0.6, cx - rx * 1.5, chinY + 40);
    ctx.lineTo(cx + rx * 1.5, chinY + 40);
    ctx.bezierCurveTo(cx + rx * 1.7, cy + ry * 0.6, cx + rx * 1.6, cy - ry * 0.3, cx + rx * 0.7, cy - ry * 0.85);
    ctx.bezierCurveTo(cx + rx * 0.4, cy - ry * 1.25, cx - rx * 0.4, cy - ry * 1.25, cx - rx * 0.7, cy - ry * 0.85);
  } else {
    ctx.moveTo(cx - rx * 0.65, cy - ry * 0.88);
    ctx.bezierCurveTo(cx - rx * 1.4, cy - ry * 0.5, cx - rx * 1.3, cy + ry * 0.2, cx - rx, cy + ry * 0.4);
    ctx.bezierCurveTo(cx - rx, cy, cx - rx * 0.5, cy - ry * 0.5, cx, cy - ry * 1.15);
    ctx.bezierCurveTo(cx + rx * 0.5, cy - ry * 0.5, cx + rx, cy, cx + rx, cy + ry * 0.4);
    ctx.bezierCurveTo(cx + rx * 1.3, cy + ry * 0.2, cx + rx * 1.4, cy - ry * 0.5, cx + rx * 0.65, cy - ry * 0.88);
    ctx.bezierCurveTo(cx + rx * 0.4, cy - ry * 1.22, cx - rx * 0.4, cy - ry * 1.22, cx - rx * 0.65, cy - ry * 0.88);
  }
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  // Hair strand texture
  if (style !== 'afro') {
    ctx.globalAlpha = 0.08;
    for (let i = 0; i < 8; i++) {
      const sx = cx - rx * 0.5 + Math.random() * rx;
      ctx.beginPath();
      ctx.moveTo(sx, cy - ry * 1.1);
      ctx.bezierCurveTo(sx + (Math.random()-0.5)*20, cy - ry * 0.5, sx + (Math.random()-0.5)*15, cy + ry * 0.3, sx + (Math.random()-0.5)*10, chinY + 30);
      ctx.strokeStyle = hc.hi;
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }

  ctx.restore();
}

function drawHairFront(ctx, cx, cy, rx, ry, style, hc, W) {
  if (style === 'bald') return;
  ctx.save();
  const grad = ctx.createLinearGradient(cx - rx, cy - ry * 1.2, cx + rx, cy - ry * 0.6);
  grad.addColorStop(0, hc.hi);
  grad.addColorStop(0.5, hc.mid);
  grad.addColorStop(1, hc.base);

  ctx.beginPath();

  if (style === 'buzz cut' || style === 'very short buzz cut') {
    ctx.moveTo(cx - rx * 0.9, cy - ry * 0.65);
    ctx.bezierCurveTo(cx - rx * 0.85, cy - ry * 1.15, cx + rx * 0.85, cy - ry * 1.15, cx + rx * 0.9, cy - ry * 0.65);
    ctx.bezierCurveTo(cx + rx * 0.6, cy - ry * 0.75, cx - rx * 0.6, cy - ry * 0.75, cx - rx * 0.9, cy - ry * 0.65);
    ctx.closePath();
  } else if (style === 'short hair' || style === 'side-parted hair' || style === 'slicked-back hair' || style === 'undercut' || style === 'shaved sides') {
    ctx.moveTo(cx - rx * 0.95, cy - ry * 0.55);
    ctx.bezierCurveTo(cx - rx * 0.9, cy - ry * 1.1, cx - rx * 0.2, cy - ry * 1.22, cx, cy - ry * 1.2);
    ctx.bezierCurveTo(cx + rx * 0.2, cy - ry * 1.22, cx + rx * 0.9, cy - ry * 1.1, cx + rx * 0.95, cy - ry * 0.55);
    ctx.bezierCurveTo(cx + rx * 0.55, cy - ry * 0.65, cx - rx * 0.55, cy - ry * 0.65, cx - rx * 0.95, cy - ry * 0.55);
    ctx.closePath();
  } else if (style === 'mohawk') {
    ctx.moveTo(cx - rx * 0.2, cy - ry * 0.65);
    ctx.bezierCurveTo(cx - rx * 0.15, cy - ry * 1.4, cx + rx * 0.15, cy - ry * 1.4, cx + rx * 0.2, cy - ry * 0.65);
    ctx.bezierCurveTo(cx + rx * 0.1, cy - ry * 0.75, cx - rx * 0.1, cy - ry * 0.75, cx - rx * 0.2, cy - ry * 0.65);
    ctx.closePath();
  } else if (style === 'pixie cut') {
    ctx.moveTo(cx - rx * 0.9, cy - ry * 0.55);
    ctx.bezierCurveTo(cx - rx * 0.85, cy - ry * 1.15, cx + rx * 0.85, cy - ry * 1.15, cx + rx * 0.9, cy - ry * 0.55);
    ctx.bezierCurveTo(cx + rx * 0.6, cy - ry * 0.62, cx - rx * 0.6, cy - ry * 0.62, cx - rx * 0.9, cy - ry * 0.55);
    ctx.closePath();
    // Side fringe
    ctx.moveTo(cx - rx * 0.8, cy - ry * 0.5);
    ctx.bezierCurveTo(cx - rx * 0.5, cy - ry * 0.3, cx - rx * 0.3, cy - ry * 0.15, cx - rx * 0.15, cy - ry * 0.05);
    ctx.bezierCurveTo(cx - rx * 0.4, cy - ry * 0.2, cx - rx * 0.65, cy - ry * 0.35, cx - rx * 0.8, cy - ry * 0.5);
  } else if (style === 'afro') {
    // Afro is mostly drawn in back, just a small front tuft
    ctx.arc(cx, cy - ry * 1.0, rx * 0.3, 0, Math.PI * 2);
  } else {
    // Default longer hair
    ctx.moveTo(cx - rx * 0.95, cy - ry * 0.55);
    ctx.bezierCurveTo(cx - rx * 0.88, cy - ry * 1.1, cx - rx * 0.15, cy - ry * 1.25, cx, cy - ry * 1.22);
    ctx.bezierCurveTo(cx + rx * 0.15, cy - ry * 1.25, cx + rx * 0.88, cy - ry * 1.1, cx + rx * 0.95, cy - ry * 0.55);
    ctx.bezierCurveTo(cx + rx * 0.5, cy - ry * 0.62, cx - rx * 0.5, cy - ry * 0.62, cx - rx * 0.95, cy - ry * 0.55);
    ctx.closePath();
  }
  ctx.fillStyle = grad;
  ctx.fill();

  // Hair shine
  ctx.beginPath();
  ctx.moveTo(cx - 15, cy - ry * 1.18);
  ctx.bezierCurveTo(cx - 6, cy - ry * 1.05, cx + 6, cy - ry * 0.9, cx + 10, cy - ry * 0.7);
  ctx.strokeStyle = hc.hi + '55';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.stroke();

  ctx.restore();
}

function drawLighting(ctx, cx, cy, rx, ry, W, H, skinLight) {
  ctx.save();

  // Key light from upper left
  const keyGrad = ctx.createRadialGradient(cx - rx * 0.35, cy - ry * 0.55, 2, cx - rx * 0.3, cy - ry * 0.2, rx * 0.9);
  keyGrad.addColorStop(0, 'rgba(255,245,230,0.2)');
  keyGrad.addColorStop(1, 'rgba(255,245,230,0)');
  ctx.beginPath();
  ctx.ellipse(cx - rx * 0.3, cy - ry * 0.2, rx * 0.85, ry * 0.75, 0, 0, Math.PI * 2);
  ctx.fillStyle = keyGrad;
  ctx.fill();

  // Fill light from right (softer)
  const fillGrad = ctx.createRadialGradient(cx + rx * 0.4, cy - ry * 0.1, 2, cx + rx * 0.3, cy, rx * 0.7);
  fillGrad.addColorStop(0, 'rgba(200,220,255,0.06)');
  fillGrad.addColorStop(1, 'rgba(200,220,255,0)');
  ctx.beginPath();
  ctx.ellipse(cx + rx * 0.3, cy, rx * 0.7, ry * 0.6, 0, 0, Math.PI * 2);
  ctx.fillStyle = fillGrad;
  ctx.fill();

  // Cheek flush
  for (const side of [-1, 1]) {
    const flushGrad = ctx.createRadialGradient(cx + side * rx * 0.55, cy + ry * 0.08, 2, cx + side * rx * 0.55, cy + ry * 0.08, 20);
    flushGrad.addColorStop(0, 'rgba(220,90,80,0.1)');
    flushGrad.addColorStop(1, 'rgba(220,90,80,0)');
    ctx.beginPath();
    ctx.ellipse(cx + side * rx * 0.55, cy + ry * 0.08, 20, 14, 0, 0, Math.PI * 2);
    ctx.fillStyle = flushGrad;
    ctx.fill();
  }

  ctx.restore();
}

function drawSSS(ctx, cx, cy, rx, ry, skinBase) {
  // Sub-surface scattering - ear/nose translucency
  ctx.save();
  ctx.globalAlpha = 0.06;

  // Ears SSS
  for (const side of [-1, 1]) {
    const ex = cx + side * (rx * 0.97);
    const sssGrad = ctx.createRadialGradient(ex, cy - 2, 1, ex, cy - 2, 15);
    sssGrad.addColorStop(0, '#ff8060');
    sssGrad.addColorStop(1, 'rgba(255,128,96,0)');
    ctx.beginPath();
    ctx.ellipse(ex, cy - 2, 15, 22, 0, 0, Math.PI * 2);
    ctx.fillStyle = sssGrad;
    ctx.fill();
  }

  // Nose tip SSS
  const noseGrad = ctx.createRadialGradient(cx, cy + ry * 0.1, 2, cx, cy + ry * 0.1, 12);
  noseGrad.addColorStop(0, '#ff9070');
  noseGrad.addColorStop(1, 'rgba(255,144,112,0)');
  ctx.beginPath();
  ctx.ellipse(cx, cy + ry * 0.1, 12, 10, 0, 0, Math.PI * 2);
  ctx.fillStyle = noseGrad;
  ctx.fill();

  ctx.globalAlpha = 1;
  ctx.restore();
}

function drawHUD(ctx, W, H) {
  ctx.save();
  ctx.strokeStyle = 'rgba(0,212,255,0.3)';
  ctx.lineWidth = 1;
  const cs = 14;
  for (const [x, y, sx, sy] of [[2,2,1,1],[W-2,2,-1,1],[2,H-2,1,-1],[W-2,H-2,-1,-1]]) {
    ctx.beginPath();
    ctx.moveTo(x + sx * cs, y);
    ctx.lineTo(x, y);
    ctx.lineTo(x, y + sy * cs);
    ctx.stroke();
  }

  // Crosshair
  ctx.strokeStyle = 'rgba(0,212,255,0.12)';
  ctx.lineWidth = 0.5;
  ctx.setLineDash([2, 4]);
  ctx.beginPath(); ctx.moveTo(W/2, 2); ctx.lineTo(W/2, H-2); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(2, H/2); ctx.lineTo(W-2, H/2); ctx.stroke();
  ctx.setLineDash([]);

  // Dimension labels
  ctx.font = '8px "Share Tech Mono", monospace';
  ctx.fillStyle = 'rgba(0,212,255,0.25)';
  ctx.fillText(W + '×' + H, 4, H - 4);
  ctx.fillText('FORENSIC PREVIEW', W - 105, H - 4);

  ctx.restore();
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  update();
});
