// Materi belajar. Format kosakata: "kata|arti|contoh kalimat|emoji"
// Level: 1 = Pemula, 2 = Dasar, 3 = Menengah (termasuk English untuk kerja)

const VOCAB_RAW = {
  1: {
    "Keluarga": [
      "father|ayah|My father is at home.|👨", "mother|ibu|My mother cooks rice.|👩",
      "brother|saudara laki-laki|My brother is tall.|👦", "sister|saudara perempuan|My sister likes books.|👧",
      "baby|bayi|The baby is sleeping.|👶", "grandmother|nenek|My grandmother lives in Malang.|👵",
      "family|keluarga|I love my family.|👨‍👩‍👧", "friend|teman|She is my best friend.|🤝",
    ],
    "Warna & Angka": [
      "red|merah|The apple is red.|🔴", "blue|biru|The sky is blue.|🔵",
      "green|hijau|The leaf is green.|🟢", "yellow|kuning|The banana is yellow.|🟡",
      "black|hitam|My cat is black.|⚫", "white|putih|The cloud is white.|⚪",
      "one|satu|I have one pen.|1️⃣", "two|dua|I have two hands.|2️⃣",
      "ten|sepuluh|There are ten fingers.|🔟", "hundred|seratus|One hundred people came.|💯",
    ],
    "Hewan": [
      "cat|kucing|The cat drinks milk.|🐱", "dog|anjing|The dog runs fast.|🐶",
      "bird|burung|A bird can fly.|🐦", "fish|ikan|The fish swims in the water.|🐟",
      "chicken|ayam|The chicken lays eggs.|🐔", "cow|sapi|A cow gives us milk.|🐄",
    ],
    "Makanan": [
      "rice|nasi|We eat rice every day.|🍚", "water|air|Please drink some water.|💧",
      "egg|telur|I eat an egg for breakfast.|🥚", "apple|apel|This apple is sweet.|🍎",
      "bread|roti|I buy bread at the shop.|🍞", "milk|susu|The milk is cold.|🥛",
      "hungry|lapar|I am hungry.|😋", "delicious|enak|The food is delicious.|😋",
    ],
    "Rumah & Sekolah": [
      "house|rumah|This is my house.|🏠", "room|kamar|My room is clean.|🛏️",
      "door|pintu|Please close the door.|🚪", "table|meja|The book is on the table.|🪑",
      "book|buku|I read a book.|📖", "pen|pulpen|Can I borrow your pen?|🖊️",
      "teacher|guru|My teacher is kind.|🧑‍🏫", "school|sekolah|I go to school by bike.|🏫",
    ],
    "Kata Kerja Dasar": [
      "eat|makan|I eat breakfast at six.|🍽️", "drink|minum|They drink tea.|🍵",
      "sleep|tidur|I sleep at nine.|😴", "go|pergi|We go to the market.|🚶",
      "read|membaca|She reads a story.|📚", "write|menulis|Please write your name.|✍️",
      "play|bermain|The children play football.|⚽", "help|membantu|Can you help me?|🙋",
    ],
  },
  2: {
    "Kegiatan Harian": [
      "wake up|bangun tidur|I wake up at five.|⏰", "take a bath|mandi|I take a bath every morning.|🛁",
      "have breakfast|sarapan|We have breakfast together.|🍳", "brush teeth|sikat gigi|Brush your teeth before bed.|🪥",
      "clean|membersihkan|I clean my room on Sunday.|🧹", "cook|memasak|My mother cooks fried rice.|🍳",
      "study|belajar|I study English every night.|📝", "work|bekerja|My father works in an office.|💼",
    ],
    "Tempat": [
      "market|pasar|We buy vegetables at the market.|🛒", "hospital|rumah sakit|The nurse works at the hospital.|🏥",
      "office|kantor|The office opens at eight.|🏢", "mosque|masjid|The mosque is near my house.|🕌",
      "bank|bank|I need to go to the bank.|🏦", "station|stasiun|The train is at the station.|🚉",
      "street|jalan|Be careful on the street.|🛣️", "village|desa|My grandparents live in a village.|🏡",
    ],
    "Perasaan & Sifat": [
      "happy|senang|I am happy today.|😊", "sad|sedih|Why are you sad?|😢",
      "angry|marah|Don't be angry.|😠", "tired|lelah|I am tired after work.|😩",
      "busy|sibuk|I am busy this morning.|⏳", "careful|hati-hati|Please be careful.|⚠️",
      "kind|baik hati|Our neighbor is very kind.|💝", "brave|berani|You are very brave.|🦁",
    ],
    "Waktu": [
      "today|hari ini|Today is Monday.|📅", "tomorrow|besok|See you tomorrow.|➡️",
      "yesterday|kemarin|I was sick yesterday.|⬅️", "morning|pagi|Good morning, everyone.|🌅",
      "night|malam|Good night, sleep well.|🌙", "week|minggu (7 hari)|I go swimming once a week.|🗓️",
      "always|selalu|I always pray on time.|♾️", "sometimes|kadang-kadang|Sometimes I walk to school.|🔄",
    ],
    "Sifat Benda": [
      "big|besar|That is a big house.|🐘", "small|kecil|The mouse is small.|🐭",
      "expensive|mahal|This bag is expensive.|💎", "cheap|murah|The shirt is cheap.|🏷️",
      "fast|cepat|The car is fast.|🏎️", "slow|lambat|The turtle is slow.|🐢",
      "easy|mudah|This lesson is easy.|👍", "difficult|sulit|The test is difficult.|🧩",
    ],
  },
  3: {
    "Kantor & Meeting": [
      "meeting|rapat|We have a meeting at ten.|🗣️", "schedule|jadwal|Let me check my schedule.|📆",
      "deadline|batas waktu|The deadline is next Friday.|⏳", "report|laporan|Please send the report today.|📊",
      "discuss|membahas|Let's discuss the plan.|💬", "agree|setuju|I agree with you.|✅",
      "suggest|menyarankan|I suggest we start earlier.|💡", "postpone|menunda|We need to postpone the meeting.|⏸️",
      "colleague|rekan kerja|My colleague will join the call.|👥", "manager|manajer|The manager approved the plan.|👔",
    ],
    "Bisnis & Produksi": [
      "order|pesanan|We received a big order.|📦", "supplier|pemasok|Our supplier is in Bandung.|🏭",
      "invoice|tagihan|Please send the invoice by email.|🧾", "price|harga|Can you give us a better price?|💰",
      "stock|stok|The stock is running low.|📉", "deliver|mengirim|They will deliver the goods on Monday.|🚚",
      "quantity|jumlah|What quantity do you need?|🔢", "quality|kualitas|The quality is very good.|⭐",
      "sample|contoh barang|Could you send us a sample?|🧪", "production|produksi|Production starts next week.|⚙️",
      "customer|pelanggan|The customer is happy with the product.|🙂", "profit|keuntungan|Our profit increased this month.|📈",
    ],
    "Email & Telepon": [
      "attach|melampirkan|I attach the file in this email.|📎", "reply|membalas|Please reply as soon as possible.|↩️",
      "confirm|mengonfirmasi|Could you confirm the date?|☑️", "available|tersedia / bisa|Are you available tomorrow?|🟢",
      "request|permintaan|Thank you for your request.|📨", "regards|salam (penutup email)|Best regards, Budi.|✉️",
      "urgent|mendesak|This is urgent, please call me.|🚨", "follow up|menindaklanjuti|I will follow up next week.|🔁",
    ],
    "Kata Kerja Penting": [
      "improve|meningkatkan|We want to improve our service.|🔧", "increase|naik / menaikkan|Sales increased by ten percent.|⬆️",
      "decrease|turun / menurunkan|Costs decreased last month.|⬇️", "prepare|menyiapkan|Please prepare the documents.|🗂️",
      "explain|menjelaskan|Can you explain the problem?|🧑‍🏫", "solve|menyelesaikan|We solved the problem quickly.|🧠",
      "decide|memutuskan|We will decide tomorrow.|⚖️", "compare|membandingkan|Let's compare the two offers.|🆚",
    ],
  },
};

