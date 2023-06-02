import { createSlice } from "@reduxjs/toolkit";

// all prod
const products = [
  { 
    id: 1,
    name: "Belimbing", 
    deskripsi: "Belimbing adalah buah yang memiliki bentuk seperti bintang dan memiliki rasa asam.", 
    category: "Buah Lokal", 
    displayPrice: "10.00", 
    price: 1000, 
    rate: '4.5', 
    isFav: false, 
    stok: 50, 
    initialStok: 50, 
    image: "/img/buah_lokal/belimbing.png",
    buyer: 342 
  },
  { 
    id: 2,
    name: "Dukuh", 
    deskripsi: "Dukuh adalah buah yang memiliki daging buah yang manis dan sering digunakan sebagai campuran dalam berbagai makanan.", 
    category: "Buah Lokal", 
    displayPrice: "12.00", 
    price: 1200, 
    rate: '3.2', 
    isFav: false, 
    stok: 60, 
    initialStok: 60, 
    image: "/img/buah_lokal/dukuh.png" },
  { 
    id: 3,
    name: "Durian", 
    deskripsi: "Durian adalah buah yang memiliki kulit berduri dan daging buah yang beraroma kuat serta memiliki rasa manis.", 
    category: "Buah Lokal", 
    displayPrice: "15.00", 
    price: 1500, 
    rate: '4.8', 
    isFav: false, 
    stok: 70, 
    initialStok: 70, 
    image: "/img/buah_lokal/durian.png" },
  { 
    id: 4,
    name: "Kelapa", 
    deskripsi: "Kelapa adalah buah yang memiliki kulit keras dan daging buah yang berair serta memiliki banyak manfaat.", 
    category: "Buah Lokal", 
    displayPrice: "8.00", 
    price: 800, 
    rate: '4.2', 
    isFav: false, 
    stok: 80, 
    initialStok: 80, 
    image: "/img/buah_lokal/kelapa.png" },
  { 
    id: 5,
    name: "Mangga", 
    deskripsi: "Mangga adalah buah yang memiliki daging buah yang manis serta berwarna kuning atau hijau.", 
    category: "Buah Lokal", 
    displayPrice: "11.00", 
    price: 1100, 
    rate: '3.6', 
    isFav: false, 
    stok: 90, 
    initialStok: 90, 
    image: "/img/buah_lokal/Mangga.png" },
  { 
    id: 6,
    name: "Manggis", 
    deskripsi: "Manggis adalah buah yang memiliki kulit berwarna ungu dan daging buah yang manis serta memiliki biji di dalamnya.", 
    category: "Buah Lokal", 
    displayPrice: "13.00", 
    price: 1300, 
    rate: '4.7', 
    isFav: false, 
    stok: 100, 
    initialStok: 100, 
    image: "/img/buah_lokal/manggis.png" },
  { 
    id: 7,
    name: "Nanas", 
    deskripsi: "Nanas adalah buah yang memiliki rasa asam segar dan sering digunakan dalam berbagai hidangan.", 
    category: "Buah Lokal", 
    displayPrice: "9.00", 
    price: 900, 
    rate: '3.1', 
    isFav: false, 
    stok: 110, 
    initialStok: 110, 
    image: "/img/buah_lokal/Nanas.png" },
  { 
    id: 8,
    name: "Nangka", 
    deskripsi: "Nangka adalah buah yang memiliki daging buah yang manis serta sering digunakan dalam berbagai masakan.", 
    category: "Buah Lokal", 
    displayPrice: "14.00", 
    price: 1400, 
    rate: '4.4', 
    isFav: false, 
    stok: 120, 
    initialStok: 120, 
    image: "/img/buah_lokal/nangka.png" },
  { 
    id: 9,
    name: "Rambutan", 
    deskripsi: "Rambutan adalah buah yang memiliki kulit berduri dan daging buah yang manis serta berwarna merah.", 
    category: "Buah Lokal", 
    displayPrice: "13.00", 
    price: 1300, 
    rate: '3.3', 
    isFav: false, 
    stok: 130, 
    initialStok: 130, 
    image: "/img/buah_lokal/rambutan.png" },
  { 
    id: 10,
    name: "Sirsak", 
    deskripsi: "Sirsak adalah buah yang memiliki daging buah yang berair dan asam serta memiliki biji di dalamnya.", 
    category: "Buah Lokal", 
    displayPrice: "14.00", 
    price: 1400, 
    rate: '4.5', 
    isFav: false, 
    stok: 140, 
    initialStok: 140, 
    image: "/img/buah_lokal/sirsak.png" },
  { 
    id: 11,
    name: "Salak", 
    deskripsi: "Salak adalah buah yang memiliki kulit berduri dan daging buah yang manis serta memiliki biji di dalamnya.", 
    category: "Buah Lokal", 
    displayPrice: "14.00", 
    price: 1400, 
    rate: '4.2', 
    isFav: false, 
    stok: 150, 
    initialStok: 150, 
    image: "/img/buah_lokal/salak.png" },
  { 
    id: 12,
    name: "Alpukat", 
    deskripsi: "Alpukat adalah buah yang memiliki tekstur lembut dan daging buah yang kaya akan lemak sehat.", 
    category: "Buah Import", 
    displayPrice: "16.00", 
    price: 1600, 
    rate: '3.6', 
    isFav: false, 
    stok: 160, 
    initialStok: 160, 
    image: "/img/buah_import/Alpuket.png" },
  { 
    id: 13,
    name: "Anggur", 
    deskripsi: "Anggur adalah buah yang memiliki biji dan terkenal dengan rasa manis dan asamnya.", 
    category: "Buah Import", 
    displayPrice: "18.00", 
    price: 1800, 
    rate: '4.7', 
    isFav: false, 
    stok: 170, 
    initialStok: 170, 
    image: "/img/buah_import/anggur.png" },
  { 
    id: 14,
    name: "Anggur Hijau", 
    deskripsi: "Anggur Hijau adalah varian anggur dengan warna hijau dan memiliki rasa manis.", 
    category: "Buah Import", 
    displayPrice: "20.00", 
    price: 2000, 
    rate: '4.8', 
    isFav: false, 
    stok: 180, 
    initialStok: 180, 
    image: "/img/buah_import/anggur-hijau.png" },
  { 
    id: 15,
    name: "Apel Hijau", 
    deskripsi: "Apel Hijau adalah varian apel yang memiliki daging buah berwarna hijau dan rasa segar.", 
    category: "Buah Import", 
    displayPrice: "22.00", 
    price: 2200, 
    rate: '4.4', 
    isFav: false, 
    stok: 190, 
    initialStok: 190, 
    image: "/img/buah_import/apel-hijau.png" },
  { 
    id: 16,
    name: "Apel Merah", 
    deskripsi: "Apel Merah adalah varian apel yang memiliki daging buah berwarna merah dan rasa manis.", 
    category: "Buah Import", 
    displayPrice: "24.00", 
    price: 2400, 
    rate: '4.6', 
    isFav: false, 
    stok: 200, 
    initialStok: 200, 
    image: "/img/buah_import/apel-merah.png" },
  { 
    id: 17,
    name: "Buah Naga", 
    deskripsi: "Buah Naga adalah buah dengan daging berwarna merah atau putih yang memiliki rasa manis.", 
    category: "Buah Import", 
    displayPrice: "26.00", 
    price: 2600, 
    rate: '4.3', 
    isFav: false, 
    stok: 210, 
    initialStok: 210, 
    image: "/img/buah_import/buah-naga.png" },
  { 
    id: 18,
    name: "Jambu Merah", 
    deskripsi: "Jambu Merah adalah buah dengan daging berwarna merah yang memiliki rasa manis dan segar.", 
    category: "Buah Import", 
    displayPrice: "28.00", 
    price: 2800, 
    rate: '4.5', 
    isFav: false, 
    stok: 220, 
    initialStok: 220, 
    image: "/img/buah_import/jambu-merah.png" },
  { 
    id: 19,
    name: "Jambu Kristal", 
    deskripsi: "Jambu Kristal adalah buah dengan daging berwarna putih bening yang memiliki rasa manis dan renyah.", 
    category: "Buah Import", 
    displayPrice: "30.00", 
    price: 3000, 
    rate: '3.2', 
    isFav: false, 
    stok: 230, 
    initialStok: 230, 
    image: "/img/buah_import/jambu-kristal.png" },
  { 
    id: 20,
    name: "Jeruk", 
    deskripsi: "Jeruk adalah buah yang memiliki kulit tebal dan daging buah berair serta memiliki rasa manis atau asam.", 
    category: "Buah Import", 
    displayPrice: "32.00", 
    price: 3200, 
    rate: '4.7', 
    isFav: false, 
    stok: 240, 
    initialStok: 240, 
    image: "/img/buah_import/jeruk.png" },
  { 
    id: 21,
    name: "Kiwi", 
    deskripsi: "Kiwi adalah buah dengan daging berwarna hijau dan memiliki rasa manis serta asam.", 
    category: "Buah Import", 
    displayPrice: "34.00", 
    price: 3400, 
    rate: '4.6', 
    isFav: false, 
    stok: 250, 
    initialStok: 250, 
    image: "/img/buah_import/kiwi.png" },
  { 
    id: 22,
    name: "Klengkeng", 
    deskripsi: "Klengkeng adalah buah yang memiliki daging buah yang manis dan biji kecil di dalamnya.", 
    category: "Buah Import", 
    displayPrice: "36.00", 
    price: 3600, 
    rate: '4.5', 
    isFav: false, 
    stok: 260, 
    initialStok: 260, 
    image: "/img/buah_import/KLengkeng.png" },
  { 
    id: 23,
    name: "Lemon", 
    deskripsi: "Lemon adalah buah yang memiliki rasa asam segar dan sering digunakan dalam berbagai hidangan dan minuman.", 
    category: "Buah Import", 
    displayPrice: "38.00", 
    price: 3800, 
    rate: '4.3', 
    isFav: false, 
    stok: 270, 
    initialStok: 270, 
    image: "/img/buah_import/lemon.png" },
  { 
    id: 24,
    name: "Melon", 
    deskripsi: "Melon adalah buah yang memiliki daging buah yang manis serta memiliki tekstur lembut dan segar.", 
    category: "Buah Import", 
    displayPrice: "40.00", 
    price: 4000, 
    rate: '4.4', 
    isFav: false, 
    stok: 280, 
    initialStok: 280, 
    image: "/img/buah_import/Melon.png" },
  { 
    id: 25,
    name: "Pepaya", 
    deskripsi: "Pepaya adalah buah yang memiliki daging buah yang manis dan tekstur yang lembut serta memiliki banyak manfaat.", 
    category: "Buah Import", 
    displayPrice: "42.00", 
    price: 4200, 
    rate: '4.2', 
    isFav: false, 
    stok: 290, 
    initialStok: 290, 
    image: "/img/buah_import/Pepaya.png" },
  { 
    id: 26,
    name: "Pisang", 
    deskripsi: "Pisang adalah buah yang memiliki kulit berwarna kuning dan daging buah yang manis serta kaya akan kalium.", 
    category: "Buah Import", 
    displayPrice: "44.00", 
    price: 4400, 
    rate: '4.7', 
    isFav: false, 
    stok: 300, 
    initialStok: 300, 
    image: "/img/buah_import/Pisang.png" },
  { 
    id: 27,
    name: "Semangka", 
    deskripsi: "Semangka adalah buah yang memiliki daging buah yang berair dan manis serta berwarna merah.", 
    category: "Buah Import", 
    displayPrice: "46.00", 
    price: 4600, 
    rate: '4.5', 
    isFav: false, 
    stok: 310, 
    initialStok: 310, 
    image: "/img/buah_import/semangka.png" },
  { 
    id: 28,
    name: "Bawang Bombay", 
    deskripsi: "Bawang Bombay adalah sayuran yang memiliki aroma dan rasa yang khas.", 
    category: "Sayur", 
    displayPrice: "10.00", 
    price: 1000, 
    rate: '3.2', 
    isFav: false, 
    stok: 50, 
    initialStok: 50, 
    image: "/img/sayur/bawang-bombay.jpg" },
  { 
    id: 29,
    name: "Bawang Merah", 
    deskripsi: "Bawang Merah adalah sayuran yang memiliki rasa tajam dan digunakan sebagai bumbu dalam masakan.", 
    category: "Sayur", 
    displayPrice: "12.00", 
    price: 1200, 
    rate: '4.4', 
    isFav: false, 
    stok: 60, 
    initialStok: 60, 
    image: "/img/sayur/bawang-merah.jpg" },
  { 
    id: 30,
    name: "Bawang Putih", 
    deskripsi: "Bawang Putih adalah sayuran yang memiliki rasa dan aroma tajam serta memiliki banyak manfaat kesehatan.", 
    category: "Sayur", 
    displayPrice: "14.00", 
    price: 1400, 
    rate: '4.5', 
    isFav: false, 
    stok: 70, 
    initialStok: 70, 
    image: "/img/sayur/bawang-putih.jpg" },
  { 
    id: 31,
    name: "Bayam", 
    deskripsi: "Bayam adalah sayuran hijau yang kaya akan nutrisi dan sering digunakan dalam masakan.", 
    category: "Sayur", 
    displayPrice: "16.00", 
    price: 1600, 
    rate: '4.3', 
    isFav: false, 
    stok: 80, 
    initialStok: 80, 
    image: "/img/sayur/Bayem.jpg" },
  { 
    id: 32,
    name: "Brokoli", 
    deskripsi: "Brokoli adalah sayuran hijau yang memiliki kandungan gizi tinggi dan sering digunakan dalam hidangan sehat.", 
    category: "Sayur", 
    displayPrice: "18.00", 
    price: 1800, 
    rate: '4.6', 
    isFav: false, 
    stok: 90, 
    initialStok: 90, 
    image: "/img/sayur/Brokoli.jpg" },
  { 
    id: 33,
    name: "Buncis Lokal", 
    deskripsi: "Buncis Lokal adalah sayuran yang memiliki tekstur renyah dan sering digunakan dalam berbagai masakan.", 
    category: "Sayur", 
    displayPrice: "20.00", 
    price: 2000, 
    rate: '3.4', 
    isFav: false, 
    stok: 100, 
    initialStok: 100, 
    image: "/img/sayur/buncis-lokal.jpg" },
  { 
    id: 34,
    name: "Cabe Hijau", 
    deskripsi: "Cabe Hijau adalah sayuran yang memiliki tingkat kepedasan yang sedang dan sering digunakan dalam masakan.", 
    category: "Sayur", 
    displayPrice: "22.00", 
    price: 2200, 
    rate: '4.3', 
    isFav: false, 
    stok: 110, 
    initialStok: 110, 
    image: "/img/sayur/cabe-hijau.jpg" },
  { 
    id: 35,
    name: "Cabe Merah", 
    deskripsi: "Cabe Merah adalah sayuran yang memiliki tingkat kepedasan yang tinggi dan sering digunakan dalam masakan pedas.", 
    category: "Sayur", 
    displayPrice: "24.00", 
    price: 2400, 
    rate: '3.5', 
    isFav: false, 
    stok: 120, 
    initialStok: 120, 
    image: "/img/sayur/cabe-merah.jpg" },
  { 
    id: 36,
    name: "Daun Bawang", 
    deskripsi: "Daun Bawang adalah sayuran yang memiliki aroma khas dan digunakan sebagai bumbu dalam masakan.", 
    category: "Sayur", 
    displayPrice: "26.00", 
    price: 2600, 
    rate: '4.2', 
    isFav: false, 
    stok: 130, 
    initialStok: 130, 
    image: "/img/sayur/daun-bawang.jpg" },
  { 
    id: 37,
    name: "Daun Gingseng", 
    deskripsi: "Daun Gingseng adalah sayuran yang memiliki banyak manfaat kesehatan dan sering digunakan dalam ramuan tradisional.", 
    category: "Sayur", 
    displayPrice: "28.00", 
    price: 2800, 
    rate: '4.7', 
    isFav: false, 
    stok: 140, 
    initialStok: 140, 
    image: "/img/sayur/daun-gingseng.jpg" },
  { 
    id: 38,
    name: "Daun Mint", 
    deskripsi: "Daun Mint adalah sayuran yang memiliki aroma segar dan sering digunakan dalam minuman atau hidangan penutup.", 
    category: "Sayur", 
    displayPrice: "30.00", 
    price: 3000, 
    rate: '4.4', 
    isFav: false, 
    stok: 150, 
    initialStok: 150, 
    image: "/img/sayur/daun-mint.jpg" },
  { 
    id: 39,
    name: "Daun Salam", 
    deskripsi: "Daun Salam adalah sayuran yang digunakan sebagai bumbu dalam masakan dengan aroma khas.", 
    category: "Sayur", 
    displayPrice: "32.00", 
    price: 3200, 
    rate: '3.3', 
    isFav: false, 
    stok: 160, 
    initialStok: 160, 
    image: "/img/sayur/daun-salam.jpg" },
  { 
    id: 40,
    name: "Daun Siomak", 
    deskripsi: "Daun Siomak adalah sayuran yang digunakan dalam pembungkusan makanan seperti lumpia atau siomay.", 
    category: "Sayur", 
    displayPrice: "34.00", 
    price: 3400, 
    rate: '4.6', 
    isFav: false, 
    stok: 170, 
    initialStok: 170, 
    image: "/img/sayur/daun-siomak.jpg" },
  { 
    id: 41,
    name: "Jagung", 
    deskripsi: "Jagung adalah sayuran dengan biji-bijian yang manis dan sering digunakan dalam hidangan seperti sup atau bakar.", 
    category: "Sayur", 
    displayPrice: "36.00", 
    price: 3600, 
    rate: '4.5', 
    isFav: false, 
    stok: 180, 
    initialStok: 180, 
    image: "/img/sayur/Jagung.jpg" },
  { 
    id: 42,
    name: "Jahe", 
    deskripsi: "Jahe adalah sayuran yang memiliki rasa pedas dan aroma khas serta memiliki banyak manfaat kesehatan.", 
    category: "Sayur", 
    displayPrice: "38.00", 
    price: 3800, 
    rate: '4.4', 
    isFav: false, 
    stok: 190, 
    initialStok: 190, 
    image: "/img/sayur/Jahe.jpg" },
  { 
    id: 43,
    name: "Jeruk Nipis", 
    deskripsi: "Jeruk Nipis adalah sayuran yang memiliki rasa asam segar dan sering digunakan dalam masakan atau minuman.", 
    category: "Sayur", 
    displayPrice: "40.00", 
    price: 4000, 
    rate: '4.7', 
    isFav: false, 
    stok: 200, 
    initialStok: 200, 
    image: "/img/sayur/jeruk-nipis.jpg" },
  { 
    id: 44,
    name: "Kacang Panjang", 
    deskripsi: "Kacang Panjang adalah sayuran yang memiliki biji panjang dan sering digunakan dalam hidangan tumis atau sup.", 
    category: "Sayur", 
    displayPrice: "42.00", 
    price: 4200, 
    rate: '4.6', 
    isFav: false, 
    stok: 50, 
    initialStok: 50, 
    image: "/img/sayur/kacang-panjang.jpg" },
  { 
    id: 45,
    name: "Kailan", 
    deskripsi: "Kailan adalah sayuran hijau yang sering digunakan dalam hidangan masakan Tionghoa.", 
    category: "Sayur", 
    displayPrice: "44.00", 
    price: 4400, 
    rate: '4.3', 
    isFav: false, 
    stok: 60, 
    initialStok: 60, 
    image: "/img/sayur/Kailan.jpg" },
  { 
    id: 46,
    name: "Kangkung", 
    deskripsi: "Kangkung adalah sayuran hijau yang sering digunakan dalam hidangan tumis atau sup.", 
    category: "Sayur", 
    displayPrice: "46.00", 
    price: 4600, 
    rate: '4.5', 
    isFav: false, 
    stok: 70, 
    initialStok: 70, 
    image: "/img/sayur/Kangkung.jpg" },
  { 
    id: 47,
    name: "Kembang Kol", 
    deskripsi: "Kembang Kol adalah sayuran yang memiliki bentuk menyerupai bunga dan sering digunakan dalam hidangan seperti tumis atau sup.", 
    category: "Sayur", 
    displayPrice: "48.00", 
    price: 4800, 
    rate: '4.4', 
    isFav: false, 
    stok: 80, 
    initialStok: 80, 
    image: "/img/sayur/kembang-kol.jpg" },
  { 
    id: 48,
    name: "Kentang", 
    deskripsi: "Kentang adalah sayuran dengan tekstur yang lembut dan sering digunakan dalam hidangan seperti kentang goreng atau puree.", 
    category: "Sayur", 
    displayPrice: "50.00", 
    price: 5000, 
    rate: '4.7', 
    isFav: false, 
    stok: 90, 
    initialStok: 90, 
    image: "/img/sayur/Kentang.jpg" },
  { 
    id: 49,
    name: "Labu Siam", 
    deskripsi: "Labu Siam adalah sayuran yang memiliki tekstur renyah dan sering digunakan dalam hidangan seperti sup atau tumis.", 
    category: "Sayur", 
    displayPrice: "52.00", 
    price: 5200, 
    rate: '4.6', 
    isFav: false, 
    stok: 100, 
    initialStok: 100, 
    image: "/img/sayur/labu-siam.jpg" },
  { 
    id: 50,
    name: "Lengkuas", 
    deskripsi: "Lengkuas adalah sayuran dengan aroma khas dan sering digunakan sebagai bumbu dalam masakan.", 
    category: "Sayur", 
    displayPrice: "54.00", 
    price: 5400, 
    rate: '4.3', 
    isFav: false, 
    stok: 110, 
    initialStok: 110, 
    image: "/img/sayur/Lengkuas.jpg" },
  { 
    id: 51,
    name: "Lobak", 
    deskripsi: "Lobak adalah sayuran dengan rasa segar dan sering digunakan dalam hidangan seperti salad atau acar.", 
    category: "Sayur", 
    displayPrice: "56.00", 
    price: 5600, 
    rate: '3.5', 
    isFav: false, 
    stok: 120, 
    initialStok: 120, 
    image: "/img/sayur/Lobak.jpg" },
  { 
    id: 52,
    name: "Oregano", 
    deskripsi: "Oregano adalah sayuran dengan aroma dan rasa yang khas serta sering digunakan sebagai bumbu dalam masakan Italia.", 
    category: "Sayur", 
    displayPrice: "58.00", 
    price: 5800, 
    rate: '4.4', 
    isFav: false, 
    stok: 130, 
    initialStok: 130, 
    image: "/img/sayur/Oregano.jpg" },
  { 
    id: 53,
    name: "Pak Choy", 
    deskripsi: "Pak Choy adalah sayuran hijau yang sering digunakan dalam hidangan masakan Asia.", 
    category: "Sayur", 
    displayPrice: "60.00", 
    price: 6000, 
    rate: '4.7', 
    isFav: false, 
    stok: 140, 
    initialStok: 140, 
    image: "/img/sayur/pak-choy.jpg" },
  { 
    id: 54,
    name: "Paprika Merah", 
    deskripsi: "Paprika Merah adalah sayuran yang memiliki rasa manis dan sering digunakan dalam masakan atau salad.", 
    category: "Sayur", 
    displayPrice: "62.00", 
    price: 6200, 
    rate: '4.6', 
    isFav: false, 
    stok: 150, 
    initialStok: 150, 
    image: "/img/sayur/paprika-merah.jpg" },
  { 
    id: 55,
    name: "Pare", 
    deskripsi: "Pare adalah sayuran yang memiliki rasa pahit dan sering digunakan dalam hidangan tumis atau sup.", 
    category: "Sayur", 
    displayPrice: "64.00", 
    price: 6400, 
    rate: '4.3', 
    isFav: false, 
    stok: 160, 
    initialStok: 160, 
    image: "/img/sayur/Pare.jpg" },
  { 
    id: 56,
    name: "Radish", 
    deskripsi: "Radish adalah sayuran dengan rasa pedas dan sering digunakan dalam hidangan seperti salad atau acar.", 
    category: "Sayur", 
    displayPrice: "66.00", 
    price: 6600, 
    rate: '4.5', 
    isFav: false, 
    stok: 170, 
    initialStok: 170, 
    image: "/img/sayur/Radish.jpg" },
  { 
    id: 57,
    name: "Sawi Hijau", 
    deskripsi: "Sawi Hijau adalah sayuran hijau yang sering digunakan dalam hidangan tumis atau sup.", 
    category: "Sayur", 
    displayPrice: "68.00", 
    price: 6800, 
    rate: '3.4', 
    isFav: false, 
    stok: 180, 
    initialStok: 180, 
    image: "/img/sayur/sawi-hijau.jpg" },
  { 
    id: 58,
    name: "Selada Romain", 
    deskripsi: "Selada Romain adalah sayuran hijau yang sering digunakan dalam hidangan salad.", 
    category: "Sayur", 
    displayPrice: "70.00", 
    price: 7000, 
    rate: '4.7', 
    isFav: false, 
    stok: 190, 
    initialStok: 190, 
    image: "/img/sayur/selada-romain.jpg" },
  { 
    id: 59,
    name: "Seledri", 
    deskripsi:"Seledri adalah sayuran dengan aroma khas dan sering digunakan sebagai bumbu dalam masakan atau sebagai garnis.", 
    category: "Sayur", 
    displayPrice: "72.00", 
    price: 7200, 
    rate: '4.6', 
    isFav: false, 
    stok: 200, 
    initialStok: 200, 
    image: "/img/sayur/Seledri.jpg" },
  { 
    id: 60,
    name: "Sereh", 
    deskripsi: "Sereh adalah sayuran dengan aroma harum dan sering digunakan sebagai bumbu dalam masakan.", 
    category: "Sayur", 
    displayPrice: "74.00", 
    price: 7400, 
    rate: '4.3', 
    isFav: false, 
    stok: 50, 
    initialStok: 50, 
    image: "/img/sayur/Sereh.jpg" },
  { 
    id: 61,
    name: "Tahu", 
    deskripsi: "Tahu adalah sayuran dengan tekstur lembut dan sering digunakan dalam hidangan seperti tumis atau sup.", 
    category: "Sayur", 
    displayPrice: "76.00", 
    price: 7600, 
    rate: '4.5', 
    isFav: false, 
    stok: 60, 
    initialStok: 60, 
    image: "/img/sayur/Tahu.jpg" },
  { 
    id: 62,
    name: "Tempe", 
    deskripsi: "Tempe adalah sayuran yang memiliki rasa pedas dan sering digunakan dalam hidangan seperti sambal atau masakan khas Indonesia.", 
    category: "Sayur", 
    displayPrice: "78.00", 
    price: 7800, 
    rate: '4.4', 
    isFav: false, 
    stok: 70, 
    initialStok: 70, 
    image: "/img/sayur/tempe.jpg" },
  { 
    id: 63,
    name: "Terong Ungu", 
    deskripsi: "Terong Ungu adalah sayuran dengan warna ungu yang menarik dan sering digunakan dalam hidangan tumis atau sup.", 
    category: "Sayur", 
    displayPrice: "80.00", 
    price: 8000, 
    rate: '3.7', 
    isFav: false, 
    stok: 80, 
    initialStok: 80, 
    image: "/img/sayur/terong-ungu.jpg" },
  { 
    id: 64,
    name: "Timun", 
    deskripsi: "Timun adalah sayuran yang memiliki rasa segar dan sering digunakan dalam hidangan salad atau sebagai acar.", 
    category: "Sayur", 
    displayPrice: "82.00", 
    price: 8200, 
    rate: '4.6', 
    isFav: false, 
    stok: 90, 
    initialStok: 90, 
    image: "/img/sayur/Timun.jpg" },
  { 
    id: 65,
    name: "Toge", 
    deskripsi: "Toge adalah sayuran yang memiliki tekstur renyah dan sering digunakan dalam hidangan seperti pecel atau lalapan.", 
    category: "Sayur", 
    displayPrice: "84.00", 
    price: 8400, 
    rate: '4.3', 
    isFav: false, 
    stok: 100, 
    initialStok: 100, 
    image: "/img/sayur/toge.jpg" },
  { 
    id: 66,
    name: "Ubi", 
    deskripsi: "Ubi adalah sayuran dengan rasa manis dan sering digunakan dalam hidangan seperti kue atau olahan panggang.", 
    category: "Sayur", 
    displayPrice: "86.00", 
    price: 8600, 
    rate: '4.5', 
    isFav: false, 
    stok: 110, 
    initialStok: 110, 
    image: "/img/sayur/ubi.png" },
  { 
    id: 67,
    name: "Wortel", 
    deskripsi: "Wortel adalah sayuran yang memiliki warna oranye cerah dan sering digunakan dalam hidangan seperti sup atau tumis.", 
    category: "Sayur", 
    displayPrice: "88.00", 
    price: 8800, 
    rate: '4.4', 
    isFav: false, 
    stok: 120, 
    initialStok: 120, 
    image: "/img/sayur/Wortel.jpg" 
  },
  { 
    id: 68,
    name: "Almond Caffe Latte", 
    deskripsi: "Almond coffee latte atau latte kopi almond adalah minuman berbasis kopi yang populer yang menggabungkan rasa kaya almond dengan kelembutan dari latte. Minuman ini merupakan kombinasi yang nikmat antara espresso, susu steamed, dan sirup almond atau susu almond, menghasilkan minuman yang krimi dan sedikit berasa kacang-kacangan.", 
    category: "Minuman", 
    displayPrice: "50.00", 
    price: 5000, 
    rate: '4.9', 
    isFav: false, 
    stok: 20, 
    initialStok: 20, 
    image: "/img/minuman/almond-caffeLatte.jpg" 
  },
  { 
    id: 69,
    name: "Caffe Latte", 
    deskripsi: "Caffe latte adalah minuman kopi yang terdiri dari satu atau dua shot espresso yang dicampur dengan susu panas. Minuman ini memiliki rasio espresso dan susu yang seimbang, dengan lapisan busa halus di atasnya. Caffe latte memiliki cita rasa yang lembut, creamy, dan sedikit manis dari susu, dengan aroma kopi yang kaya. Minuman ini sering disajikan dalam cangkir besar dan bisa dinikmati dengan atau tanpa tambahan sirup atau hiasan.", 
    category: "Minuman", 
    displayPrice: "20.00", 
    price: 2000, 
    rate: '4.2', 
    isFav: false, 
    stok: 10, 
    initialStok: 10, 
    image: "/img/minuman/caffe-latte.jpg" 
  },
  { 
    id: 70,
    name: "Chocolate Almond", 
    deskripsi: "Coklat almond adalah sejenis permen atau makanan manis yang terdiri dari almond yang dilapisi dengan lapisan coklat. Almond, yang merupakan kacang dengan rasa kaya dan tekstur renyah, menjadi inti utama dari coklat almond. Biasanya, almond yang digunakan dalam coklat almond telah dikupas kulitnya.", 
    category: "Minuman", 
    displayPrice: "32.00", 
    price: 3200, 
    rate: '4.1', 
    isFav: false, 
    stok: 15, 
    initialStok: 15, 
    image: "/img/minuman/chocolate-almond.jpg" 
  },
  { 
    id: 71,
    name: "Chocolate Avocado", 
    deskripsi: "Minuman coklat avocado adalah minuman yang menggabungkan kelezatan coklat dengan krimi dan kekayaan rasa alpukat. Ini adalah kombinasi yang segar dan menyegarkan.", 
    category: "Minuman", 
    displayPrice: "42.00", 
    price: 4200, 
    rate: '3.9', 
    isFav: false, 
    stok: 27, 
    initialStok: 27, 
    image: "/img/minuman/chocolate-avocado.jpg" 
  },
  { 
    id: 72,
    name: "Chocolate Banana", 
    deskripsi: "Minuman coklat banana adalah minuman yang menggabungkan kelezatan coklat dengan rasa manis dan krimi dari pisang. Ini adalah kombinasi yang memikat dan menyegarkan.", 
    category: "Minuman", 
    displayPrice: "31.00", 
    price: 3100, 
    rate: '4.2', 
    isFav: false, 
    stok: 30, 
    initialStok: 30, 
    image: "/img/minuman/chocolate-banana.jpg" 
  },
  { 
    id: 73,
    name: "Chocolate Nut", 
    deskripsi: "Minuman coklat nut adalah minuman yang menggabungkan cita rasa kaya dan manis dari coklat dengan kelezatan dan kekayaan rasa kacang. Ini adalah kombinasi yang lezat dan memikat.", 
    category: "Minuman", 
    displayPrice: "51.00", 
    price: 5100, 
    rate: '4.0', 
    isFav: false, 
    stok: 36, 
    initialStok: 36, 
    image: "/img/minuman/chocolate-nut.jpg" 
  },
  { 
    id: 74,
    name: "Jus Anggur", 
    deskripsi: "Jus anggur adalah minuman segar yang terbuat dari perasan buah anggur. Ini adalah minuman yang populer karena cita rasanya yang manis, sejuk, dan menyegarkan.", 
    category: "Minuman", 
    displayPrice: "68.00", 
    price: 6800, 
    rate: '4.5', 
    isFav: false, 
    stok: 46, 
    initialStok: 46, 
    image: "/img/minuman/jus-anggur.jpg" 
  },
  { 
    id: 75,
    name: "Jus Bayam", 
    deskripsi: "Jus bayam adalah minuman yang terbuat dari daun bayam yang diolah menjadi jus. Bayam adalah sayuran hijau yang kaya akan nutrisi dan sering dianggap sebagai superfood karena kandungan gizi yang tinggi.", 
    category: "Minuman", 
    displayPrice: "40.00", 
    price: 4000, 
    rate: '4.1', 
    isFav: false, 
    stok: 26, 
    initialStok: 26, 
    image: "/img/minuman/jus-bayam.jpg" 
  },
  { 
    id: 76,
    name: "Jus Jahe Merah", 
    deskripsi: "Jus jahe merah adalah minuman yang terbuat dari jahe merah segar yang diolah menjadi jus. Jahe merah adalah varietas jahe yang memiliki rasa yang lebih kuat dan pedas dibandingkan dengan jahe biasa.", 
    category: "Minuman", 
    displayPrice: "39.00", 
    price: 3900, 
    rate: '3.5', 
    isFav: false, 
    stok: 30, 
    initialStok: 30, 
    image: "/img/minuman/jus-jahe-merah.jpg" 
  },
  { 
    id: 77,
    name: "Jus Jeruk", 
    deskripsi: "Jus jeruk adalah minuman segar yang terbuat dari perasan buah jeruk. Jeruk adalah buah yang kaya akan vitamin C dan memiliki rasa manis asam yang khas.", 
    category: "Minuman", 
    displayPrice: "52.00", 
    price: 5200, 
    rate: '5.0', 
    isFav: false, 
    stok: 50, 
    initialStok: 50, 
    image: "/img/minuman/jus-jeruk.jpg" 
  },
  { 
    id: 78,
    name: "Jus Kubis", 
    deskripsi: "Jus kubis adalah minuman yang terbuat dari jus segar kubis. Kubis adalah sayuran hijau yang memiliki tekstur renyah dan rasa yang lembut.", 
    category: "Minuman", 
    displayPrice: "24.00", 
    price: 2400, 
    rate: '3.3', 
    isFav: false, 
    stok: 10, 
    initialStok: 10, 
    image: "/img/minuman/jus-kubis.jpg" 
  },
  { 
    id: 79,
    name: "Jus Lemon", 
    deskripsi: "Jus lemon sering dinikmati sebagai minuman penambah energi pada pagi hari atau sebagai bahan dalam campuran minuman lain seperti koktail atau mocktail. Rasanya yang asam dan menyegarkan memberikan sensasi kesegaran pada setiap tegukan.", 
    category: "Minuman", 
    displayPrice: "32.00", 
    price: 3200, 
    rate: '4.3', 
    isFav: false, 
    stok: 53, 
    initialStok: 53, 
    image: "/img/minuman/jus-lemon.jpg" 
  },
  { 
    id: 80,
    name: "Jus Nanas", 
    deskripsi: "Jus nanas dapat dinikmati dalam keadaan segar dan dingin, dan sering kali menjadi pilihan yang menyegarkan di musim panas. Minuman ini dapat diminum secara langsung atau digunakan sebagai bahan dasar dalam berbagai campuran minuman seperti koktail, smoothie, atau mocktail.", 
    category: "Minuman", 
    displayPrice: "27.00", 
    price: 2700, 
    rate: '4.7', 
    isFav: false, 
    stok: 73, 
    initialStok: 73, 
    image: "/img/minuman/jus-nanas.jpg" 
  },
  { 
    id: 81,
    name: "Jus Semangka", 
    deskripsi: "Selain kenikmatan rasanya, jus semangka juga memiliki manfaat kesehatan. Semangka mengandung banyak air, elektrolit, dan antioksidan seperti likopen yang baik untuk hidrasi tubuh dan menjaga kesehatan kulit. Jus semangka juga rendah kalori dan tinggi vitamin C, vitamin A, serta zat besi.", 
    category: "Minuman", 
    displayPrice: "34.00", 
    price: 3400, 
    rate: '4.9', 
    isFav: false, 
    stok: 45, 
    initialStok: 45, 
    image: "/img/minuman/jus-semangka.jpg" 
  },
  { 
    id: 82,
    name: "Jus Strawberry", 
    deskripsi: "Selain kenikmatan rasanya, jus strawberry juga mengandung berbagai nutrisi penting. Stroberi kaya akan vitamin C, serat, antioksidan, serta zat besi dan kalium. Jus strawberry juga diketahui memiliki potensi manfaat untuk menjaga kesehatan jantung, meningkatkan sistem kekebalan tubuh, serta mendukung kesehatan kulit.", 
    category: "Minuman", 
    displayPrice: "90.00", 
    price: 9000, 
    rate: '5.0', 
    isFav: false, 
    stok: 45, 
    initialStok: 45, 
    image: "/img/minuman/jus-strawberry.jpg" 
  },
  { 
    id: 83,
    name: "Jus Temulawak", 
    deskripsi: "Jus temulawak dapat dinikmati dalam keadaan segar dan dingin. Minuman ini biasanya diminum dalam jumlah yang lebih kecil dibandingkan jus buah lainnya, karena rasanya yang pahit dan kuat. Beberapa orang juga mengonsumsi jus temulawak sebagai bagian dari program detoksifikasi atau suplemen herbal.", 
    category: "Minuman", 
    displayPrice: "20.00", 
    price: 2000, 
    rate: '3.1', 
    isFav: false, 
    stok: 63, 
    initialStok: 63, 
    image: "/img/minuman/jus-temulawak.jpg" 
  },
  { 
    id: 84,
    name: "Jus Timun", 
    deskripsi: "Selain kenikmatan rasanya, jus timun juga memiliki manfaat kesehatan. Timun mengandung banyak air, serat, dan nutrisi seperti vitamin K, vitamin C, dan kalium. Jus timun diketahui dapat membantu dalam menjaga hidrasi tubuh, mengurangi kelebihan panas dalam tubuh, serta dapat memiliki efek menenangkan pada sistem pencernaan.", 
    category: "Minuman", 
    displayPrice: "25.00", 
    price: 2500, 
    rate: '4.1', 
    isFav: false, 
    stok: 32, 
    initialStok: 32, 
    image: "/img/minuman/jus-timun.jpg" 
  },
  { 
    id: 85,
    name: "Susu Almond", 
    deskripsi: "Susu almond memiliki warna putih kental dan rasa yang lembut dengan sentuhan kacang almond yang khas. Rasanya tidak terlalu manis dan memiliki sedikit kekentalan yang mirip dengan susu sapi.", 
    category: "Minuman", 
    displayPrice: "65.00", 
    price: 6500, 
    rate: '4.3', 
    isFav: false, 
    stok: 54, 
    initialStok: 54, 
    image: "/img/minuman/susu-almond.jpg" 
  },
  { 
    id: 86,
    name: "Susu Buah Naga", 
    deskripsi: "Susu buah naga memiliki warna cerah yang menarik, biasanya merah atau merah muda tergantung pada jenis buah naga yang digunakan. Rasanya yang manis dan segar membuatnya menjadi minuman yang menyenangkan dan menyegarkan.", 
    category: "Minuman", 
    displayPrice: "55.00", 
    price: 5500, 
    rate: '4.6', 
    isFav: false, 
    stok: 74, 
    initialStok: 74, 
    image: "/img/minuman/susu-buahNaga.jpg" 
  },
  { 
    id: 87,
    name: "Susu Teh Hijau", 
    deskripsi: "Susu teh hijau memiliki warna hijau muda atau kecoklatan tergantung pada kekentalan dan jenis teh hijau yang digunakan. Rasanya unik dengan kombinasi rasa teh yang khas dan kelembutan susu yang memberikan sentuhan kreami.", 
    category: "Minuman", 
    displayPrice: "30.00", 
    price: 3000, 
    rate: '4.2', 
    isFav: false, 
    stok: 84, 
    initialStok: 84, 
    image: "/img/minuman/susu-tehHijau.jpg" 
  },
]


