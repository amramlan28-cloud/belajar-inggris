"use strict";
// Kampung Inggris di Rumah — semua data tersimpan di browser (localStorage), per profil.

const KEY = "belajarInggris.v1";
const DAILY_NEW = 10;          // setoran kosakata baru per hari (ala Pare)
const DAILY_PHRASES = 5;       // target latihan ngomong per hari
const INTERVAL = [0, 1, 2, 4, 7, 15, 30]; // hari sampai diulang, per tingkat hafalan (box)
const MASTERED_BOX = 5;
const PASS_SPEAK = 80;
const PASS_DIALOG = 70;
const AVATARS = ["🦁", "🐼", "🐯", "🐰", "🦊", "🐨", "🐸", "🦉", "🐬", "🦄", "👨", "👩", "👦", "👧"];

// Urutkan materi per level (sort stabil, urutan dalam level tetap)
GRAMMAR.sort((a, b) => a.lv - b.lv);
DIALOGS.sort((a, b) => a.lv - b.lv);

// ---------- penyimpanan ----------
let DB = loadDB();
function loadDB() {
  try { return JSON.parse(localStorage.getItem(KEY)) || { profiles: [], current: null }; }
  catch { return { profiles: [], current: null }; }
}
function save() { localStorage.setItem(KEY, JSON.stringify(DB)); }
function me() { return DB.profiles.find(p => p.id === DB.current) || null; }

// ---------- util ----------
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const attr = s => esc(JSON.stringify(s));
function fmt(d) { return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; }
const today = () => fmt(new Date());
function addDays(str, n) { const d = new Date(str + "T00:00:00"); d.setDate(d.getDate() + n); return fmt(d); }
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function toast(msg) {
  const t = document.createElement("div"); t.className = "toast"; t.textContent = msg;
  document.body.appendChild(t); setTimeout(() => t.remove(), 1800);
}
function view(html) { $("app").innerHTML = html; renderHeader(); window.scrollTo(0, 0); }

function daily(p) {
  if (!p.daily || p.daily.date !== today()) p.daily = { date: today(), newWords: 0, vocabSessions: 0, phrases: [] };
  return p.daily;
}
function addXP(n) {
  const p = me(); if (!p) return;
  p.xp += n;
  const t = today();
  if (p.lastDay !== t) { p.streak = p.lastDay === addDays(t, -1) ? p.streak + 1 : 1; p.lastDay = t; }
  save();
}