// Diubah ke bentuk daftar objek
const VOCAB = [];
for (const lv of Object.keys(VOCAB_RAW)) {
  for (const [cat, items] of Object.entries(VOCAB_RAW[lv])) {
    for (const s of items) {
      const [w, id, ex, e] = s.split("|");
      VOCAB.push({ w, id, ex, e, lv: Number(lv), cat });
    }
  }
}

// Kalimat latihan ngomong (pronunciation drill ala Pare)
const PHRASES = [
  { lv: 1, en: "Good morning, how are you?", id: "Selamat pagi, apa kabar?" },
  { lv: 1, en: "I am fine, thank you.", id: "Saya baik, terima kasih." },
  { lv: 1, en: "My name is Rina.", id: "Nama saya Rina." },
  { lv: 1, en: "Nice to meet you.", id: "Senang bertemu denganmu." },
  { lv: 1, en: "I am ten years old.", id: "Umur saya sepuluh tahun." },
  { lv: 1, en: "I like to play football.", id: "Saya suka bermain sepak bola." },
  { lv: 1, en: "Can you help me, please?", id: "Bisakah kamu membantu saya?" },
  { lv: 1, en: "Thank you very much.", id: "Terima kasih banyak." },
  { lv: 1, en: "I am hungry.", id: "Saya lapar." },
  { lv: 1, en: "See you tomorrow.", id: "Sampai jumpa besok." },
  { lv: 2, en: "What time do you wake up?", id: "Jam berapa kamu bangun?" },
  { lv: 2, en: "I usually wake up at five.", id: "Saya biasanya bangun jam lima." },
  { lv: 2, en: "Where do you live?", id: "Kamu tinggal di mana?" },
  { lv: 2, en: "I live near the market.", id: "Saya tinggal dekat pasar." },
  { lv: 2, en: "How much is this shirt?", id: "Berapa harga kemeja ini?" },
  { lv: 2, en: "It is too expensive.", id: "Itu terlalu mahal." },
  { lv: 2, en: "What did you do yesterday?", id: "Apa yang kamu lakukan kemarin?" },
  { lv: 2, en: "I went to my grandmother's house.", id: "Saya pergi ke rumah nenek." },
  { lv: 2, en: "Could you speak more slowly, please?", id: "Bisakah Anda bicara lebih pelan?" },
  { lv: 2, en: "Sorry, I don't understand.", id: "Maaf, saya tidak mengerti." },
  { lv: 3, en: "Let's start the meeting.", id: "Mari kita mulai rapatnya." },
  { lv: 3, en: "Could you send me the report by Friday?", id: "Bisakah Anda kirim laporannya paling lambat Jumat?" },
  { lv: 3, en: "I will follow up with the supplier.", id: "Saya akan menindaklanjuti dengan pemasok." },
  { lv: 3, en: "The delivery is delayed by two days.", id: "Pengirimannya terlambat dua hari." },
  { lv: 3, en: "Can we get a discount for a big order?", id: "Bisakah kami dapat diskon untuk pesanan besar?" },
  { lv: 3, en: "I agree, but we need to check the budget.", id: "Saya setuju, tapi kita perlu cek anggarannya." },
  { lv: 3, en: "Please find the invoice attached.", id: "Terlampir tagihannya." },
  { lv: 3, en: "Are you available for a call tomorrow?", id: "Apakah Anda bisa ditelepon besok?" },
  { lv: 3, en: "Our sales increased this month.", id: "Penjualan kami naik bulan ini." },
  { lv: 3, en: "Thank you for your time.", id: "Terima kasih atas waktunya." },
];

