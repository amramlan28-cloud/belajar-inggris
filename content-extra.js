// Materi tambahan (paket 2). Format sama dengan content.js.

const VOCAB_EXTRA = {
  1: {
    "Tubuh": [
      "head|kepala|My head hurts.|👤", "eye|mata|Close your eyes.|👁️", "ear|telinga|I hear with my ears.|👂",
      "nose|hidung|The clown has a red nose.|👃", "mouth|mulut|Open your mouth, please.|👄", "hand|tangan|Wash your hands.|✋",
      "foot|kaki (telapak)|My foot is wet.|🦶", "hair|rambut|She has long hair.|💇",
    ],
    "Pakaian": [
      "shirt|kemeja / baju|I wear a white shirt.|👕", "shoes|sepatu|Put on your shoes.|👟", "hat|topi|Wear a hat, it is sunny.|🧢",
      "bag|tas|My bag is heavy.|🎒", "socks|kaus kaki|My socks are blue.|🧦", "dress|gaun|She has a pretty dress.|👗",
      "pants|celana panjang|These pants are too long.|👖", "glasses|kacamata|Grandpa wears glasses.|👓",
    ],
    "Buah & Sayur": [
      "banana|pisang|Monkeys like bananas.|🍌", "orange|jeruk|I drink orange juice.|🍊", "mango|mangga|This mango is sweet.|🥭",
      "watermelon|semangka|Watermelon is fresh.|🍉", "carrot|wortel|Rabbits eat carrots.|🥕", "corn|jagung|We grill corn at night.|🌽",
      "tomato|tomat|The tomato is red.|🍅", "vegetable|sayuran|Eat your vegetables.|🥦",
    ],
    "Cuaca & Alam": [
      "sun|matahari|The sun is hot.|☀️", "rain|hujan|It is raining today.|🌧️", "moon|bulan|The moon is bright.|🌕",
      "star|bintang|I can see many stars.|⭐", "tree|pohon|There is a big tree.|🌳", "flower|bunga|The flower smells nice.|🌸",
      "sea|laut|We swim in the sea.|🌊", "mountain|gunung|Bromo is a mountain.|⛰️",
    ],
    "Kendaraan": [
      "car|mobil|My uncle has a new car.|🚗", "bus|bis|I go to school by bus.|🚌", "bicycle|sepeda|I ride my bicycle.|🚲",
      "motorcycle|sepeda motor|Wear a helmet on a motorcycle.|🏍️", "train|kereta|The train is long.|🚆", "plane|pesawat|The plane flies high.|✈️",
      "ship|kapal|The ship is on the sea.|🚢", "truck|truk|The truck carries boxes.|🚚",
    ],
    "Kata Tanya": [
      "what|apa|What is this?|❓", "who|siapa|Who is she?|🙋", "where|di mana|Where is my bag?|📍",
      "when|kapan|When is your birthday?|📅", "why|mengapa|Why are you sad?|🤔", "how|bagaimana|How are you?|💭",
      "how much|berapa (harga)|How much is it?|💲", "how many|berapa banyak|How many books do you have?|🔢",
    ],
    "Kata Kerja 2": [
      "sit|duduk|Please sit down.|🪑", "stand|berdiri|Stand up, please.|🧍", "open|membuka|Open the window.|🔓",
      "close|menutup|Close your book.|🔒", "run|berlari|The boy runs to school.|🏃", "swim|berenang|I can swim.|🏊",
      "sing|bernyanyi|We sing a song.|🎤", "draw|menggambar|She draws a cat.|🖍️", "listen|mendengarkan|Listen to your teacher.|🎧",
      "speak|berbicara|I speak English.|🗣️",
    ],
  },
  2: {
    "Profesi": [
      "doctor|dokter|The doctor checks my heart.|🧑‍⚕️", "nurse|perawat|The nurse is very kind.|👩‍⚕️", "farmer|petani|The farmer grows rice.|👨‍🌾",
      "driver|sopir|The driver is waiting.|🚕", "police officer|polisi|Ask the police officer.|👮", "chef|koki|The chef cooks noodles.|👨‍🍳",
      "engineer|insinyur|My aunt is an engineer.|👷", "seller|penjual|The seller is friendly.|🧑‍💼",
    ],
    "Kesehatan": [
      "sick|sakit|I feel sick today.|🤒", "fever|demam|She has a fever.|🌡️", "headache|sakit kepala|I have a headache.|🤕",
      "cough|batuk|He has a bad cough.|😷", "medicine|obat|Take this medicine twice a day.|💊", "healthy|sehat|Fruit keeps you healthy.|💪",
      "rest|istirahat|You need to rest.|🛌", "exercise|olahraga|I exercise every morning.|🏋️",
    ],
    "Belanja": [
      "buy|membeli|I want to buy shoes.|🛍️", "sell|menjual|They sell fresh fish.|🐟", "pay|membayar|Can I pay by card?|💳",
      "money|uang|I don't have enough money.|💵", "change|uang kembalian|Here is your change.|🪙", "discount|potongan harga|Is there a discount?|🏷️",
      "size|ukuran|What size do you need?|📏", "receipt|struk|Please keep the receipt.|🧾",
    ],
    "Hobi": [
      "hobby|hobi|My hobby is reading.|🎨", "music|musik|I listen to music.|🎵", "movie|film|Let's watch a movie.|🎬",
      "game|permainan|This game is fun.|🎮", "photo|foto|Can I take a photo?|📷", "garden|kebun|My mother loves her garden.|🌻",
      "fishing|memancing|We go fishing on Sunday.|🎣", "travel|bepergian|I like to travel.|🧳",
    ],
    "Perjalanan": [
      "ticket|tiket|I bought a train ticket.|🎫", "airport|bandara|We arrived at the airport.|🛫", "hotel|hotel|The hotel is near the beach.|🏨",
      "map|peta|Look at the map.|🗺️", "left|kiri|Turn left at the corner.|⬅️", "right|kanan|The bank is on the right.|➡️",
      "straight|lurus|Go straight ahead.|⬆️", "near|dekat|The station is near here.|📌", "far|jauh|Is it far from here?|🛣️",
    ],
    "Kata Penghubung & Posisi": [
      "and|dan|I like tea and coffee.|➕", "but|tetapi|It is cheap but good.|↔️", "because|karena|I am late because of the rain.|🔗",
      "so|jadi / sehingga|It was raining, so I stayed home.|➡️", "in|di dalam|The cat is in the box.|📦", "on|di atas (menempel)|The book is on the table.|🔝",
      "under|di bawah|The ball is under the chair.|⬇️", "between|di antara|The shop is between the bank and the school.|↕️",
      "next to|di sebelah|The mosque is next to my house.|👉",
    ],
    "Perasaan 2": [
      "worried|khawatir|I am worried about the test.|😟", "excited|bersemangat|We are excited about the trip.|🤩", "bored|bosan|I am bored at home.|🥱",
      "proud|bangga|My parents are proud of me.|🥹", "afraid|takut|She is afraid of dogs.|😨", "surprised|terkejut|I was surprised by the gift.|😲",
      "sorry|menyesal / maaf|I am sorry for being late.|🙏", "thankful|bersyukur|I am thankful for my family.|🤲",
    ],
  },
  3: {
    "Rapat & Diskusi": [
      "agenda|agenda / susunan acara|Let's look at today's agenda.|📋", "opinion|pendapat|What is your opinion?|💭", "point|poin / maksud|That is a good point.|☝️",
      "issue|masalah / persoalan|We need to solve this issue.|⚠️", "solution|solusi|I have a solution.|💡", "update|kabar terbaru|Can you give us an update?|🔄",
      "summary|ringkasan|Here is a short summary.|📝", "action plan|rencana tindakan|Let's make an action plan.|🗺️", "minutes|notulen rapat|Who will take the minutes?|🗒️",
      "disagree|tidak setuju|I'm afraid I disagree.|❌",
    ],
    "Keuangan": [
      "budget|anggaran|We are over budget.|💼", "cost|biaya|The cost is too high.|💸", "revenue|pendapatan|Revenue grew by ten percent.|📈",
      "payment|pembayaran|The payment is due next week.|💳", "loss|kerugian|We had a small loss last month.|📉", "cash|uang tunai|We pay in cash.|💵",
      "tax|pajak|The price includes tax.|🏛️", "margin|margin / selisih untung|Our margin is getting smaller.|➗", "estimate|perkiraan|Can you give me an estimate?|🧮",
    ],
    "Gudang & Logistik": [
      "warehouse|gudang|The goods are in the warehouse.|🏬", "shipment|kiriman|The shipment arrived today.|📦", "delay|keterlambatan|Sorry for the delay.|⏱️",
      "inventory|persediaan|We check the inventory every month.|📋", "out of stock|stok habis|This item is out of stock.|🚫", "lead time|waktu tunggu produksi/kirim|The lead time is three weeks.|⏳",
      "damaged|rusak|Some boxes were damaged.|💥", "return|retur / mengembalikan|The customer wants to return the item.|↩️", "packaging|kemasan|The packaging looks nice.|🎁",
      "tracking number|nomor resi|Here is the tracking number.|🔎",
    ],
    "Penjualan & Pemasaran": [
      "promotion|promosi|We have a big promotion this weekend.|📣", "target|target|We reached our sales target.|🎯", "brand|merek|Our brand is well known.|🏷️",
      "competitor|pesaing|Our competitor lowered their price.|🥊", "feedback|masukan|Thank you for your feedback.|🗨️", "trend|tren|This color is a new trend.|📊",
      "launch|meluncurkan|We will launch a new product.|🚀", "best seller|produk terlaris|This T-shirt is our best seller.|🥇", "online shop|toko online|We also have an online shop.|🛒",
    ],
    "Ungkapan Kerja": [
      "on time|tepat waktu|Please come on time.|⏰", "in charge|bertanggung jawab|Who is in charge of this project?|🧑‍✈️", "as soon as possible|secepatnya|Please reply as soon as possible.|⚡",
      "in advance|sebelumnya / lebih dulu|Thank you in advance.|🙏", "by the end of|paling lambat akhir|I'll finish it by the end of the day.|🏁", "keep in touch|tetap berhubungan|Let's keep in touch.|📲",
      "make sure|memastikan|Please make sure the data is correct.|✔️", "take care of|mengurus|I will take care of it.|🤲",
    ],
    "Sifat di Dunia Kerja": [
      "responsible|bertanggung jawab|She is very responsible.|🛡️", "efficient|efisien|We need a more efficient process.|⚙️", "accurate|akurat|The report must be accurate.|🎯",
      "flexible|fleksibel|Our schedule is flexible.|🤸", "reliable|dapat diandalkan|He is a reliable supplier.|🤝", "professional|profesional|Thank you for your professional work.|👔",
      "complete|lengkap / selesai|The order is complete.|✅", "pending|tertunda / belum selesai|The payment is still pending.|⌛",
    ],
  },
};
for (const lv of Object.keys(VOCAB_EXTRA)) {
  for (const [cat, items] of Object.entries(VOCAB_EXTRA[lv])) {
    for (const s of items) {
      const [w, id, ex, e] = s.split("|");
      VOCAB.push({ w, id, ex, e, lv: Number(lv), cat });
    }
  }
}