// ---------- suara ----------
let VOICE = null;
function pickVoice() {
  const vs = speechSynthesis.getVoices();
  VOICE = vs.find(v => v.lang === "en-US" && /Natural|Google|Aria|Jenny|Zira/i.test(v.name))
    || vs.find(v => v.lang === "en-US") || vs.find(v => v.lang.startsWith("en")) || null;
}
if ("speechSynthesis" in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
function say(text, slow = false) {
  if (!("speechSynthesis" in window)) return Promise.resolve();
  speechSynthesis.cancel();
  return new Promise(res => {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US"; if (VOICE) u.voice = VOICE; u.rate = slow ? 0.6 : 0.9;
    u.onend = res; u.onerror = res; speechSynthesis.speak(u);
  });
}
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
function listen() {
  return new Promise((resolve, reject) => {
    if (!SR) return reject("unsupported");
    const r = new SR();
    r.lang = "en-US"; r.interimResults = false; r.maxAlternatives = 3;
    let done = false;
    r.onresult = e => { done = true; resolve([...e.results[0]].map(a => a.transcript)); };
    r.onerror = e => { done = true; reject(e.error); };
    r.onend = () => { if (!done) resolve([]); };
    r.start();
  });
}
const SR_ERRORS = {
  "not-allowed": "Izin mikrofon ditolak. Klik ikon gembok/mikrofon di kolom alamat browser lalu izinkan.",
  "no-speech": "Suara tidak terdengar. Coba bicara lebih keras dan dekat ke mikrofon.",
  "network": "Pengenalan suara butuh internet. Cek koneksi lalu coba lagi.",
  "audio-capture": "Mikrofon tidak ditemukan.",
};

// ---------- penilaian ucapan ----------
const NUM = { 0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten",
  11: "eleven", 12: "twelve", 20: "twenty", 80: "eighty", 100: "one hundred", 1000: "one thousand", 5000: "five thousand", 20000: "twenty thousand" };
const CONTR = { "i'm": "i am", "you're": "you are", "we're": "we are", "they're": "they are", "it's": "it is", "that's": "that is",
  "what's": "what is", "let's": "let us", "don't": "do not", "doesn't": "does not", "didn't": "did not", "isn't": "is not",
  "aren't": "are not", "can't": "can not", "cannot": "can not", "won't": "will not", "haven't": "have not", "hasn't": "has not",
  "i'll": "i will", "we'll": "we will", "i'd": "i would", "i've": "i have", "okay": "ok" };
function words(s) {
  s = s.toLowerCase().replace(/[’`]/g, "'");
  s = s.replace(/[a-z]+'[a-z]+|\bcannot\b|\bokay\b/g, m => CONTR[m] || m.replace(/'s$/, "s").replace("'", ""));
  s = s.replace(/(\d)[.,](\d{3})/g, "$1$2").replace(/%/g, " percent")
    .replace(/\d+/g, m => " " + (NUM[m] || m.split("").map(c => NUM[c]).join(" ")) + " ")
    .replace(/[^a-z0-9 ]+/g, " ");
  return s.split(/\s+/).filter(Boolean);
}
// LCS antar kata: berapa kata target yang terucap berurutan
function compare(target, heard) {
  const t = words(target), h = words(heard);
  const L = Array.from({ length: t.length + 1 }, () => new Array(h.length + 1).fill(0));
  for (let i = t.length - 1; i >= 0; i--)
    for (let j = h.length - 1; j >= 0; j--)
      L[i][j] = t[i] === h[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
  const ok = new Array(t.length).fill(false);
  for (let i = 0, j = 0; i < t.length && j < h.length;) {
    if (t[i] === h[j]) { ok[i] = true; i++; j++; } else if (L[i + 1][j] >= L[i][j + 1]) i++; else j++;
  }
  const extra = Math.max(0, h.length - t.length);  // ucapan kepanjangan sedikit mengurangi nilai
  const score = t.length ? Math.round(100 * L[0][0] / (t.length + extra * 0.5)) : 0;
  return { score, t, ok };
}
function bestCompare(target, alts) {
  let best = { score: 0, t: words(target), ok: [], heard: "" };
  for (const a of alts) { const r = compare(target, a); if (r.score >= best.score) best = { ...r, heard: a }; }
  return best;
}
function coloredWords(r) { return r.t.map((w, i) => `<span class="${r.ok[i] ? "w-ok" : "w-no"}">${esc(w)}</span>`).join(" "); }

// ---------- header ----------
function renderHeader() {
  const p = me();
  $("top").innerHTML = `<span class="brand" onclick="home()">🏫 Kampung Inggris di Rumah</span><span class="spacer"></span>` +
    (p ? `<span class="chip">${p.avatar} ${esc(p.name)}</span><span class="chip">Level: ${LEVEL_NAMES[p.level]}</span>
      <span class="chip">⭐ ${p.xp} XP</span><span class="chip">🔥 ${p.streak} hari</span>
      <button onclick="profiles()">Ganti profil</button>` : "");
}

// ---------- profil ----------
function profiles() {
  speechSynthesis?.cancel();
  DB.current = null; save();
  view(`<h1>Siapa yang mau belajar hari ini? 👋</h1>
    <div class="grid">
      ${DB.profiles.map(p => `<div class="tile center" onclick="pickProfile('${p.id}')">
        <div class="emo">${p.avatar}</div><div class="t">${esc(p.name)}</div>
        <div class="d">${LEVEL_NAMES[p.level]} · ⭐ ${p.xp} · 🔥 ${p.streak}</div></div>`).join("")}
      <div class="tile center" onclick="newProfile()"><div class="emo">➕</div><div class="t">Tambah anggota</div></div>
    </div>`);
}
function pickProfile(id) { DB.current = id; save(); home(); }
let newAvatar = AVATARS[0];
function newProfile() {
  view(`<div class="card"><h1>Tambah anggota keluarga</h1>
    <p>Nama:</p><input type="text" id="pname" maxlength="20" placeholder="contoh: Dina">
    <p>Pilih gambar:</p><div class="row avatars">${AVATARS.map(a =>
      `<button class="${a === newAvatar ? "sel" : ""}" onclick="newAvatar='${a}';document.querySelectorAll('.avatars button').forEach(b=>b.classList.toggle('sel',b.textContent==='${a}'))">${a}</button>`).join("")}</div>
    <p></p><div class="row"><button class="primary big" onclick="createProfile()">Simpan</button>
    <button onclick="profiles()">Batal</button></div></div>`);
  $("pname").focus();
}
function createProfile() {
  const name = $("pname").value.trim();
  if (!name) { toast("Isi nama dulu ya"); return; }
  const p = { id: "p" + Date.now(), name, avatar: newAvatar, level: 1, xp: 0, streak: 0, lastDay: null,
    words: {}, phrases: {}, grammar: {}, dialogs: {}, tested: false };
  DB.profiles.push(p); DB.current = p.id; save();
  placementIntro();
}
function deleteProfile() {
  const p = me();
  if (!confirm(`Hapus profil "${p.name}" beserta semua progresnya?`)) return;
  DB.profiles = DB.profiles.filter(x => x.id !== p.id); save(); profiles();
}

// ---------- tes penempatan ----------
let PT = null;
function placementIntro() {
  view(`<div class="card center"><h1>Tes Penempatan 📝</h1>
    <p>15 soal singkat untuk menentukan level yang pas. Tidak apa-apa kalau ada yang tidak tahu, pilih saja yang paling mirip.</p>
    <div class="row" style="justify-content:center"><button class="primary big" onclick="placementStart()">Mulai tes</button></div>
    <p class="muted">Atau pilih level sendiri:</p>
    <div class="row" style="justify-content:center">${[1, 2, 3].map(l => `<button onclick="setLevel(${l})">${LEVEL_NAMES[l]}</button>`).join("")}</div></div>`);
}
function setLevel(l) { const p = me(); p.level = l; p.tested = true; save(); home(); }
function placementStart() { PT = { i: 0, right: { 1: 0, 2: 0, 3: 0 } }; placementQ(); }
function placementQ() {
  const q = PLACEMENT[PT.i];
  view(`<div class="card"><p class="muted">Soal ${PT.i + 1} dari ${PLACEMENT.length}</p>
    <div class="bar"><div style="width:${100 * PT.i / PLACEMENT.length}%"></div></div>
    <h2>${esc(q.q)}</h2><div class="opts">${q.a.map((a, k) => `<button onclick="placementAns(${k})">${esc(a)}</button>`).join("")}</div></div>`);
}
function placementAns(k) {
  const q = PLACEMENT[PT.i];
  if (k === q.c) PT.right[q.lv]++;
  PT.i++;
  if (PT.i < PLACEMENT.length) return placementQ();
  const r = PT.right;
  const level = r[1] >= 4 && r[2] >= 4 && r[3] >= 3 ? 3 : r[1] >= 4 && r[2] >= 3 ? 2 : 1;
  const p = me(); p.level = level; p.tested = true; save();
  const total = r[1] + r[2] + r[3];
  view(`<div class="card center"><h1>Hasil Tes 🎉</h1><div class="score">${total} / ${PLACEMENT.length}</div>
    <p>Level kamu: <b style="font-size:24px">${LEVEL_NAMES[level]}</b></p>
    <p class="muted">Materi akan dimulai dari level ini. Level bisa diubah kapan saja dari menu Pengaturan.</p>
    <button class="primary big" onclick="home()">Mulai belajar ➡️</button></div>`);
}

// ---------- beranda ----------
function home() {
  const p = me(); if (!p) return profiles();
  if (!p.tested) return placementIntro();
  speechSynthesis?.cancel();
  const d = daily(p); save();
  const sess = buildVocabSession(p);
  const vocabDone = sess.fresh.length === 0 && sess.due.length === 0;
  const learned = Object.keys(p.words).length;
  const mastered = Object.values(p.words).filter(x => x.box >= MASTERED_BOX).length;
  const ph = Math.min(d.phrases.length, DAILY_PHRASES);
  view(`<h1>Halo, ${esc(p.name)}! ${p.avatar}</h1>
    <div class="card"><b>🎯 Target hari ini</b>
      <p>${vocabDone ? "✅" : "⬜"} Setoran kosakata ${vocabDone ? "selesai" : `(${sess.fresh.length} kata baru, ${sess.due.length} kata diulang)`}</p>
      <p>${ph >= DAILY_PHRASES ? "✅" : "⬜"} Latihan ngomong: ${ph} / ${DAILY_PHRASES} kalimat</p>
      <div class="bar"><div style="width:${((vocabDone ? 1 : 0) + ph / DAILY_PHRASES) * 50}%"></div></div>
      <p class="muted">Kosakata dipelajari: ${learned} · sudah hafal: ${mastered} · total materi: ${VOCAB.filter(v => v.lv <= p.level).length}</p>
    </div>
    <div class="grid">
      <div class="tile ${vocabDone ? "done" : ""}" onclick="vocabStart()"><div class="emo">📚</div><div class="t">Setoran Kosakata</div>
        <div class="d">Hafal ${DAILY_NEW} kata baru per hari, lalu setor (tes). Kata yang lupa diulang otomatis.</div></div>
      <div class="tile" onclick="speakList()"><div class="emo">🎤</div><div class="t">Latihan Ngomong</div>
        <div class="d">Dengar, tirukan, dan dapat nilai pengucapan.</div></div>
      <div class="tile" onclick="arrangeStart()"><div class="emo">🧱</div><div class="t">Susun Kalimat</div>
        <div class="d">Susun potongan kata jadi kalimat yang benar.</div></div>
      <div class="tile" onclick="dictateStart()"><div class="emo">🎧</div><div class="t">Dikte</div>
        <div class="d">Dengarkan kalimat, lalu ketik apa yang kamu dengar.</div></div>
      <div class="tile" onclick="dialogList()"><div class="emo">💬</div><div class="t">English Area</div>
        <div class="d">Percakapan: aplikasi jadi lawan bicara, kamu menjawab dengan suara.</div></div>
      <div class="tile" onclick="grammarList()"><div class="emo">🧩</div><div class="t">Grammar</div>
        <div class="d">Penjelasan singkat bahasa Indonesia + latihan.</div></div>
      <div class="tile" onclick="dictionary()"><div class="emo">📖</div><div class="t">Kamusku</div>
        <div class="d">Semua kata yang sudah dipelajari.</div></div>
      <div class="tile" onclick="settings()"><div class="emo">⚙️</div><div class="t">Pengaturan</div>
        <div class="d">Ubah level, tes ulang, hapus profil.</div></div>
    </div>`);
}
function settings() {
  const p = me();
  view(`<div class="card"><h1>Pengaturan ⚙️</h1>
    <p>Level sekarang: <b>${LEVEL_NAMES[p.level]}</b></p>
    <div class="row">${[1, 2, 3].map(l => `<button class="${l === p.level ? "primary" : ""}" onclick="setLevel(${l})">${LEVEL_NAMES[l]}</button>`).join("")}</div>
    <p></p><div class="row"><button onclick="placementStart()">📝 Tes penempatan ulang</button>
    <button class="red" onclick="deleteProfile()">🗑️ Hapus profil ini</button>
    <button onclick="home()">Kembali</button></div>
    <p class="muted">Pengenalan suara (🎤) bekerja di Google Chrome atau Microsoft Edge dan butuh internet. Fitur lain bisa offline.</p></div>`);
}

// ---------- setoran kosakata ----------
let VS = null;
function buildVocabSession(p) {
  const t = today(), d = daily(p);
  const pool = VOCAB.filter(v => v.lv <= p.level);
  const due = pool.filter(v => p.words[v.w] && p.words[v.w].due <= t);
  const fresh = pool.filter(v => !p.words[v.w])
    .sort((a, b) => (a.lv === p.level ? 0 : 1) - (b.lv === p.level ? 0 : 1));
  return { due: due.slice(0, 20), fresh: fresh.slice(0, Math.max(0, DAILY_NEW - d.newWords)) };
}
function vocabStart(extra = false) {
  const p = me();
  let { fresh, due } = buildVocabSession(p);
  if (extra) {
    fresh = [];
    due = shuffle(VOCAB.filter(v => p.words[v.w])).slice(0, 10);
  }
  if (!fresh.length && !due.length) {
    const any = Object.keys(p.words).length > 0;
    return view(`<div class="card center"><h1>Setoran hari ini sudah beres! 🎉</h1>
      <p>Kata baru berikutnya muncul besok. Kata yang sudah dipelajari akan diulang sesuai jadwal.</p>
      <div class="row" style="justify-content:center">${any ? `<button class="primary big" onclick="vocabStart(true)">Latihan tambahan</button>` : ""}
      <button class="big" onclick="home()">Kembali</button></div></div>`);
  }
  VS = { fresh, quiz: shuffle([...fresh, ...due]), i: 0, phase: fresh.length ? "learn" : "quiz", first: {}, wrongOnce: {}, right: 0, extra };
  VS.quiz = VS.quiz.map((v, k) => ({ v, type: k % 3 }));
  vocabStep();
}
function vocabStep() {
  if (VS.phase === "learn") {
    const v = VS.fresh[VS.i];
    view(`<p class="muted">Hafalan: kata ${VS.i + 1} dari ${VS.fresh.length}</p>
      <div class="bar"><div style="width:${100 * VS.i / VS.fresh.length}%"></div></div>
      <div class="card flash"><div class="emo">${v.e}</div>
        <div class="word">${esc(v.w)}</div><div class="mean">${esc(v.id)}</div>
        <div class="ex">"${esc(v.ex)}"</div>
        <p class="row" style="justify-content:center">
          <button onclick='say(${attr(v.w)})'>🔊 Kata</button><button onclick='say(${attr(v.w)},true)'>🐢 Pelan</button>
          <button onclick='say(${attr(v.ex)})'>🔊 Kalimat</button></p>
        <p class="muted">Ucapkan keras-keras 3 kali, seperti di kelas Pare 😉</p>
        <button class="primary big" onclick="vocabNext()">${VS.i + 1 < VS.fresh.length ? "Lanjut ➡️" : "Siap setor! 📝"}</button></div>`);
    say(v.w);
    return;
  }
  const item = VS.quiz[VS.i], v = item.v;
  const others = shuffle(VOCAB.filter(x => x.w !== v.w && x.id !== v.id)).slice(0, 2);
  const opts = shuffle([v, ...others]);
  // 0: arti → pilih kata Inggris, 1: dengar → pilih arti, 2: isi kalimat rumpang
  const blank = item.type === 2 ? blankSentence(v) : null;
  const askEnglish = item.type === 0 || (item.type === 2 && !blank);
  if (blank) {
    view(`<p class="muted">Setor: soal ${VS.i + 1} dari ${VS.quiz.length}</p>
      <div class="bar"><div style="width:${100 * VS.i / VS.quiz.length}%"></div></div>
      <div class="card"><div class="center"><h2>Lengkapi kalimatnya</h2>
        <p class="phrase" style="font-size:24px">${esc(blank)}</p></div>
      <div class="opts">${opts.map(o => `<button data-ok="${o.w === v.w}" onclick="vocabAnswer(this)">${esc(o.w)}</button>`).join("")}</div></div>`);
    return;
  }
  view(`<p class="muted">Setor: soal ${VS.i + 1} dari ${VS.quiz.length}</p>
    <div class="bar"><div style="width:${100 * VS.i / VS.quiz.length}%"></div></div>
    <div class="card"><div class="center">
      ${askEnglish ? `<div style="font-size:56px">${v.e}</div><h2>Bahasa Inggrisnya "${esc(v.id)}" adalah ...</h2>`
        : `<h2>Dengarkan, lalu pilih artinya</h2><button class="primary big" onclick='say(${attr(v.w)})'>🔊 Putar lagi</button>`}
    </div><div class="opts">${opts.map(o => `<button data-ok="${o.w === v.w}" onclick="vocabAnswer(this)">${esc(askEnglish ? o.w : o.id)}</button>`).join("")}</div></div>`);
  if (!askEnglish) say(v.w);
}
function blankSentence(v) {
  const pat = v.w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("\\b" + pat + "(s|es|ed|d)?\\b", "i");
  return re.test(v.ex) ? v.ex.replace(re, "_____") : null;
}
function vocabNext() { VS.i++; if (VS.i >= VS.fresh.length) { VS.phase = "quiz"; VS.i = 0; } vocabStep(); }
function vocabAnswer(btn) {
  const item = VS.quiz[VS.i], v = item.v, ok = btn.dataset.ok === "true";
  document.querySelectorAll(".opts button").forEach(b => { b.disabled = true; if (b.dataset.ok === "true") b.classList.add("ok"); });
  if (!ok) btn.classList.add("no");
  if (!(v.w in VS.first)) VS.first[v.w] = ok;
  if (ok) { VS.right++; addXP(5); say(item.type === 2 && blankSentence(v) ? v.ex : v.w); }
  else if (!VS.wrongOnce[v.w]) { VS.wrongOnce[v.w] = true; VS.quiz.push({ v, type: (item.type + 1) % 3 }); } // diulang di akhir
  setTimeout(() => { VS.i++; VS.i < VS.quiz.length ? vocabStep() : vocabFinish(); }, ok ? 900 : 1800);
}
function vocabFinish() {
  const p = me(), t = today(), d = daily(p);
  for (const [w, ok] of Object.entries(VS.first)) {
    const cur = p.words[w];
    if (!cur) { p.words[w] = { box: 1, due: addDays(t, INTERVAL[1]) }; d.newWords++; continue; }
    if (VS.extra) continue; // latihan tambahan tidak mengubah jadwal
    const box = ok ? Math.min(cur.box + 1, INTERVAL.length - 1) : 1;
    p.words[w] = { box, due: addDays(t, INTERVAL[box]) };
  }
  d.vocabSessions++; save();
  const total = Object.keys(VS.first).length, right = Object.values(VS.first).filter(Boolean).length;
  const wrong = Object.entries(VS.first).filter(([, ok]) => !ok).map(([w]) => VOCAB.find(v => v.w === w));
  view(`<div class="card center"><h1>${right === total ? "Sempurna! 🏆" : "Setoran selesai! 👏"}</h1>
    <div class="score">${right} / ${total}</div><p>benar di percobaan pertama</p>
    ${wrong.length ? `<p><b>Perlu diulang:</b></p><p>${wrong.map(v => `${v.e} <b>${esc(v.w)}</b> = ${esc(v.id)}`).join("<br>")}</p>` : ""}
    <button class="primary big" onclick="home()">Kembali ke beranda</button></div>`);
}

// ---------- latihan ngomong ----------
let SP = null;
function speakList() {
  const p = me();
  const list = PHRASES.map((x, i) => ({ ...x, i })).filter(x => x.lv <= p.level);
  view(`<h1>🎤 Latihan Ngomong</h1>
    ${SR ? "" : `<div class="card"><b>⚠️ Browser ini belum bisa mendengar suara.</b> Buka aplikasi di Google Chrome atau Microsoft Edge. Untuk sementara kamu bisa menilai sendiri.</div>`}
    <div class="card"><table class="list">${list.map(x => {
      const best = p.phrases[x.en];
      return `<tr><td>${best >= PASS_SPEAK ? "✅" : "⬜"}</td><td><b>${esc(x.en)}</b><br><span class="muted">${esc(x.id)}</span></td>
        <td><span class="badge">${LEVEL_NAMES[x.lv]}</span></td><td>${best != null ? best + "%" : ""}</td>
        <td><button class="primary" onclick="speakOpen(${x.i})">Latihan</button></td></tr>`;
    }).join("")}</table></div>
    <button onclick="home()">Kembali</button>`);
}
function speakOpen(i) {
  const p = me();
  const order = PHRASES.map((x, k) => ({ ...x, k })).filter(x => x.lv <= p.level).map(x => x.k);
  SP = { i, order };
  const x = PHRASES[i];
  view(`<div class="card center"><p class="muted">Dengarkan, lalu tirukan</p>
    <div class="phrase">${esc(x.en)}</div><p>${esc(x.id)}</p>
    <div class="row" style="justify-content:center">
      <button onclick='say(${attr(x.en)})'>🔊 Dengar</button><button onclick='say(${attr(x.en)},true)'>🐢 Pelan</button>
      ${SR ? `<button class="mic" id="micBtn" onclick="speakTry()">🎤 Bicara</button>`
        : `<button class="green" onclick="speakSelf()">✅ Sudah bisa mengucapkan</button>`}
    </div><div id="result" style="margin-top:16px"></div>
    <div class="row" style="justify-content:center;margin-top:10px">
      <button onclick="speakList()">Daftar kalimat</button><button class="primary" onclick="speakNext()">Kalimat berikutnya ➡️</button></div></div>`);
  say(x.en);
}
function speakNext() { const k = SP.order.indexOf(SP.i); speakOpen(SP.order[(k + 1) % SP.order.length]); }
function recordPhrase(en, score) {
  const p = me(), d = daily(p);
  const prev = p.phrases[en];
  p.phrases[en] = Math.max(prev || 0, score);
  if (score >= PASS_SPEAK) {
    if (!d.phrases.includes(en)) d.phrases.push(en);
    addXP(10);
  }
  save();
}
function speakSelf() { recordPhrase(PHRASES[SP.i].en, PASS_SPEAK); $("result").innerHTML = "<b>👍 Bagus! Lanjutkan.</b>"; }
async function speakTry() {
  const x = PHRASES[SP.i], btn = $("micBtn");
  speechSynthesis.cancel();
  btn.classList.add("on"); btn.textContent = "🎤 Mendengarkan..."; btn.disabled = true;
  try {
    const alts = await listen();
    if (!alts.length) { $("result").innerHTML = `<p>${SR_ERRORS["no-speech"]}</p>`; return; }
    const r = bestCompare(x.en, alts);
    recordPhrase(x.en, r.score);
    const msg = r.score >= 95 ? "Luar biasa! 🏆" : r.score >= PASS_SPEAK ? "Bagus! 👏" : r.score >= 50 ? "Hampir! Coba lagi 💪" : "Ayo coba lagi, dengarkan dulu contohnya 🔊";
    $("result").innerHTML = `<div class="score" style="color:${r.score >= PASS_SPEAK ? "#16a34a" : "#f59e0b"}">${r.score}%</div>
      <p><b>${msg}</b></p><p style="font-size:22px">${coloredWords(r)}</p>
      <p class="muted">Yang terdengar: "${esc(r.heard)}"</p>`;
  } catch (e) {
    $("result").innerHTML = `<p>${esc(SR_ERRORS[e] || "Gagal mendengar: " + e)}</p>`;
  } finally {
    btn.classList.remove("on"); btn.textContent = "🎤 Bicara"; btn.disabled = false;
  }
}

// ---------- English Area (percakapan) ----------
let DG = null;
function dialogList() {
  const p = me();
  view(`<h1>💬 English Area</h1><p class="muted">Aplikasi berperan sebagai <b>A</b>, kamu menjawab sebagai <b>B</b> dengan suara. Tidak boleh pakai bahasa Indonesia ya 😉</p>
    <div class="grid">${DIALOGS.map((g, i) => g.lv > p.level ? "" : `<div class="tile ${p.dialogs[g.title] ? "done" : ""}" onclick="dialogStart(${i})">
      <div class="emo">${g.e}</div><div class="t">${esc(g.title)}</div><div class="d"><span class="badge">${LEVEL_NAMES[g.lv]}</span> ${p.dialogs[g.title] ? "✅ selesai" : ""}</div></div>`).join("")}</div>
    <p></p><button onclick="home()">Kembali</button>`);
}
function dialogStart(i) { DG = { i, line: 0, hide: false, scores: [] }; dialogRender(); }
function dialogRender() {
  const g = DIALOGS[DG.i], cur = g.lines[DG.line];
  const shown = g.lines.slice(0, DG.line).map(([who, en, id]) =>
    `<div class="bubble ${who}"><b>${esc(en)}</b><div class="id">${esc(id)}</div></div>`).join("");
  let action = "";
  if (!cur) {
    const avg = DG.scores.length ? Math.round(DG.scores.reduce((a, b) => a + b, 0) / DG.scores.length) : 0;
    const p = me(); p.dialogs[g.title] = Math.max(p.dialogs[g.title] || 0, avg); save(); addXP(20);
    action = `<div class="card center"><h2>Percakapan selesai! 🎉</h2><div class="score">${avg}%</div><p>rata-rata pengucapan</p>
      <div class="row" style="justify-content:center"><button class="primary" onclick="dialogStart(${DG.i})">Ulangi</button>
      <button onclick="dialogList()">Pilih percakapan lain</button></div></div>`;
  } else if (cur[0] === "A") {
    action = `<div class="center"><p class="muted">A sedang bicara...</p></div>`;
  } else {
    action = `<div class="card center"><p><b>Giliranmu!</b> Ucapkan:</p>
      ${DG.hide ? `<p class="phrase" style="font-size:22px">🇮🇩 ${esc(cur[2])}</p><p class="muted">Mode tantangan: terjemahkan sendiri ke bahasa Inggris</p>`
        : `<div class="phrase" style="font-size:24px">${esc(cur[1])}</div><p class="muted">${esc(cur[2])}</p>`}
      <div class="row" style="justify-content:center">
        <button onclick='say(${attr(cur[1])})'>🔊 Contoh</button>
        ${SR ? `<button class="mic" id="micBtn" onclick="dialogTry()">🎤 Jawab</button>` : `<button class="green" onclick="dialogAdvance(${PASS_DIALOG})">✅ Sudah saya ucapkan</button>`}
        <button onclick="dialogAdvance(0)">Lewati</button></div>
      <label class="muted"><input type="checkbox" ${DG.hide ? "checked" : ""} onchange="DG.hide=this.checked;dialogRender()"> Mode tantangan (sembunyikan teks Inggris)</label>
      <div id="result"></div></div>`;
  }
  view(`<h1>${g.e} ${esc(g.title)}</h1><div class="card chat" id="dialogView">${shown || '<span class="muted">Percakapan dimulai...</span>'}</div>${action}
    <p></p><button onclick="DG=null;speechSynthesis.cancel();dialogList()">Keluar</button>`);
  if (cur && cur[0] === "A") {
    const at = DG.line, dg = DG;
    say(cur[1]).then(() => setTimeout(() => { if (DG === dg && DG.line === at && $("dialogView")) { DG.line++; dialogRender(); } }, 400));
  }
}
function dialogAdvance(score) { DG.scores.push(score); DG.line++; dialogRender(); }
async function dialogTry() {
  const cur = DIALOGS[DG.i].lines[DG.line], btn = $("micBtn");
  btn.classList.add("on"); btn.textContent = "🎤 Mendengarkan..."; btn.disabled = true;
  try {
    const alts = await listen();
    if (!alts.length) { $("result").innerHTML = `<p>${SR_ERRORS["no-speech"]}</p>`; return; }
    const r = bestCompare(cur[1], alts);
    if (r.score >= PASS_DIALOG) {
      $("result").innerHTML = `<p class="w-ok">👍 ${r.score}%</p>`;
      setTimeout(() => dialogAdvance(r.score), 900);
    } else {
      $("result").innerHTML = `<p><b>${r.score}%</b>, coba lagi ya 💪</p><p style="font-size:20px">${coloredWords(r)}</p>
        <p class="muted">Yang terdengar: "${esc(r.heard)}"</p>`;
    }
  } catch (e) {
    $("result").innerHTML = `<p>${esc(SR_ERRORS[e] || "Gagal mendengar: " + e)}</p>`;
  } finally {
    if (btn.isConnected) { btn.classList.remove("on"); btn.textContent = "🎤 Jawab"; btn.disabled = false; }
  }
}

// ---------- grammar ----------
let GQ = null;
function grammarList() {
  const p = me();
  view(`<h1>🧩 Grammar</h1><div class="grid">${GRAMMAR.map((g, i) => {
    const s = p.grammar[g.title];
    return `<div class="tile ${s === g.quiz.length ? "done" : ""}" onclick="grammarOpen(${i})"><div class="emo">${g.e}</div>
      <div class="t">${esc(g.title)}</div><div class="d"><span class="badge">${LEVEL_NAMES[g.lv]}</span> ${s != null ? `nilai terbaik ${s}/${g.quiz.length}` : ""}</div></div>`;
  }).join("")}</div><p></p><button onclick="home()">Kembali</button>`);
}
function grammarOpen(i) {
  const g = GRAMMAR[i];
  view(`<div class="card lesson"><h1>${g.e} ${esc(g.title)}</h1>${g.body}
    <p></p><div class="row"><button class="primary big" onclick="grammarQuiz(${i})">Latihan soal 📝</button>
    <button onclick="grammarList()">Kembali</button></div></div>`);
}
function grammarQuiz(i) { GQ = { i, k: 0, right: 0 }; grammarQ(); }
function grammarQ() {
  const g = GRAMMAR[GQ.i], [q, opts, c] = g.quiz[GQ.k];
  view(`<p class="muted">${esc(g.title)} · soal ${GQ.k + 1} dari ${g.quiz.length}</p>
    <div class="bar"><div style="width:${100 * GQ.k / g.quiz.length}%"></div></div>
    <div class="card"><h2>${esc(q)}</h2><div class="opts">${opts.map((o, k) =>
      `<button data-ok="${k === c}" onclick="grammarAns(this)">${esc(o)}</button>`).join("")}</div></div>`);
}
function grammarAns(btn) {
  const g = GRAMMAR[GQ.i], [q, opts, c] = g.quiz[GQ.k], ok = btn.dataset.ok === "true";
  document.querySelectorAll(".opts button").forEach(b => { b.disabled = true; if (b.dataset.ok === "true") b.classList.add("ok"); });
  if (ok) { GQ.right++; addXP(5); say(q.includes("___") ? q.replace("___", opts[c]) : opts[c]); }
  else btn.classList.add("no");
  setTimeout(() => {
    GQ.k++;
    if (GQ.k < g.quiz.length) return grammarQ();
    const p = me(); p.grammar[g.title] = Math.max(p.grammar[g.title] || 0, GQ.right); save();
    view(`<div class="card center"><h1>${GQ.right === g.quiz.length ? "Sempurna! 🏆" : "Selesai! 👏"}</h1>
      <div class="score">${GQ.right} / ${g.quiz.length}</div>
      <div class="row" style="justify-content:center"><button onclick="grammarOpen(${GQ.i})">Baca materi lagi</button>
      <button class="primary" onclick="grammarQuiz(${GQ.i})">Ulangi soal</button><button onclick="grammarList()">Materi lain</button></div></div>`);
  }, ok ? 1200 : 2000);
}

// ---------- susun kalimat ----------
let SK = null;
const tokens = s => s.replace(/[.!?]+$/, "").split(/\s+/);
function pickPhrases(n, maxWords = 99) {
  const p = me();
  return shuffle(PHRASES.filter(x => x.lv <= p.level && tokens(x.en).length <= maxWords)).slice(0, n);
}
function arrangeStart() { SK = { list: pickPhrases(8, 10), i: 0, right: 0 }; arrangeNew(); }
function arrangeNew() {
  if (SK.i >= SK.list.length) {
    return view(`<div class="card center"><h1>Selesai! 🧱</h1><div class="score">${SK.right} / ${SK.list.length}</div>
      <p>kalimat benar di percobaan pertama</p><div class="row" style="justify-content:center">
      <button class="primary big" onclick="arrangeStart()">Main lagi</button><button class="big" onclick="home()">Beranda</button></div></div>`);
  }
  const t = tokens(SK.list[SK.i].en);
  let bank = shuffle(t);
  for (let n = 0; n < 5 && t.length > 1 && bank.join(" ") === t.join(" "); n++) bank = shuffle(t);
  Object.assign(SK, { bank, picked: [], tries: 0, done: false });
  arrangeRender();
}
function arrangeRender(msg = "") {
  const x = SK.list[SK.i];
  view(`<p class="muted">Susun Kalimat · ${SK.i + 1} dari ${SK.list.length}</p>
    <div class="bar"><div style="width:${100 * SK.i / SK.list.length}%"></div></div>
    <div class="card center"><p class="muted">Artinya:</p><h2>🇮🇩 ${esc(x.id)}</h2>
      <div class="answer">${SK.picked.map((k, j) => `<button class="chip-w sel" onclick="arrangeUnpick(${j})" ${SK.done ? "disabled" : ""}>${esc(SK.bank[k])}</button>`).join("") || '<span class="muted">Ketuk kata di bawah sesuai urutan</span>'}</div>
      <div class="wordbank">${SK.bank.map((w, k) => SK.picked.includes(k) ? "" : `<button class="chip-w" onclick="arrangePick(${k})">${esc(w)}</button>`).join("")}</div>
      <div id="result">${msg}</div>
      <div class="row" style="justify-content:center;margin-top:10px">
        ${SK.done ? `<button class="primary big" onclick="SK.i++;arrangeNew()">Lanjut ➡️</button>`
          : `<button onclick="SK.picked=[];arrangeRender()">Ulang</button>
             <button class="green big" onclick="arrangeCheck()" ${SK.picked.length === SK.bank.length ? "" : "disabled"}>Cek ✔️</button>`}
      </div></div><button onclick="home()">Keluar</button>`);
}
function arrangePick(k) { SK.picked.push(k); arrangeRender(); }
function arrangeUnpick(j) { SK.picked.splice(j, 1); arrangeRender(); }
function arrangeCheck() {
  const x = SK.list[SK.i], target = tokens(x.en).join(" ");
  const ok = SK.picked.map(k => SK.bank[k]).join(" ") === target;
  SK.tries++;
  if (ok) {
    if (SK.tries === 1) SK.right++;
    SK.done = true; addXP(5); say(x.en);
    return arrangeRender(`<p class="w-ok" style="font-size:22px">Benar! 🎉</p>`);
  }
  if (SK.tries >= 2) {
    SK.done = true; say(x.en);
    return arrangeRender(`<p>Jawaban yang benar:</p><p class="phrase" style="font-size:22px">${esc(x.en)}</p>`);
  }
  SK.picked = [];
  arrangeRender(`<p class="w-no">Belum tepat, coba sekali lagi 💪</p>`);
}

// ---------- dikte ----------
let DK = null;
function dictateStart() { DK = { list: pickPhrases(8), i: 0, scores: [], checked: -1 }; dictateStep(); }
function dictateStep() {
  if (DK.i >= DK.list.length) {
    const avg = Math.round(DK.scores.reduce((a, b) => a + b, 0) / DK.scores.length);
    return view(`<div class="card center"><h1>Dikte selesai! 🎧</h1><div class="score">${avg}%</div><p>rata-rata ketepatan</p>
      <div class="row" style="justify-content:center"><button class="primary big" onclick="dictateStart()">Main lagi</button>
      <button class="big" onclick="home()">Beranda</button></div></div>`);
  }
  const x = DK.list[DK.i];
  view(`<p class="muted">Dikte · ${DK.i + 1} dari ${DK.list.length}</p>
    <div class="bar"><div style="width:${100 * DK.i / DK.list.length}%"></div></div>
    <div class="card center"><h2>Dengarkan, lalu ketik kalimatnya</h2>
      <div class="row" style="justify-content:center"><button class="primary big" onclick='say(${attr(x.en)})'>🔊 Dengar</button>
      <button class="big" onclick='say(${attr(x.en)},true)'>🐢 Pelan</button></div><p></p>
      <input type="text" id="dictIn" style="max-width:100%" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="ketik di sini..."
        onkeydown="if(event.key==='Enter')dictateCheck()">
      <div id="result"></div>
      <div class="row" style="justify-content:center;margin-top:10px" id="dictBtns">
        <button class="green big" onclick="dictateCheck()">Cek ✔️</button></div></div>
    <button onclick="home()">Keluar</button>`);
  say(x.en);
  $("dictIn").focus();
}
function dictateCheck() {
  const x = DK.list[DK.i], typed = $("dictIn").value.trim();
  if (!typed) { toast("Ketik dulu ya"); return; }
  if (DK.checked === DK.i) return;
  DK.checked = DK.i;
  const r = compare(x.en, typed);
  DK.scores.push(r.score);
  if (r.score >= PASS_SPEAK) addXP(5);
  $("dictIn").disabled = true;
  $("result").innerHTML = `<div class="score" style="color:${r.score >= PASS_SPEAK ? "#16a34a" : "#f59e0b"}">${r.score}%</div>
    <p style="font-size:20px">${coloredWords(r)}</p><p><b>${esc(x.en)}</b><br><span class="muted">${esc(x.id)}</span></p>`;
  $("dictBtns").innerHTML = `<button class="primary big" onclick="DK.i++;dictateStep()">Lanjut ➡️</button>`;
}

// ---------- kamus ----------
function dictionary() {
  const p = me();
  const list = VOCAB.filter(v => p.words[v.w]);
  view(`<h1>📖 Kamusku (${list.length} kata)</h1>
    <div class="card">${list.length ? `<table class="list"><tr><th></th><th>Kata</th><th>Arti</th><th>Hafalan</th><th></th></tr>
      ${list.map(v => `<tr><td>${v.e}</td><td><b>${esc(v.w)}</b></td><td>${esc(v.id)}</td>
        <td>${"⭐".repeat(Math.min(p.words[v.w].box, MASTERED_BOX))}</td><td><button onclick='say(${attr(v.w)})'>🔊</button></td></tr>`).join("")}</table>`
      : `<p>Belum ada kata. Mulai dari <b>Setoran Kosakata</b> dulu ya.</p>`}</div>
    <p class="muted">⭐ bertambah setiap kali kata berhasil disetor saat diulang. 5 bintang = sudah hafal.</p>
    <button onclick="home()">Kembali</button>`);
}

// ---------- mulai ----------
me() ? home() : profiles();