// Percakapan (pengganti "English Area"): aplikasi jadi A, pengguna jadi B
const DIALOGS = [
  { lv: 1, title: "Perkenalan", e: "👋", lines: [
    ["A", "Hello! What is your name?", "Halo! Siapa namamu?"],
    ["B", "Hello! My name is Dina.", "Halo! Nama saya Dina."],
    ["A", "Nice to meet you, Dina. How old are you?", "Senang bertemu, Dina. Umurmu berapa?"],
    ["B", "I am nine years old.", "Umur saya sembilan tahun."],
    ["A", "Where do you live?", "Kamu tinggal di mana?"],
    ["B", "I live in Surabaya.", "Saya tinggal di Surabaya."],
  ]},
  { lv: 1, title: "Di Meja Makan", e: "🍽️", lines: [
    ["A", "Are you hungry?", "Kamu lapar?"],
    ["B", "Yes, I am very hungry.", "Ya, saya lapar sekali."],
    ["A", "Do you want rice and chicken?", "Mau nasi dan ayam?"],
    ["B", "Yes, please. Thank you.", "Ya, boleh. Terima kasih."],
    ["A", "Is it delicious?", "Enak?"],
    ["B", "Yes, it is delicious.", "Ya, enak."],
  ]},
  { lv: 2, title: "Belanja di Pasar", e: "🛒", lines: [
    ["A", "Good morning. Can I help you?", "Selamat pagi. Ada yang bisa dibantu?"],
    ["B", "Good morning. How much are these apples?", "Selamat pagi. Berapa harga apel ini?"],
    ["A", "Twenty thousand rupiah per kilo.", "Dua puluh ribu rupiah per kilo."],
    ["B", "Can I have two kilos, please?", "Saya minta dua kilo."],
    ["A", "Sure. Anything else?", "Baik. Ada lagi?"],
    ["B", "No, that's all. Thank you.", "Tidak, itu saja. Terima kasih."],
  ]},
  { lv: 2, title: "Kegiatan Kemarin", e: "📅", lines: [
    ["A", "What did you do yesterday?", "Apa yang kamu lakukan kemarin?"],
    ["B", "I visited my grandmother.", "Saya mengunjungi nenek."],
    ["A", "That's nice. How did you get there?", "Bagus. Ke sana naik apa?"],
    ["B", "We went there by car.", "Kami ke sana naik mobil."],
    ["A", "Did you have fun?", "Seru tidak?"],
    ["B", "Yes, I had a lot of fun.", "Ya, seru sekali."],
  ]},
  { lv: 3, title: "Rapat Pagi", e: "🗣️", lines: [
    ["A", "Good morning, everyone. Let's start the meeting.", "Selamat pagi semua. Mari mulai rapatnya."],
    ["B", "Good morning. I have an update on the production.", "Selamat pagi. Saya ada update soal produksi."],
    ["A", "Great. Please go ahead.", "Bagus. Silakan."],
    ["B", "We finished eighty percent of the order.", "Kami sudah menyelesaikan delapan puluh persen pesanan."],
    ["A", "When can we deliver the rest?", "Kapan sisanya bisa dikirim?"],
    ["B", "We can deliver it next Monday.", "Kami bisa kirim Senin depan."],
  ]},
  { lv: 3, title: "Telepon Supplier", e: "📞", lines: [
    ["A", "Hello, this is Andi from the supplier. How can I help you?", "Halo, saya Andi dari pemasok. Ada yang bisa dibantu?"],
    ["B", "Hello Andi. I want to ask about our order.", "Halo Andi. Saya mau tanya soal pesanan kami."],
    ["A", "Sure. What is the order number?", "Baik. Nomor pesanannya berapa?"],
    ["B", "The order number is one two three four.", "Nomor pesanannya satu dua tiga empat."],
    ["A", "I'm sorry, the delivery is delayed by two days.", "Mohon maaf, pengirimannya terlambat dua hari."],
    ["B", "Okay. Please confirm the new date by email.", "Oke. Tolong konfirmasi tanggal barunya lewat email."],
  ]},
  { lv: 3, title: "Negosiasi Harga", e: "💰", lines: [
    ["A", "Thank you for your request. Here is our price list.", "Terima kasih atas permintaannya. Ini daftar harga kami."],
    ["B", "Thank you. The price is a little high for us.", "Terima kasih. Harganya agak tinggi untuk kami."],
    ["A", "What quantity do you need?", "Butuh berapa banyak?"],
    ["B", "We need five thousand pieces.", "Kami butuh lima ribu pcs."],
    ["A", "For that quantity, we can give a five percent discount.", "Untuk jumlah itu, kami bisa beri diskon lima persen."],
    ["B", "That sounds good. Could you send us a sample first?", "Kedengarannya bagus. Bisa kirim sampel dulu?"],
  ]},
];

