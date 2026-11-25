// Materi tambahan (paket 3): topik baru agar lebih bervariasi.

const VOCAB_EXTRA2 = {
  1: {
    "Isi Rumah": [
      "chair|kursi|Sit on the chair.|🪑", "bed|tempat tidur|My bed is soft.|🛏️", "window|jendela|Open the window, please.|🪟",
      "kitchen|dapur|Mom is in the kitchen.|🍳", "bathroom|kamar mandi|The bathroom is clean.|🚿", "lamp|lampu|Turn on the lamp.|💡",
      "clock|jam dinding|The clock is on the wall.|🕰️", "television|televisi|We watch television together.|📺",
    ],
    "Olahraga & Main": [
      "ball|bola|Kick the ball!|⚽", "kite|layang-layang|I fly a kite in the field.|🪁", "jump|melompat|The frog can jump high.|🐸",
      "win|menang|Our team wins the game.|🏆", "lose|kalah|It's okay to lose sometimes.|🙃", "team|tim|We are a good team.|👫",
      "toy|mainan|This is my favorite toy.|🧸", "doll|boneka|She has a pretty doll.|🪆",
    ],
    "Hewan 2": [
      "monkey|monyet|The monkey climbs the tree.|🐒", "elephant|gajah|The elephant is very big.|🐘", "tiger|harimau|The tiger is strong.|🐯",
      "rabbit|kelinci|The rabbit eats carrots.|🐰", "duck|bebek|The duck swims in the pond.|🦆", "horse|kuda|The horse runs fast.|🐴",
      "snake|ular|Be careful, there is a snake!|🐍", "butterfly|kupu-kupu|The butterfly is beautiful.|🦋",
    ],
    "Hari & Bulan": [
      "Monday|Senin|I go to school on Monday.|1️⃣", "Friday|Jumat|We pray together on Friday.|5️⃣", "Sunday|Minggu|We relax on Sunday.|7️⃣",
      "January|Januari|The year starts in January.|🎆", "August|Agustus|We celebrate Independence Day in August.|🇮🇩", "birthday|ulang tahun|Happy birthday to you!|🎂",
      "holiday|liburan|We go to the beach on holiday.|🏖️", "weekend|akhir pekan|See you on the weekend.|🎉",
    ],
    "Lawan Kata": [
      "hot|panas|The tea is hot.|🔥", "cold|dingin|The ice is cold.|🧊", "old|tua / lama|My bike is old.|👴",
      "new|baru|I have new shoes.|✨", "full|penuh / kenyang|The glass is full.|🥤", "empty|kosong|The box is empty.|📭",
      "wet|basah|My shirt is wet.|💦", "dirty|kotor|My shoes are dirty.|🥾",
    ],
  },
  2: {
    "Di Rumah Makan": [
      "menu|daftar menu|Can I see the menu, please?|📜", "spicy|pedas|This soup is very spicy.|🌶️", "sweet|manis|The cake is too sweet.|🍰",
      "salty|asin|The fish is a bit salty.|🧂", "bill|bon / tagihan|Can I have the bill, please?|🧾", "waiter|pelayan|The waiter is very friendly.|🧑‍🍳",
      "take away|dibungkus|One fried rice to take away, please.|🥡", "fork|garpu|I eat with a spoon and fork.|🍴",
    ],
    "Teknologi": [
      "phone|telepon / HP|My phone battery is low.|📱", "charge|mengisi daya|I need to charge my phone.|🔌", "laptop|laptop|I do my homework on the laptop.|💻",
      "password|kata sandi|Don't share your password.|🔑", "download|mengunduh|Download the file first.|⬇️", "message|pesan|I sent you a message.|💬",
      "internet|internet|The internet is slow today.|🌐", "screen|layar|The screen is too bright.|🖥️",
    ],
    "Lingkungan": [
      "trash|sampah|Throw the trash in the bin.|🗑️", "plastic|plastik|Use less plastic.|🛍️", "recycle|mendaur ulang|We recycle old paper.|♻️",
      "air|udara|The air is fresh in the morning.|🌬️", "forest|hutan|Many animals live in the forest.|🌲", "river|sungai|Don't throw trash in the river.|🏞️",
      "save|menghemat / menyelamatkan|Save water, please.|💧", "plant|menanam / tanaman|Let's plant a tree.|🌱",
    ],
    "Kata Kerja Harian 3": [
      "wait|menunggu|Please wait a moment.|⏳", "bring|membawa|Bring your umbrella.|☂️", "borrow|meminjam|Can I borrow your book?|📗",
      "forget|lupa|Don't forget your homework.|🤦", "remember|ingat|I remember your name.|🧠", "try|mencoba|Try again, you can do it!|💪",
      "finish|menyelesaikan|I finish my homework at seven.|🏁", "arrive|tiba|We arrive at nine.|🛬", "leave|berangkat / meninggalkan|The bus leaves at six.|🚏",
    ],
    "Ungkapan Sehari-hari": [
      "never mind|tidak apa-apa|Never mind, it's okay.|🙂", "good luck|semoga berhasil|Good luck with your test!|🍀", "congratulations|selamat (atas prestasi)|Congratulations on your new job!|🎊",
      "of course|tentu saja|Of course I will help you.|👌", "hurry up|cepat / ayo buruan|Hurry up, we are late!|🏃‍♂️", "be quiet|tolong tenang|Be quiet, the baby is sleeping.|🤫",
      "watch out|awas|Watch out! There is a car.|⚠️", "no problem|tidak masalah|No problem, I can do it.|👍",
    ],
  },
  3: {
    "Rekrutmen & SDM": [
      "interview|wawancara|I have a job interview tomorrow.|🎙️", "experience|pengalaman|She has five years of experience.|📚", "skill|keahlian|Communication is an important skill.|🛠️",
      "salary|gaji|The salary is paid every month.|💰", "training|pelatihan|New staff need training.|🧑‍🏫", "overtime|lembur|We worked overtime last night.|🌙",
      "leave request|pengajuan cuti|I submitted a leave request.|🏝️", "promotion at work|kenaikan jabatan|He got a promotion at work.|🪜",
    ],
    "Presentasi": [
      "slide|slide|Please look at the next slide.|🖼️", "chart|grafik|This chart shows our sales.|📊", "data|data|The data comes from last month.|🗃️",
      "highlight|menyoroti|I want to highlight three points.|🖍️", "conclusion|kesimpulan|In conclusion, sales are growing.|🔚", "question|pertanyaan|Are there any questions?|🙋",
      "audience|hadirin / penonton|Thank you to the audience.|👥", "goal|tujuan|Our goal is to grow by twenty percent.|🥅",
    ],
    "Online Meeting": [
      "mute|mematikan suara mic|Please mute your microphone.|🔇", "share screen|berbagi layar|Can you share your screen?|🖥️", "connection|koneksi|Sorry, my connection is bad.|📶",
      "link|tautan|I will send the meeting link.|🔗", "join|bergabung|Please join the meeting at ten.|➕", "record|merekam|Is this meeting recorded?|⏺️",
      "camera|kamera|Please turn on your camera.|📹", "can you hear me|apakah suara saya terdengar|Hello, can you hear me?|🎧",
    ],
    "Kontrak & Kesepakatan": [
      "contract|kontrak|Please sign the contract.|✍️", "deal|kesepakatan|We have a deal.|🤝", "negotiate|bernegosiasi|We need to negotiate the price.|⚖️",
      "terms|syarat / ketentuan|Please read the terms carefully.|📄", "approve|menyetujui|The director approved the budget.|🆗", "reject|menolak|They rejected our offer.|🙅",
      "offer|penawaran|Thank you for your offer.|📨", "signature|tanda tangan|We need your signature here.|🖋️",
    ],
    "Kata Kerja Laporan": [
      "show|menunjukkan|The report shows a big increase.|👀", "reach|mencapai|We reached our target in March.|🏔️", "drop|turun tajam|Sales dropped in February.|📉",
      "remain|tetap|Prices remained stable.|➖", "achieve|meraih|We achieved great results.|🏅", "analyze|menganalisis|Let's analyze the sales data.|🔬",
      "forecast|memperkirakan / prakiraan|We forecast higher demand next month.|🔮", "review|meninjau|Please review the document.|🧐",
    ],
  },
};
for (const lv of Object.keys(VOCAB_EXTRA2)) {
  for (const [cat, items] of Object.entries(VOCAB_EXTRA2[lv])) {
    for (const s of items) {
      const [w, id, ex, e] = s.split("|");
      VOCAB.push({ w, id, ex, e, lv: Number(lv), cat });
    }
  }
}