PHRASES.push(
  { lv: 1, en: "What is your name?", id: "Siapa namamu?" },
  { lv: 1, en: "Where are you from?", id: "Kamu dari mana?" },
  { lv: 1, en: "I am from Indonesia.", id: "Saya dari Indonesia." },
  { lv: 1, en: "I have two brothers.", id: "Saya punya dua saudara laki-laki." },
  { lv: 1, en: "My favorite color is blue.", id: "Warna favorit saya biru." },
  { lv: 1, en: "Excuse me, where is the toilet?", id: "Permisi, toiletnya di mana?" },
  { lv: 1, en: "I don't know.", id: "Saya tidak tahu." },
  { lv: 1, en: "Please sit down.", id: "Silakan duduk." },
  { lv: 1, en: "It is raining today.", id: "Hari ini hujan." },
  { lv: 1, en: "Good night, Mom.", id: "Selamat malam, Ibu." },
  { lv: 2, en: "What do you usually do on Sunday?", id: "Biasanya kamu ngapain hari Minggu?" },
  { lv: 2, en: "I usually help my mother at home.", id: "Biasanya saya bantu ibu di rumah." },
  { lv: 2, en: "Can you tell me the way to the station?", id: "Bisa tunjukkan jalan ke stasiun?" },
  { lv: 2, en: "Go straight and turn left.", id: "Jalan lurus lalu belok kiri." },
  { lv: 2, en: "I have a headache.", id: "Saya sakit kepala." },
  { lv: 2, en: "Can I pay by card?", id: "Bisa bayar pakai kartu?" },
  { lv: 2, en: "Do you have a smaller size?", id: "Ada ukuran yang lebih kecil?" },
  { lv: 2, en: "I am going to visit my friend tomorrow.", id: "Besok saya akan mengunjungi teman." },
  { lv: 2, en: "My hobby is playing badminton.", id: "Hobi saya main bulu tangkis." },
  { lv: 2, en: "Could you repeat that, please?", id: "Bisa diulang?" },
  { lv: 3, en: "Let me introduce myself.", id: "Izinkan saya memperkenalkan diri." },
  { lv: 3, en: "I am in charge of production planning.", id: "Saya bertanggung jawab atas perencanaan produksi." },
  { lv: 3, en: "What is the lead time for this order?", id: "Berapa lama waktu tunggu untuk pesanan ini?" },
  { lv: 3, en: "This item is out of stock at the moment.", id: "Barang ini sedang habis." },
  { lv: 3, en: "We are over budget this month.", id: "Bulan ini kita melebihi anggaran." },
  { lv: 3, en: "Could you give us an estimate?", id: "Bisakah Anda beri kami perkiraan?" },
  { lv: 3, en: "I'm afraid I disagree with that.", id: "Maaf, saya kurang setuju dengan itu." },
  { lv: 3, en: "That's a good point.", id: "Itu poin yang bagus." },
  { lv: 3, en: "Let's move on to the next item on the agenda.", id: "Mari lanjut ke agenda berikutnya." },
  { lv: 3, en: "I'll send you the details by email.", id: "Saya akan kirim detailnya lewat email." },
  { lv: 3, en: "Sorry for the delay in my reply.", id: "Maaf terlambat membalas." },
  { lv: 3, en: "Please make sure the packaging is not damaged.", id: "Tolong pastikan kemasannya tidak rusak." },
);

