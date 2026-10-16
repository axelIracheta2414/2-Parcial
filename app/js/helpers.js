/* =========================================================
   Helpers: DOM, storage, answer checking, speech, markup
   ========================================================= */
window.DATA = window.DATA || { topics: [], readings: [], verbs: {}, writing: {}, oral: {} };

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function h(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

/* ---------- persistent storage ---------- */
const store = {
  prefix: 'ep2_',
  get(k, def) {
    try { const v = localStorage.getItem(this.prefix + k); return v === null ? def : JSON.parse(v); }
    catch (e) { return def; }
  },
  set(k, v) { try { localStorage.setItem(this.prefix + k, JSON.stringify(v)); } catch (e) { /* storage full or blocked */ } },
  del(k) { try { localStorage.removeItem(this.prefix + k); } catch (e) { } }
};

/* ---------- array utils ---------- */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
const sample = (arr, n) => shuffle(arr).slice(0, n);

/* ---------- answer normalisation ----------
   Accepts contractions, curly/Spanish apostrophes (´), extra spaces,
   punctuation and capitalisation differences. "'s" is tested as both
   "has" and "is" so "He's finished" == "He has finished".            */
function norm(s) {
  let x = String(s || '').toLowerCase()
    .replace(/[’´`‘]/g, "'")
    .replace(/\s+/g, ' ').trim();
  x = x.replace(/\bwon't\b/g, 'will not')
    .replace(/\bcan't\b/g, 'can not')
    .replace(/\bcannot\b/g, 'can not')
    .replace(/n't\b/g, ' not')
    .replace(/'ve\b/g, ' have')
    .replace(/'re\b/g, ' are')
    .replace(/\bi'm\b/g, 'i am')
    .replace(/'ll\b/g, ' will')
    .replace(/'d\b/g, ' had');
  x = x.replace(/[.,!?;:"¿¡()…]/g, ' ').replace(/\s+/g, ' ').trim();
  return x;
}
function variants(s) {
  const n = norm(s);
  const out = new Set([n]);
  if (/'s\b/.test(n)) {
    out.add(n.replace(/'s\b/g, ' has').replace(/\s+/g, ' '));
    out.add(n.replace(/'s\b/g, ' is').replace(/\s+/g, ' '));
  }
  return [...out];
}
function isMatch(user, answers) {
  const list = Array.isArray(answers) ? answers : [answers];
  const uv = variants(user);
  return list.some(a => variants(a).some(av => uv.includes(av)));
}

/* ---------- inline grammar markup ----------
   [ps:went] [pc:was working] [pp:have seen] [pv:was invented]
   [sf:since] [ad:already]   {word|traducción}   **bold**          */
function mk(str) {
  if (str == null) return '';
  return String(str)
    .replace(/\[(ps|pc|pp|pv|sf|ad):([^\]]+)\]/g, '<span class="hl-$1">$2</span>')
    .replace(/\{([^|{}]+)\|([^{}]+)\}/g, '<span class="gloss" tabindex="0">$1<span class="gl-pop">$2</span></span>')
    .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
}
function stripMk(str) {
  return String(str || '')
    .replace(/\[(ps|pc|pp|pv|sf|ad):([^\]]+)\]/g, '$2')
    .replace(/\{([^|{}]+)\|([^{}]+)\}/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/<[^>]+>/g, '');
}

/* ---------- speech synthesis ---------- */
const tts = {
  voice: null,
  ready: false,
  init() {
    if (!('speechSynthesis' in window)) return;
    const pick = () => {
      const vs = speechSynthesis.getVoices();
      this.voice = vs.find(v => /en[-_]US/i.test(v.lang) && /Google|Natural|Microsoft (Aria|Jenny|Guy)/i.test(v.name))
        || vs.find(v => /en[-_](US|GB)/i.test(v.lang))
        || vs.find(v => /^en/i.test(v.lang)) || null;
      this.ready = true;
    };
    pick();
    speechSynthesis.onvoiceschanged = pick;
  },
  speak(text, { rate = 0.95, onend, onboundary } = {}) {
    if (!('speechSynthesis' in window)) { toast('Tu navegador no soporta lectura en voz alta'); return null; }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(stripMk(text));
    u.lang = 'en-US';
    if (this.voice) u.voice = this.voice;
    u.rate = rate;
    if (onend) u.onend = onend;
    if (onboundary) u.onboundary = onboundary;
    speechSynthesis.speak(u);
    return u;
  },
  stop() { if ('speechSynthesis' in window) speechSynthesis.cancel(); }
};
tts.init();

function speakBtn(text, label = '🔊') {
  return `<button class="speak-btn" type="button" data-say="${esc(stripMk(text))}" title="Escuchar pronunciación" aria-label="Escuchar">${label}</button>`;
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-say]');
  if (b) { e.preventDefault(); e.stopPropagation(); tts.speak(b.dataset.say, { rate: 0.9 }); }
  const g = e.target.closest('.gloss');
  $$('.gloss.show').forEach(x => { if (x !== g) x.classList.remove('show'); });
  if (g) g.classList.toggle('show');
});

/* ---------- speech recognition (Chrome / Edge / Android) ---------- */
function getRecognizer() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) return null;
  const r = new SR();
  r.lang = 'en-US';
  r.interimResults = true;
  r.continuous = true;
  return r;
}

/* ---------- UI feedback ---------- */
let toastTimer;
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2400);
}

function confetti() {
  const wrap = document.createElement('div');
  wrap.className = 'confetti';
  const colors = ['#a78bfa', '#22d3ee', '#f472b6', '#fbbf24', '#34d399'];
  for (let i = 0; i < 90; i++) {
    const p = document.createElement('i');
    p.style.left = Math.random() * 100 + 'vw';
    p.style.background = colors[i % colors.length];
    p.style.animationDuration = (1.8 + Math.random() * 1.8) + 's';
    p.style.animationDelay = (Math.random() * .5) + 's';
    p.style.transform = `rotate(${Math.random() * 360}deg)`;
    wrap.appendChild(p);
  }
  document.body.appendChild(wrap);
  setTimeout(() => wrap.remove(), 4200);
}

function wordCount(text) {
  const m = String(text || '').trim().match(/[A-Za-zÀ-ÿ0-9]+(?:['’´-][A-Za-zÀ-ÿ0-9]+)*/g);
  return m ? m.length : 0;
}

function fmtTime(sec) {
  sec = Math.max(0, Math.round(sec));
  return `${String(Math.floor(sec / 60)).padStart(2, '0')}:${String(sec % 60).padStart(2, '0')}`;
}