PHRASES.push(
  { lv: 1, en: "Happy birthday to you!", id: "Selamat ulang tahun!" },
  { lv: 1, en: "Let's play together.", id: "Ayo main bersama." },
  { lv: 1, en: "I love my mom and dad.", id: "Aku sayang ibu dan ayah." },
  { lv: 1, en: "The elephant is very big.", id: "Gajahnya besar sekali." },
  { lv: 1, en: "Today is Monday.", id: "Hari ini hari Senin." },
  { lv: 1, en: "Please turn on the lamp.", id: "Tolong nyalakan lampunya." },
  { lv: 1, en: "My shoes are dirty.", id: "Sepatuku kotor." },
  { lv: 1, en: "I want to drink cold water.", id: "Aku mau minum air dingin." },
  { lv: 2, en: "Can I have the bill, please?", id: "Boleh minta bonnya?" },
  { lv: 2, en: "Not too spicy, please.", id: "Jangan terlalu pedas ya." },
  { lv: 2, en: "Don't forget to bring your umbrella.", id: "Jangan lupa bawa payung." },
  { lv: 2, en: "Good luck with your exam!", id: "Semoga sukses ujiannya!" },
  { lv: 2, en: "Congratulations on your new house!", id: "Selamat atas rumah barunya!" },
  { lv: 2, en: "Please throw the trash in the bin.", id: "Tolong buang sampah di tempatnya." },
  { lv: 2, en: "My phone battery is almost empty.", id: "Baterai HP saya hampir habis." },
  { lv: 2, en: "Hurry up, we are late!", id: "Ayo cepat, kita terlambat!" },
  { lv: 3, en: "Can you hear me clearly?", id: "Apakah suara saya terdengar jelas?" },
  { lv: 3, en: "Sorry, you are on mute.", id: "Maaf, mic Anda masih mati." },
  { lv: 3, en: "Let me share my screen.", id: "Saya bagikan layar saya." },
  { lv: 3, en: "As you can see in this chart, sales went up.", id: "Seperti terlihat di grafik ini, penjualan naik." },
  { lv: 3, en: "Are there any questions?", id: "Ada pertanyaan?" },
  { lv: 3, en: "Could you tell me about your experience?", id: "Bisa ceritakan pengalaman Anda?" },
  { lv: 3, en: "We need to negotiate the terms of the contract.", id: "Kita perlu negosiasi syarat kontraknya." },
  { lv: 3, en: "The director has approved the budget.", id: "Direktur sudah menyetujui anggarannya." },
);