// Grammar ala kelas Pare: penjelasan singkat bahasa Indonesia + rumus + latihan
const GRAMMAR = [
  { lv: 1, title: "To Be (am / is / are)", e: "🧩",
    body: `<p><b>am / is / are</b> artinya kurang lebih "adalah / sedang berada". Dipakai sebelum kata benda, kata sifat, atau tempat.</p>
<table><tr><td>I</td><td><b>am</b></td></tr><tr><td>He / She / It</td><td><b>is</b></td></tr><tr><td>You / We / They</td><td><b>are</b></td></tr></table>
<p>Contoh: <i>I <b>am</b> happy. She <b>is</b> a teacher. They <b>are</b> at school.</i></p>
<p>Kalimat negatif: tambah <b>not</b> → <i>I am not tired.</i> Pertanyaan: tukar posisi → <i>Are you ready?</i></p>`,
    quiz: [
      ["She ___ my sister.", ["is", "am", "are"], 0],
      ["I ___ hungry.", ["is", "am", "are"], 1],
      ["They ___ in the garden.", ["is", "am", "are"], 2],
      ["___ you a student?", ["Is", "Am", "Are"], 2],
      ["The cat ___ black.", ["is", "am", "are"], 0],
    ]},
  { lv: 1, title: "Simple Present (kebiasaan)", e: "🔁",
    body: `<p>Untuk <b>kebiasaan</b> dan <b>fakta</b>. Rumus: <b>Subjek + kata kerja 1</b>.</p>
<p>Untuk <b>He / She / It</b>, kata kerja ditambah <b>-s / -es</b>: <i>He play<b>s</b>, She watch<b>es</b>.</i></p>
<p>Negatif: <b>do not / does not</b> + kata kerja asli → <i>I don't like coffee. He doesn't eat meat.</i></p>
<p>Pertanyaan: <b>Do / Does</b> di depan → <i>Do you speak English? Does she work here?</i></p>`,
    quiz: [
      ["My father ___ to the office every day.", ["go", "goes", "going"], 1],
      ["We ___ English on Monday.", ["study", "studies", "studying"], 0],
      ["She ___ like spicy food.", ["don't", "doesn't", "isn't"], 1],
      ["___ you play football?", ["Do", "Does", "Are"], 0],
      ["The sun ___ in the east.", ["rise", "rises", "rising"], 1],
    ]},
  { lv: 1, title: "This / That / These / Those", e: "👉",
    body: `<p><b>This</b> = ini (satu, dekat). <b>That</b> = itu (satu, jauh).</p>
<p><b>These</b> = ini (banyak, dekat). <b>Those</b> = itu (banyak, jauh).</p>
<p>Contoh: <i>This is my pen. Those are birds.</i></p>`,
    quiz: [
      ["___ is my book (dekat, satu).", ["This", "These", "Those"], 0],
      ["___ are my shoes (dekat, banyak).", ["That", "These", "This"], 1],
      ["Look at ___ bird in the sky (jauh, satu)!", ["that", "these", "those"], 0],
      ["___ cars over there are new (jauh, banyak).", ["This", "That", "Those"], 2],
      ["Is ___ your bag? (dekat, satu)", ["these", "this", "those"], 1],
    ]},
  { lv: 2, title: "Present Continuous (sedang)", e: "⏳",
    body: `<p>Untuk kegiatan yang <b>sedang terjadi sekarang</b>. Rumus: <b>Subjek + am/is/are + kata kerja-ing</b>.</p>
<p>Contoh: <i>I <b>am reading</b> a book. They <b>are playing</b> outside.</i></p>
<p>Kata penanda: <i>now, right now, at the moment, look!, listen!</i></p>`,
    quiz: [
      ["Look! The baby ___.", ["sleeps", "is sleeping", "sleep"], 1],
      ["We ___ dinner right now.", ["are having", "have", "has"], 0],
      ["I ___ TV at the moment.", ["watch", "am watching", "watches"], 1],
      ["What ___ you doing?", ["is", "are", "do"], 1],
      ["She ___ cooking now.", ["isn't", "doesn't", "don't"], 0],
    ]},
  { lv: 2, title: "Simple Past (kemarin / dulu)", e: "⏮️",
    body: `<p>Untuk kejadian yang <b>sudah selesai</b> di masa lalu. Rumus: <b>Subjek + kata kerja 2</b>.</p>
<p>Kata kerja beraturan: tambah <b>-ed</b> (work → worked). Tidak beraturan harus dihafal: <i>go → went, eat → ate, see → saw, buy → bought, have → had</i>.</p>
<p>Negatif & tanya pakai <b>did</b> + kata kerja asli → <i>I didn't go. Did you eat?</i></p>
<p>Penanda: <i>yesterday, last week, two days ago</i>.</p>`,
    quiz: [
      ["I ___ to Bali last year.", ["go", "went", "gone"], 1],
      ["She ___ a new bag yesterday.", ["buys", "bought", "buyed"], 1],
      ["We ___ the meeting two days ago.", ["finish", "finished", "finishing"], 1],
      ["___ you see the movie last night?", ["Do", "Did", "Was"], 1],
      ["He didn't ___ breakfast this morning.", ["ate", "eat", "eats"], 1],
    ]},
  { lv: 2, title: "Future (will / going to)", e: "🔮",
    body: `<p><b>will</b> + kata kerja asli → keputusan spontan, janji, perkiraan: <i>I <b>will</b> call you later.</i></p>
<p><b>am/is/are going to</b> + kata kerja asli → rencana yang sudah dipikirkan: <i>We <b>are going to</b> visit Bandung next week.</i></p>`,
    quiz: [
      ["The phone is ringing. I ___ answer it.", ["will", "am", "did"], 0],
      ["We are going to ___ a new house.", ["buy", "bought", "buying"], 0],
      ["She ___ going to study tonight.", ["is", "will", "are"], 0],
      ["I promise I ___ help you.", ["will", "am", "was"], 0],
      ["They ___ going to travel next month.", ["is", "are", "am"], 1],
    ]},
  { lv: 2, title: "Comparison (lebih / paling)", e: "📏",
    body: `<p>Kata sifat pendek: tambah <b>-er</b> (lebih) dan <b>-est</b> (paling): <i>tall → taller → the tallest</i>.</p>
<p>Kata sifat panjang: <b>more</b> / <b>the most</b>: <i>expensive → more expensive → the most expensive</i>.</p>
<p>Pengecualian: <i>good → better → the best, bad → worse → the worst</i>.</p>`,
    quiz: [
      ["An elephant is ___ than a cat.", ["big", "bigger", "biggest"], 1],
      ["This is the ___ book in the library.", ["more interesting", "most interesting", "interestinger"], 1],
      ["My English is ___ than last year.", ["good", "better", "best"], 1],
      ["A plane is ___ than a car.", ["faster", "fastest", "more fast"], 0],
      ["Budi is the ___ student in my class.", ["tall", "taller", "tallest"], 2],
    ]},
  { lv: 2, title: "Can / Should / Must", e: "💪",
    body: `<p>Setelah <b>can, should, must</b> selalu kata kerja asli (tanpa -s, tanpa -ing).</p>
<p><b>can</b> = bisa: <i>I can swim.</i> · <b>should</b> = sebaiknya: <i>You should sleep early.</i> · <b>must</b> = harus: <i>You must wear a helmet.</i></p>`,
    quiz: [
      ["She can ___ three languages.", ["speak", "speaks", "speaking"], 0],
      ["You ___ see a doctor. You look sick.", ["should", "can", "are"], 0],
      ["Students ___ wear uniforms at school (wajib).", ["can", "must", "will"], 1],
      ["___ you help me with this box?", ["Can", "Must", "Do"], 0],
      ["He should ___ more water.", ["drinks", "drink", "drinking"], 1],
    ]},
  { lv: 3, title: "Present Perfect (sudah)", e: "✅",
    body: `<p>Untuk sesuatu yang <b>sudah</b> terjadi dan hasilnya masih terasa sekarang. Rumus: <b>Subjek + have/has + kata kerja 3</b>.</p>
<p>Contoh: <i>I <b>have finished</b> the report. She <b>has sent</b> the invoice.</i></p>
<p>Penanda: <i>already, yet, just, ever, never, since, for</i>.</p>`,
    quiz: [
      ["I have already ___ the email.", ["send", "sent", "sending"], 1],
      ["She ___ worked here for five years.", ["has", "have", "is"], 0],
      ["Have you ___ been to Japan?", ["ever", "yet", "already"], 0],
      ["We haven't received the goods ___.", ["already", "yet", "just"], 1],
      ["They have ___ the problem.", ["solve", "solved", "solving"], 1],
    ]},
  { lv: 3, title: "Bahasa Sopan di Kantor", e: "🤝",
    body: `<p>Di dunia kerja, permintaan sebaiknya dibuat <b>sopan</b>:</p>
<p><b>Could you ...?</b> → <i>Could you send the file?</i><br><b>Would you mind + -ing?</b> → <i>Would you mind checking this?</i><br><b>I would like to ...</b> → <i>I would like to ask about the price.</i><br><b>Please find ... attached</b> → kalimat lampiran di email.</p>`,
    quiz: [
      ["___ you send me the report, please?", ["Could", "Must", "Did"], 0],
      ["Would you mind ___ the door?", ["close", "closing", "closed"], 1],
      ["I would like ___ a meeting.", ["schedule", "to schedule", "scheduling"], 1],
      ["Please find the invoice ___.", ["attached", "attach", "attaching"], 0],
      ["Yang paling sopan:", ["Give me the price.", "Could you tell me the price?", "Price?"], 1],
    ]},
];