// limit prod
const productsLimit = []
for(let i = 0; i < 10; i++) {
  productsLimit.push(products[i])
}

function randomComparator() {
  return Math.random() - 0.5;
}

// state
const initialState = {
  allProducts: products.sort(randomComparator),
  productsLimit: productsLimit,
  sayur: products.filter(item => item.category == 'Sayur'),
  local: products.filter(item => item.category == 'Buah Lokal'),
  import: products.filter(item => item.category == 'Buah Import'),
  minuman: products.filter(item => item.category == 'Minuman'),
  backUp: [],
  backUpLocal: [],
  backUpImport: [],
  backUpVegetables: [],
  backUpBeverages: [],
  backUpMinuman: [],
  path: '',
  stokDetail: null,
  isFavDetail: null
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    changePath: (state, action) => {
      state.path = action.payload
    },
    generateFilter: (state, action) => {
      if(action.payload.jenis == 'max') {
        if(state.path == '/all-products') {
          if(state.backUp.length != 0) {
            state.allProducts = state.backUp
          } 
          state.backUp = state.allProducts
  
          state.allProducts = state.allProducts.filter(item => item.price <= 2000)
        } else if(state.path == '/local-fruits') {
          if(state.backUpLocal.length != 0) {
            state.local = state.backUpLocal
          } 
          state.backUpLocal = state.local
  
          state.local = state.local.filter(item => item.price <= 2000)
        } else if(state.path == '/import-fruits') {
          if(state.backUpImport.length != 0) {
            state.import = state.backUpImport
          } 
          state.backUpImport = state.import
  
          state.import = state.import.filter(item => item.price <= 2000)
        } else if(state.path == '/vegetables') {
          if(state.backUpVegetables.length != 0) {
            state.sayur = state.backUpVegetables
          } 
          state.backUpVegetables = state.sayur
  
          state.sayur = state.sayur.filter(item => item.price <= 2000)
        } else if(state.path == '/beverages') {
          if(state.backUpBeverages.length != 0) {
            state.minuman = state.backUpBeverages
          } 
          state.backUpBeverages = state.minuman
  
          state.minuman = state.minuman.filter(item => item.price <= 2000)
        }
      } else if(action.payload.jenis == 'min') {
        if(state.path == '/all-products') {
          if(state.backUp.length != 0) {
            state.allProducts = state.backUp
          } 
          state.backUp = state.allProducts
          
          state.allProducts = state.allProducts.filter(item => item.price >= 2000)
        } else if(state.path == '/local-fruits') {
          if(state.backUpLocal.length != 0) {
            state.local = state.backUpLocal
          } 
          state.backUpLocal = state.local
          
          state.local = state.local.filter(item => item.price >= 2000)
        } else if(state.path == '/import-fruits') {
          if(state.backUpImport.length != 0) {
            state.import = state.backUpImport
          } 
          state.backUpImport = state.import
          
          state.import = state.import.filter(item => item.price >= 2000)
        } else if(state.path == '/vegetables') {
          if(state.backUpVegetables.length != 0) {
            state.sayur = state.backUpVegetables
          } 
          state.backUpVegetables = state.sayur
          
          state.sayur = state.sayur.filter(item => item.price >= 2000)
        } else if(state.path == '/beverages') {
          if(state.backUpBeverages.length != 0) {
            state.minuman = state.backUpBeverages
          } 
          state.backUpBeverages = state.minuman
  
          state.minuman = state.minuman.filter(item => item.price >= 2000)
        }
      } else if(action.payload.jenis == 'inputCostum') {
        if(state.path == '/all-products') {
          if(state.backUp.length != 0) {
            state.allProducts = state.backUp
          } 
          state.backUp = state.allProducts
  
          if(action.payload.min == 0) {
            state.allProducts = state.allProducts.filter(item => item.price <= action.payload.max)
          } else if(action.payload.max == 0 ) {
            state.allProducts = state.allProducts.filter(item => item.price >= action.payload.min)
          } else {
            state.allProducts = state.allProducts.filter(item => item.price >= action.payload.min && item.price <= action.payload.max)
          }
        } else if(state.path == '/local-fruits') {
          if(state.backUpLocal.length != 0) {
            state.local = state.backUpLocal
          } 
          state.backUpLocal = state.local
  
          if(action.payload.min == 0) {
            state.local = state.local.filter(item => item.price <= action.payload.max)
          } else if(action.payload.max == 0 ) {
            state.local = state.local.filter(item => item.price >= action.payload.min)
          } else {
            state.local = state.local.filter(item => item.price >= action.payload.min && item.price <= action.payload.max)
          }
        } else if(state.path == '/import-fruits') {
          if(state.backUpImport.length != 0) {
            state.import = state.backUpImport
          } 
          state.backUpImport = state.import
  
          if(action.payload.min == 0) {
            state.import = state.import.filter(item => item.price <= action.payload.max)
          } else if(action.payload.max == 0 ) {
            state.import = state.import.filter(item => item.price >= action.payload.min)
          } else {
            state.import = state.import.filter(item => item.price >= action.payload.min && item.price <= action.payload.max)
          }
        } else if(state.path == '/vegetables') {
          if(state.backUpVegetables.length != 0) {
            state.sayur = state.backUpVegetables
          } 
          state.backUpVegetables = state.sayur
  
          if(action.payload.min == 0) {
            state.sayur = state.sayur.filter(item => item.price <= action.payload.max)
          } else if(action.payload.max == 0 ) {
            state.sayur = state.sayur.filter(item => item.price >= action.payload.min)
          } else {
            state.sayur = state.sayur.filter(item => item.price >= action.payload.min && item.price <= action.payload.max)
          }
        } else if(state.path == '/beverages') {
          if(state.backUpBeverages.length != 0) {
            state.minuman = state.backUpBeverages
          } 
          state.backUpBeverages = state.minuman
  
          if(action.payload.min == 0) {
            state.minuman = state.minuman.filter(item => item.price <= action.payload.max)
          } else if(action.payload.max == 0 ) {
            state.minuman = state.minuman.filter(item => item.price >= action.payload.min)
          } else {
            state.minuman = state.minuman.filter(item => item.price >= action.payload.min && item.price <= action.payload.max)
          }
        }
      } else if(action.payload.jenis == 'rate') {
        if(state.path == '/all-products') {
          if(state.backUp.length != 0) {
            state.allProducts = state.backUp
          } 
          state.backUp = state.allProducts
  
          state.allProducts = state.allProducts.filter(item => Number(item.rate.split('.')[0]) >= 4)
        } else if(state.path == '/local-fruits') {
          if(state.backUpLocal.length != 0) {
            state.local = state.backUpLocal
          } 
          state.backUpLocal = state.local
  
          state.local = state.local.filter(item => Number(item.rate.split('.')[0]) >= 4)
        } else if(state.path == '/import-fruits') {
          if(state.backUpImport.length != 0) {
            state.import = state.backUpImport
          } 
          state.backUpImport = state.import
  
          state.import = state.import.filter(item => Number(item.rate.split('.')[0]) >= 4)
        } else if(state.path == '/vegetables') {
          if(state.backUpVegetables.length != 0) {
            state.sayur = state.backUpVegetables
          } 
          state.backUpVegetables = state.sayur
  
          state.sayur = state.sayur.filter(item => Number(item.rate.split('.')[0]) >= 4)
        } else if(state.path == '/beverages') {
          if(state.backUpBeverages.length != 0) {
            state.minuman = state.backUpBeverages
          } 
          state.backUpBeverages = state.minuman
  
          state.minuman = state.minuman.filter(item => Number(item.rate.split('.')[0]) >= 4)
        }
      }
    },
    resetFilter: (state) => {
      if(state.path == '/all-products') {
        state.allProducts = state.backUp
        state.backUp = []
      } else if(state.path == '/local-fruits') {
        state.local = state.backUpLocal
        state.backUpLocal = []
      } else if(state.path == '/import-fruits') {
        state.import = state.backUpImport
        state.backUpImport = []
      } else if(state.path == '/vegetables') {
        state.sayur = state.backUpVegetables
        state.backUpVegetables = []
      } else if(state.path == '/beverages') {
        state.minuman = state.backUpBeverages
        state.backUpBeverages = []
      }
    },
    searchHdl: (state, action) => {
      if(state.backUp.length != 0) {
        state.allProducts = state.backUp
      } 
      state.backUp = state.allProducts

      let query = action.payload.toLowerCase()
      state.allProducts = state.allProducts.filter(item => item.name.toLocaleLowerCase().startsWith(query))
    },
    searchReset: (state) => {
      state.allProducts = state.backUp
      state.backUp = []
    },
    minusProduct: (state, actions) => {
			const itemIndex = state.allProducts.findIndex((item) => item.id === actions.payload.id)
      const itemIndexLocal = state.local.findIndex((item) => item.id === actions.payload.id)
      const itemIndexImport = state.import.findIndex((item) => item.id === actions.payload.id)
      const itemIndexSayur = state.sayur.findIndex((item) => item.id === actions.payload.id)
      const itemIndexMinuman = state.minuman.findIndex((item) => item.id === actions.payload.id)


      // backup allprod
      let findIndexAllProdBackUp = state.backUp.findIndex(item => item.id == actions.payload.id)
      if(findIndexAllProdBackUp >= 0) {
        state.backUp[findIndexAllProdBackUp].stok -= 1
      }

			let findIndexBackUp
      if(state.allProducts[itemIndex].category == 'Buah Lokal') {
        findIndexBackUp = state.backUpLocal.findIndex((item) => item.id === actions.payload.id)
        if(findIndexBackUp >= 0) {
          state.backUpLocal[findIndexBackUp].stok -= 1
        }
      } else if (state.allProducts[itemIndex].category == 'Buah Import') {
        findIndexBackUp = state.backUpImport.findIndex((item) => item.id === actions.payload.id)
        if(findIndexBackUp >= 0) {
          state.backUpImport[findIndexBackUp].stok -= 1
        }
      } else if(state.allProducts[itemIndex].category == 'Sayur') {
        findIndexBackUp = state.backUpVegetables.findIndex((item) => item.id === actions.payload.id)
        if(findIndexBackUp >= 0) {
          state.backUpVegetables[findIndexBackUp].stok -= 1
        }
      } else if(state.allProducts[itemIndex].category == 'Minuman') {
        findIndexBackUp = state.backUpBeverages.findIndex((item) => item.id === actions.payload.id)
        if(findIndexBackUp >= 0) {
          state.backUpBeverages[findIndexBackUp].stok -= 1
        }
      }

      // cek limit prod
      const limitIndex = state.productsLimit.findIndex(item => item.id == actions.payload.id)
      if(limitIndex >= 0) {
        state.productsLimit[limitIndex].stok -= 1
      }

			if (state.allProducts[itemIndex].stok > 0) {
				state.allProducts[itemIndex].stok -= 1
        if(itemIndexLocal >= 0) {
          state.local[itemIndexLocal].stok -= 1
        }
        if(itemIndexImport >= 0) {
          state.import[itemIndexImport].stok -= 1
        }
        if(itemIndexSayur >= 0) {
          state.sayur[itemIndexSayur].stok -= 1
        }
        if(itemIndexMinuman >= 0) {
          state.minuman[itemIndexMinuman].stok -= 1
        }
			}
		},
    plusProduct: (state, actions) => {
			const itemIndex = state.allProducts.findIndex((item) => item.id === actions.payload.id)
      const itemIndexLocal = state.local.findIndex((item) => item.id === actions.payload.id)
      const itemIndexImport = state.import.findIndex((item) => item.id === actions.payload.id)
      const itemIndexSayur = state.sayur.findIndex((item) => item.id === actions.payload.id)
      const itemIndexMinuman = state.minuman.findIndex((item) => item.id === actions.payload.id)

      const stok = actions.payload.stok + 1

      let findIndexAllProdBackUp = state.backUp.findIndex(item => item.id == actions.payload.id)
      if(findIndexAllProdBackUp >= 0) {
        state.backUp[findIndexAllProdBackUp].stok = stok
      }


      let findIndexBackUp
      if(state.allProducts[itemIndex].category == 'Buah Lokal') {
        findIndexBackUp = state.backUpLocal.findIndex((item) => item.id === actions.payload.id)
        if(findIndexBackUp >= 0) {
          state.backUpLocal[findIndexBackUp].stok = stok
        }
      } else if (state.allProducts[itemIndex].category == 'Buah Import') {
        findIndexBackUp = state.backUpImport.findIndex((item) => item.id === actions.payload.id)
        if(findIndexBackUp >= 0) {
          state.backUpImport[findIndexBackUp].stok = stok
        }
      } else if(state.allProducts[itemIndex].category == 'Sayur') {
        findIndexBackUp = state.backUpVegetables.findIndex((item) => item.id === actions.payload.id)
        if(findIndexBackUp >= 0) {
          state.backUpVegetables[findIndexBackUp].stok = stok
        }
      } else if(state.allProducts[itemIndex].category == 'Minuman') {
        findIndexBackUp = state.backUpBeverages.findIndex((item) => item.id === actions.payload.id)
        if(findIndexBackUp >= 0) {
          state.backUpBeverages[findIndexBackUp].stok = stok
        }
      }

      // cek limitProd
      const limitIndex = state.productsLimit.findIndex(item => item.id == actions.payload.id)
      if(limitIndex >= 0) {
        state.productsLimit[limitIndex].stok = stok
      }

			if (stok < actions.payload.initialStok) {
				state.allProducts[itemIndex].stok = stok
        if(itemIndexLocal >= 0) {
          state.local[itemIndexLocal].stok = stok
        }
        if(itemIndexImport >= 0) {
          state.import[itemIndexImport].stok = stok
        }
        if(itemIndexSayur >= 0) {
          state.sayur[itemIndexSayur].stok = stok
        }
        if(itemIndexMinuman >= 0) {
          state.minuman[itemIndexMinuman].stok = stok
        }
			}
		},
    refreshProduct: (state, actions) => {
			const itemIndex = state.allProducts.findIndex((item) => item.id === actions.payload.id)
      const itemIndexLocal = state.local.findIndex((item) => item.id === actions.payload.id)
      const itemIndexImport = state.import.findIndex((item) => item.id === actions.payload.id)
      const itemIndexSayur = state.sayur.findIndex((item) => item.id === actions.payload.id)
      const itemIndexMinuman = state.minuman.findIndex((item) => item.id === actions.payload.id)

      state.allProducts[itemIndex].stok = actions.payload.initialStok
      if(itemIndexLocal >= 0) {
        state.local[itemIndexLocal].stok = actions.payload.initialStok
      }
      if(itemIndexImport >= 0) {
        state.import[itemIndexImport].stok = actions.payload.initialStok
      }
      if(itemIndexSayur >= 0) {
        state.sayur[itemIndexSayur].stok = actions.payload.initialStok
      }
      if(itemIndexMinuman >= 0) {
        state.minuman[itemIndexMinuman].stok = actions.payload.initialStok
      }

      let findIndexAllProdBackUp = state.backUp.findIndex(item => item.id == actions.payload.id)
      if(findIndexAllProdBackUp >= 0) {
        state.backUp[findIndexAllProdBackUp].stok = actions.payload.initialStok
      }

       // cek limitProd
       const limitIndex = state.productsLimit.findIndex(item => item.id == actions.payload.id)
       if(limitIndex >= 0) {
         state.productsLimit[limitIndex].stok = actions.payload.initialStok
       }

      let findIndexBackUp
      if(state.allProducts[itemIndex].category == 'Buah Lokal') {
        findIndexBackUp = state.backUpLocal.findIndex((item) => item.id === actions.payload.id)
        if(findIndexBackUp >= 0) {
          state.backUpLocal[findIndexBackUp].stok = actions.payload.initialStok
        }
      } else if (state.allProducts[itemIndex].category == 'Buah Import') {
        findIndexBackUp = state.backUpImport.findIndex((item) => item.id === actions.payload.id)
        if(findIndexBackUp >= 0) {
          state.backUpImport[findIndexBackUp].stok = actions.payload.initialStok
        }
      } else if(state.allProducts[itemIndex].category == 'Sayur') {
        findIndexBackUp = state.backUpVegetables.findIndex((item) => item.id === actions.payload.id)
        if(findIndexBackUp >= 0) {
          state.backUpVegetables[findIndexBackUp].stok = actions.payload.initialStok
        }
      } else if(state.allProducts[itemIndex].category == 'Minuman') {
        findIndexBackUp = state.backUpBeverages.findIndex((item) => item.id === actions.payload.id)
        if(findIndexBackUp >= 0) {
          state.backUpBeverages[findIndexBackUp].stok = actions.payload.initialStok
        }
      }
		},
    getStokDetail: (state, action) => {
      if(action.payload == 0) {
        state.stokDetail = null
      } else {
        const itemIndex = state.allProducts.findIndex((item) => item.id === action.payload.id)
        state.stokDetail = state.allProducts[itemIndex].stok
      }
    },
    getIsFavDetail: (state, action) => {
      const itemIndex = state.allProducts.findIndex(item => item.id === action.payload.id)
      state.isFavDetail = state.allProducts[itemIndex].isFav
    },
    changeIsFavProduct: (state, actions) => {
      const itemIndex = state.allProducts.findIndex((item) => item.id === actions.payload.id)
      const itemIndexLocal = state.local.findIndex((item) => item.id === actions.payload.id)
      const itemIndexImport = state.import.findIndex((item) => item.id === actions.payload.id)
      const itemIndexSayur = state.sayur.findIndex((item) => item.id === actions.payload.id)
      const itemIndexMinuman = state.minuman.findIndex((item) => item.id === actions.payload.id)

      const limitIndex = state.productsLimit.findIndex(item => item.id == actions.payload.id)
      if(limitIndex >= 0) {
        state.productsLimit[limitIndex].isFav = !state.productsLimit[limitIndex].isFav 
      }

      state.allProducts[itemIndex].isFav = !state.allProducts[itemIndex].isFav
      if(itemIndexLocal >= 0) {
        state.local[itemIndexLocal].isFav = !state.local[itemIndexLocal].isFav
      } else if(itemIndexImport >= 0) {
        state.import[itemIndexImport].isFav = !state.import[itemIndexImport].isFav
      } else if(itemIndexSayur >= 0) {
        state.sayur[itemIndexSayur].isFav = !state.sayur[itemIndexSayur].isFav
      } else if(itemIndexMinuman >= 0) {
        state.minuman[itemIndexMinuman].isFav = !state.minuman[itemIndexMinuman].isFav
      }
    }
  }
})

export const { generateFilter, resetFilter, changePath, searchHdl, searchReset, minusProduct, getStokDetail, plusProduct, refreshProduct, changeIsFavProduct, getIsFavDetail } = productsSlice.actions
export default productsSlice.reducer