DIALOGS.push(
  { lv: 1, title: "Ulang Tahun", e: "🎂", lines: [
    ["A", "Happy birthday, Rani!", "Selamat ulang tahun, Rani!"],
    ["B", "Thank you very much!", "Terima kasih banyak!"],
    ["A", "How old are you now?", "Sekarang umurmu berapa?"],
    ["B", "I am eight years old.", "Umurku delapan tahun."],
    ["A", "This is a present for you.", "Ini hadiah untukmu."],
    ["B", "Wow, a doll! I love it.", "Wah, boneka! Aku suka sekali."],
  ]},
  { lv: 1, title: "Kebun Binatang", e: "🦁", lines: [
    ["A", "Look! What animal is that?", "Lihat! Itu hewan apa?"],
    ["B", "That is an elephant.", "Itu gajah."],
    ["A", "Is it big or small?", "Besar atau kecil?"],
    ["B", "It is very big.", "Besar sekali."],
    ["A", "What is your favorite animal?", "Hewan favoritmu apa?"],
    ["B", "My favorite animal is the monkey.", "Hewan favoritku monyet."],
  ]},
  { lv: 2, title: "Pesan Makanan", e: "🍜", lines: [
    ["A", "Good evening. Are you ready to order?", "Selamat malam. Sudah siap pesan?"],
    ["B", "Yes. I would like fried noodles, please.", "Ya. Saya mau mi goreng."],
    ["A", "Spicy or not spicy?", "Pedas atau tidak?"],
    ["B", "A little spicy, please.", "Sedikit pedas saja."],
    ["A", "And what would you like to drink?", "Minumnya apa?"],
    ["B", "Iced tea, please. Thank you.", "Es teh. Terima kasih."],
  ]},
  { lv: 2, title: "Pinjam Barang", e: "📗", lines: [
    ["A", "Hi, what are you looking for?", "Hai, cari apa?"],
    ["B", "I forgot my pencil. Can I borrow yours?", "Pensilku ketinggalan. Boleh pinjam punyamu?"],
    ["A", "Of course. Here you are.", "Tentu. Ini."],
    ["B", "Thank you. I will give it back after class.", "Terima kasih. Nanti aku kembalikan setelah kelas."],
    ["A", "No problem.", "Tidak masalah."],
    ["B", "You are very kind.", "Kamu baik sekali."],
  ]},
  { lv: 3, title: "Meeting Online", e: "💻", lines: [
    ["A", "Hello everyone, can you hear me?", "Halo semua, suara saya terdengar?"],
    ["B", "Yes, we can hear you clearly.", "Ya, terdengar jelas."],
    ["A", "Great. Could you share your screen, please?", "Bagus. Bisa tolong bagikan layar Anda?"],
    ["B", "Sure. Can you see my presentation now?", "Tentu. Presentasi saya sudah terlihat?"],
    ["A", "Yes. Please go ahead.", "Ya. Silakan lanjut."],
    ["B", "Thank you. As you can see, our sales went up this month.", "Terima kasih. Seperti terlihat, penjualan kita naik bulan ini."],
  ]},
  { lv: 3, title: "Wawancara Kerja", e: "🎙️", lines: [
    ["A", "Good morning. Please tell me about yourself.", "Selamat pagi. Silakan ceritakan tentang diri Anda."],
    ["B", "Good morning. My name is Budi and I have five years of experience in production.", "Selamat pagi. Nama saya Budi dan saya punya pengalaman lima tahun di produksi."],
    ["A", "What are your strengths?", "Apa kelebihan Anda?"],
    ["B", "I am responsible and I work well in a team.", "Saya bertanggung jawab dan bisa bekerja sama dalam tim."],
    ["A", "Why do you want to join our company?", "Kenapa Anda ingin bergabung dengan perusahaan kami?"],
    ["B", "Because I want to grow and learn new skills.", "Karena saya ingin berkembang dan belajar keahlian baru."],
  ]},
  { lv: 3, title: "Kesepakatan Kontrak", e: "✍️", lines: [
    ["A", "We have reviewed your offer.", "Kami sudah meninjau penawaran Anda."],
    ["B", "Thank you. What do you think about it?", "Terima kasih. Bagaimana menurut Anda?"],
    ["A", "The price is fine, but we need faster delivery.", "Harganya oke, tapi kami butuh pengiriman lebih cepat."],
    ["B", "We can deliver in two weeks instead of three.", "Kami bisa kirim dalam dua minggu, bukan tiga."],
    ["A", "Great. Then we have a deal.", "Bagus. Kalau begitu kita sepakat."],
    ["B", "Wonderful. I will send the contract today.", "Bagus sekali. Saya kirim kontraknya hari ini."],
  ]},
);