// Tes penempatan: 5 soal tiap level
const PLACEMENT = [
  { lv: 1, q: "Apa bahasa Inggrisnya 'kucing'?", a: ["dog", "cat", "cow"], c: 1 },
  { lv: 1, q: "I ___ a student.", a: ["am", "is", "are"], c: 0 },
  { lv: 1, q: "Warna langit cerah adalah ...", a: ["red", "green", "blue"], c: 2 },
  { lv: 1, q: "'Thank you' artinya ...", a: ["Maaf", "Terima kasih", "Permisi"], c: 1 },
  { lv: 1, q: "They ___ my friends.", a: ["is", "am", "are"], c: 2 },
  { lv: 2, q: "She ___ to school every day.", a: ["go", "goes", "going"], c: 1 },
  { lv: 2, q: "Yesterday I ___ fried rice.", a: ["eat", "ate", "eaten"], c: 1 },
  { lv: 2, q: "Look! The children ___ in the rain.", a: ["play", "are playing", "played"], c: 1 },
  { lv: 2, q: "This bag is ___ than that bag.", a: ["cheap", "cheaper", "cheapest"], c: 1 },
  { lv: 2, q: "'Tired' artinya ...", a: ["lelah", "lapar", "sedih"], c: 0 },
  { lv: 3, q: "I have ___ the report.", a: ["finish", "finished", "finishing"], c: 1 },
  { lv: 3, q: "'Deadline' artinya ...", a: ["jadwal rapat", "batas waktu", "pesanan"], c: 1 },
  { lv: 3, q: "___ you send me the invoice, please?", a: ["Could", "Must", "Are"], c: 0 },
  { lv: 3, q: "We need to ___ the meeting to next week.", a: ["postpone", "deliver", "attach"], c: 0 },
  { lv: 3, q: "Would you mind ___ the price?", a: ["check", "checking", "to check"], c: 1 },
];

const LEVEL_NAMES = { 1: "Pemula", 2: "Dasar", 3: "Menengah" };