DIALOGS.push(
  { lv: 1, title: "Di Sekolah", e: "🏫", lines: [
    ["A", "Good morning, class!", "Selamat pagi, anak-anak!"],
    ["B", "Good morning, teacher!", "Selamat pagi, Bu/Pak Guru!"],
    ["A", "Please open your books.", "Silakan buka buku kalian."],
    ["B", "Yes, teacher.", "Baik, Bu/Pak."],
    ["A", "Can you read the first sentence?", "Bisa baca kalimat pertama?"],
    ["B", "Sure. I am happy today.", "Tentu. Saya senang hari ini."],
  ]},
  { lv: 1, title: "Hewan Peliharaan", e: "🐱", lines: [
    ["A", "Do you have a pet?", "Kamu punya hewan peliharaan?"],
    ["B", "Yes, I have a cat.", "Ya, saya punya kucing."],
    ["A", "What color is your cat?", "Kucingmu warna apa?"],
    ["B", "My cat is white and black.", "Kucing saya putih dan hitam."],
    ["A", "What is its name?", "Namanya siapa?"],
    ["B", "Its name is Milo.", "Namanya Milo."],
  ]},
  { lv: 2, title: "Ke Dokter", e: "🏥", lines: [
    ["A", "Good afternoon. What's the problem?", "Selamat siang. Apa keluhannya?"],
    ["B", "I have a fever and a headache.", "Saya demam dan sakit kepala."],
    ["A", "Since when?", "Sejak kapan?"],
    ["B", "Since yesterday morning.", "Sejak kemarin pagi."],
    ["A", "Take this medicine and rest at home.", "Minum obat ini dan istirahat di rumah."],
    ["B", "Thank you, doctor.", "Terima kasih, dokter."],
  ]},
  { lv: 2, title: "Tanya Jalan", e: "🗺️", lines: [
    ["A", "Excuse me, can I help you?", "Permisi, ada yang bisa saya bantu?"],
    ["B", "Yes, please. Where is the train station?", "Ya. Stasiun kereta di mana?"],
    ["A", "Go straight and turn right at the bank.", "Jalan lurus lalu belok kanan di bank."],
    ["B", "Is it far from here?", "Jauh dari sini?"],
    ["A", "No, it's about five minutes on foot.", "Tidak, sekitar lima menit jalan kaki."],
    ["B", "Thank you very much.", "Terima kasih banyak."],
  ]},
  { lv: 2, title: "Beli Baju", e: "👕", lines: [
    ["A", "Hello, are you looking for something?", "Halo, sedang cari sesuatu?"],
    ["B", "Yes, I am looking for a blue shirt.", "Ya, saya cari kemeja biru."],
    ["A", "What size do you need?", "Ukuran berapa?"],
    ["B", "Medium, please. Can I try it on?", "Medium. Boleh saya coba?"],
    ["A", "Of course. The fitting room is over there.", "Tentu. Kamar pasnya di sana."],
    ["B", "It fits well. I will take it.", "Pas. Saya ambil yang ini."],
  ]},
  { lv: 3, title: "Perkenalan di Kantor", e: "🤝", lines: [
    ["A", "Hi, I don't think we've met. I'm Sarah from marketing.", "Hai, sepertinya kita belum kenal. Saya Sarah dari marketing."],
    ["B", "Nice to meet you, Sarah. I'm Budi from production planning.", "Senang bertemu, Sarah. Saya Budi dari perencanaan produksi."],
    ["A", "How long have you worked here?", "Sudah berapa lama kerja di sini?"],
    ["B", "I have worked here for three years.", "Saya sudah bekerja di sini tiga tahun."],
    ["A", "Great. Let's keep in touch about the new collection.", "Bagus. Kita tetap berkabar soal koleksi baru ya."],
    ["B", "Sure. I will send you the production schedule.", "Tentu. Saya akan kirim jadwal produksinya."],
  ]},
  { lv: 3, title: "Komplain Barang Rusak", e: "📦", lines: [
    ["A", "Customer service, how can I help you?", "Layanan pelanggan, ada yang bisa dibantu?"],
    ["B", "Hello, some boxes in our shipment were damaged.", "Halo, beberapa kotak di kiriman kami rusak."],
    ["A", "I'm sorry to hear that. How many boxes?", "Mohon maaf. Berapa kotak?"],
    ["B", "Ten boxes out of one hundred.", "Sepuluh kotak dari seratus."],
    ["A", "Please send us some photos and we will replace them.", "Tolong kirim fotonya dan kami akan ganti."],
    ["B", "Thank you. I will send the photos by email today.", "Terima kasih. Saya kirim fotonya lewat email hari ini."],
  ]},
  { lv: 3, title: "Laporan Penjualan", e: "📊", lines: [
    ["A", "Can you give us an update on sales?", "Bisa beri update penjualan?"],
    ["B", "Sure. Our revenue increased by fifteen percent this month.", "Tentu. Pendapatan kita naik lima belas persen bulan ini."],
    ["A", "That's great news. What is the best seller?", "Kabar bagus. Produk terlarisnya apa?"],
    ["B", "The black T-shirt is our best seller.", "Kaos hitam produk terlaris kita."],
    ["A", "Do we have enough stock for next month?", "Stok cukup untuk bulan depan?"],
    ["B", "Not yet. We need to increase production.", "Belum. Kita perlu menambah produksi."],
  ]},
);