GRAMMAR.push(
  { lv: 1, title: "In / On / At (waktu)", e: "🕒",
    body: `<p><b>at</b> untuk jam: <i>at 7 o'clock, at night</i>.</p>
<p><b>on</b> untuk hari dan tanggal: <i>on Monday, on 17 August</i>.</p>
<p><b>in</b> untuk bulan, tahun, dan bagian hari: <i>in May, in 2025, in the morning</i>.</p>`,
    quiz: [
      ["I wake up ___ 5 o'clock.", ["at", "on", "in"], 0],
      ["We have a test ___ Friday.", ["at", "on", "in"], 1],
      ["My birthday is ___ June.", ["at", "on", "in"], 2],
      ["I study ___ the evening.", ["at", "on", "in"], 2],
      ["The shop closes ___ night.", ["at", "on", "in"], 0],
    ]},
  { lv: 1, title: "Kata Tanya (What, Where, ...)", e: "❓",
    body: `<p><b>What</b> = apa · <b>Who</b> = siapa · <b>Where</b> = di mana · <b>When</b> = kapan · <b>Why</b> = mengapa · <b>How</b> = bagaimana</p>
<p><b>How many</b> = berapa banyak (bisa dihitung) · <b>How much</b> = berapa (harga / tidak bisa dihitung)</p>
<p>Contoh: <i><b>Where</b> do you live? <b>How much</b> is this?</i></p>`,
    quiz: [
      ["___ is your name?", ["What", "Where", "When"], 0],
      ["___ do you live? — In Malang.", ["Who", "Where", "Why"], 1],
      ["___ is that man? — He is my uncle.", ["Who", "What", "How"], 0],
      ["___ apples do you want? — Three.", ["How much", "How many", "When"], 1],
      ["___ are you crying? — Because I'm sad.", ["Why", "Where", "Who"], 0],
    ]},
  { lv: 2, title: "Always, Usually, Never", e: "📆",
    body: `<p>Kata keterangan frekuensi menunjukkan <b>seberapa sering</b>:</p>
<p><b>always</b> (selalu, 100%) → <b>usually</b> (biasanya) → <b>often</b> (sering) → <b>sometimes</b> (kadang) → <b>rarely</b> (jarang) → <b>never</b> (tidak pernah, 0%)</p>
<p>Letaknya <b>sebelum kata kerja</b>, tapi <b>sesudah am/is/are</b>: <i>I <b>always</b> wake up early. She <b>is never</b> late.</i></p>`,
    quiz: [
      ["I ___ brush my teeth before bed. (100%)", ["always", "never", "sometimes"], 0],
      ["He ___ eats vegetables. He hates them. (0%)", ["always", "usually", "never"], 2],
      ["Kalimat yang benar:", ["She always is happy.", "She is always happy.", "Always she is happy."], 1],
      ["We ___ go to the beach, maybe twice a year.", ["rarely", "always", "usually"], 0],
      ["Kalimat yang benar:", ["I usually walk to school.", "I walk usually to school.", "Usually I walks to school."], 0],
    ]},
  { lv: 2, title: "Much / Many / A lot of", e: "🧮",
    body: `<p><b>many</b> untuk benda yang <b>bisa dihitung</b>: <i>many books, many people</i>.</p>
<p><b>much</b> untuk yang <b>tidak bisa dihitung</b>: <i>much water, much money, much time</i>.</p>
<p><b>a lot of</b> bisa untuk keduanya: <i>a lot of books, a lot of water</i>.</p>`,
    quiz: [
      ["How ___ brothers do you have?", ["much", "many", "a lot"], 1],
      ["I don't have ___ time.", ["much", "many", "a"], 0],
      ["There are ___ students in the class.", ["much", "a lot of", "a lot"], 1],
      ["How ___ sugar do you need?", ["much", "many", "lot"], 0],
      ["She has ___ friends.", ["much", "many", "a much"], 1],
    ]},
  { lv: 3, title: "Gerund vs To-Infinitive", e: "🔧",
    body: `<p>Beberapa kata kerja diikuti <b>-ing</b>: <i>enjoy, finish, avoid, mind, suggest</i> → <i>I enjoy <b>working</b> here.</i></p>
<p>Beberapa diikuti <b>to + kata kerja</b>: <i>want, need, plan, decide, hope, agree</i> → <i>We plan <b>to launch</b> next month.</i></p>
<p>Setelah kata depan (<i>for, about, before, after</i>) selalu <b>-ing</b>: <i>Thank you for <b>waiting</b>.</i></p>`,
    quiz: [
      ["I enjoy ___ with my team.", ["work", "working", "to work"], 1],
      ["We decided ___ the price.", ["lower", "lowering", "to lower"], 2],
      ["Thank you for ___ my email.", ["reply", "replying", "to reply"], 1],
      ["She finished ___ the report.", ["writing", "to write", "write"], 0],
      ["They need ___ more staff.", ["hire", "hiring", "to hire"], 2],
    ]},
  { lv: 3, title: "Reported Speech (kata dia ...)", e: "🗨️",
    body: `<p>Untuk menyampaikan ucapan orang lain. Waktu biasanya <b>mundur satu langkah</b>:</p>
<table><tr><td>Kalimat asli</td><td>Dilaporkan</td></tr>
<tr><td>"I <b>am</b> busy."</td><td>He said he <b>was</b> busy.</td></tr>
<tr><td>"We <b>will</b> send it."</td><td>They said they <b>would</b> send it.</td></tr>
<tr><td>"I <b>can</b> come."</td><td>She said she <b>could</b> come.</td></tr></table>`,
    quiz: [
      ["\"I am tired.\" → She said she ___ tired.", ["is", "was", "were"], 1],
      ["\"We will call you.\" → They said they ___ call us.", ["will", "would", "can"], 1],
      ["\"I can help.\" → He said he ___ help.", ["can", "could", "will"], 1],
      ["\"The price is high.\" → The manager said the price ___ high.", ["was", "is being", "were"], 0],
      ["\"I need more time.\" → She said she ___ more time.", ["needs", "needed", "need"], 1],
    ]},
);