GRAMMAR.push(
  { lv: 1, title: "Kata Ganti (I / me / my)", e: "🙋",
    body: `<p>Bentuk kata ganti berubah sesuai posisinya:</p>
<table><tr><td><b>Subjek</b></td><td><b>Objek</b></td><td><b>Milik</b></td></tr>
<tr><td>I</td><td>me</td><td>my</td></tr><tr><td>You</td><td>you</td><td>your</td></tr>
<tr><td>He</td><td>him</td><td>his</td></tr><tr><td>She</td><td>her</td><td>her</td></tr>
<tr><td>We</td><td>us</td><td>our</td></tr><tr><td>They</td><td>them</td><td>their</td></tr></table>
<p>Contoh: <i><b>She</b> loves <b>me</b>. This is <b>my</b> bag.</i></p>`,
    quiz: [
      ["___ is my brother. (dia laki-laki)", ["He", "Him", "His"], 0],
      ["Please help ___. (saya)", ["I", "me", "my"], 1],
      ["This is ___ house. (milik kami)", ["we", "us", "our"], 2],
      ["I like ___. (mereka)", ["they", "them", "their"], 1],
      ["What is ___ name? (milik dia perempuan)", ["she", "her", "hers"], 1],
    ]},
  { lv: 1, title: "A / An / The", e: "🔤",
    body: `<p><b>a</b> dipakai sebelum kata berbunyi konsonan: <i>a cat, a book</i>.</p>
<p><b>an</b> dipakai sebelum kata berbunyi vokal (a, i, u, e, o): <i>an apple, an egg</i>.</p>
<p><b>the</b> untuk benda yang sudah jelas/disebut sebelumnya: <i>I have a cat. <b>The</b> cat is black.</i></p>`,
    quiz: [
      ["I eat ___ apple.", ["a", "an", "the"], 1],
      ["She has ___ dog.", ["a", "an", "the"], 0],
      ["Look at ___ sun!", ["a", "an", "the"], 2],
      ["He is ___ engineer.", ["a", "an", "the"], 1],
      ["I need ___ pen.", ["a", "an", "the"], 0],
    ]},
  { lv: 2, title: "There is / There are", e: "📍",
    body: `<p>Artinya "ada". <b>There is</b> untuk satu benda, <b>There are</b> untuk banyak benda.</p>
<p>Contoh: <i><b>There is</b> a cat under the table. <b>There are</b> five books on the shelf.</i></p>
<p>Pertanyaan: <i><b>Is there</b> a bank near here? <b>Are there</b> any eggs?</i></p>`,
    quiz: [
      ["There ___ a book on the table.", ["is", "are", "am"], 0],
      ["There ___ many people at the market.", ["is", "are", "be"], 1],
      ["___ there a hospital near here?", ["Is", "Are", "Do"], 0],
      ["There ___ two cats in the garden.", ["is", "are", "has"], 1],
      ["There ___ some water in the glass.", ["is", "are", "am"], 0],
    ]},
  { lv: 2, title: "Past Continuous (sedang, di masa lalu)", e: "🎞️",
    body: `<p>Kegiatan yang <b>sedang berlangsung</b> pada waktu tertentu di masa lalu. Rumus: <b>Subjek + was/were + kata kerja-ing</b>.</p>
<p><b>was</b> untuk I/He/She/It, <b>were</b> untuk You/We/They.</p>
<p>Sering dipakai dengan <b>when</b>: <i>I <b>was cooking</b> when the phone rang.</i></p>`,
    quiz: [
      ["I ___ sleeping when you called.", ["was", "were", "am"], 0],
      ["They ___ playing football at 4 p.m. yesterday.", ["was", "were", "are"], 1],
      ["She was ___ TV last night.", ["watch", "watched", "watching"], 2],
      ["What ___ you doing at 8 p.m.?", ["was", "were", "did"], 1],
      ["We were eating ___ the lights went off.", ["when", "because", "so"], 0],
    ]},
  { lv: 3, title: "Passive Voice (di-...)", e: "🔄",
    body: `<p>Dipakai kalau yang penting adalah <b>bendanya</b>, bukan pelakunya. Rumus: <b>be + kata kerja 3</b>.</p>
<p>Sekarang: <i>The goods <b>are delivered</b> every Monday.</i> (Barang dikirim setiap Senin.)</p>
<p>Lampau: <i>The invoice <b>was sent</b> yesterday.</i> (Tagihan dikirim kemarin.)</p>
<p>Sangat sering di email dan laporan kerja.</p>`,
    quiz: [
      ["The report ___ sent yesterday.", ["was", "is", "were"], 0],
      ["The products are ___ in Bandung.", ["make", "made", "making"], 1],
      ["The order ___ delivered next week.", ["will be", "was", "is being be"], 0],
      ["These shirts ___ sold online.", ["is", "are", "was"], 1],
      ["The meeting was ___ to Friday.", ["postpone", "postponed", "postponing"], 1],
    ]},
  { lv: 3, title: "Conditional (if ... will ...)", e: "🔀",
    body: `<p>Untuk syarat yang <b>mungkin terjadi</b>. Rumus: <b>If + simple present, ... will + kata kerja</b>.</p>
<p>Contoh: <i>If you <b>order</b> 5,000 pieces, we <b>will give</b> a discount.</i></p>
<p><i>If it <b>rains</b>, we <b>will stay</b> at home.</i></p>
<p>Catatan: setelah <b>if</b> jangan pakai <b>will</b>.</p>`,
    quiz: [
      ["If you ___ early, you will catch the bus.", ["leave", "will leave", "left"], 0],
      ["If the price is good, we ___ order more.", ["will", "are", "did"], 0],
      ["If it ___ tomorrow, the delivery will be late.", ["rain", "rains", "will rain"], 1],
      ["We will lose customers if we ___ improve quality.", ["don't", "won't", "didn't"], 0],
      ["If you need help, ___ me.", ["call", "will call", "called"], 0],
    ]},
);

