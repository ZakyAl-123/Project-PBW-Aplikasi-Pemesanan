# 🍜 Aplikasi Pemesanan Nasi Cumi Hitam Pak Kris

Sistem pemesanan mandiri berbasis QR code untuk restoran **Nasi Cumi Hitam Pak Kris**. Aplikasi ini memungkinkan pelanggan memesan makanan tanpa harus mengantri di kasir, dengan scanning QR code yang tersedia di setiap meja.

---

## ✨ Fitur Utama

✅ **Dashboard Pelanggan** - Halaman utama dengan QR code untuk scan dan memesan  
✅ **Menu Interaktif** - Tampilkan menu dengan foto, deskripsi, dan harga  
✅ **Sistem Pemesanan** - Tambah/kurangi jumlah pesanan dengan mudah  
✅ **Portal Owner** - Halaman login khusus untuk pemilik restoran  
✅ **Design Responsif** - Bekerja optimal di desktop, tablet, dan mobile  
✅ **Modal About** - Informasi tentang pengembang aplikasi  
✅ **UI/UX Modern** - Desain yang menarik dan user-friendly

---

## 📁 Struktur Folder

```
Project-PBW-Kel-1-Aplikasi-Pemesanan/
│
├── index.html              # Halaman dashboard utama/home
├── login.html              # Halaman login untuk owner
├── script.js               # Script JavaScript untuk dashboard
├── style.css               # Stylesheet untuk dashboard & home
├── login-style.css         # Stylesheet khusus halaman login
│
├── Pelanggan/              # Folder untuk halaman pelanggan
│   ├── index.html          # Halaman menu pemesanan pelanggan
│   ├── script.js           # Script JavaScript untuk pemesanan
│   └── style.css           # Stylesheet untuk halaman pelanggan
│
└── README.md               # File dokumentasi ini
```

---

## 💻 Teknologi yang Digunakan

| Teknologi | Deskripsi |
|-----------|-----------|
| **HTML5** | Struktur halaman web |
| **CSS3** | Styling dan layout responsif |
| **JavaScript** | Interaktivitas & logika aplikasi |
| **Font Awesome** | Icon library untuk UI |
| **QR Code** | Sistem scanning untuk memesan |

---

## 🚀 Instalasi

### Persyaratan
- Browser modern (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, dll)

### Langkah Instalasi

1. **Clone atau download repository ini**
   ```bash
   git clone <repository-url>
   cd Project-PBW-Kel-1-Aplikasi-Pemesanan
   ```

2. **Buka file `index.html` di browser**
   - Double-click pada file `index.html`, atau
   - Klik kanan → Open with → Browser favorit Anda, atau
   - Gunakan Live Server di VS Code

3. **Untuk development, gunakan Live Server:**
   - Install extension "Live Server" di VS Code
   - Klik kanan pada `index.html` → "Open with Live Server"

---

## 📖 Cara Penggunaan

### Untuk Pelanggan (Customer)

1. **Di Restoran:**
   - Pelanggan scan QR code di meja restoran
   - Atau akses link yang tersedia di QR code

2. **Memilih Menu:**
   - Lihat daftar menu dengan foto dan deskripsi
   - Klik tombol **+** untuk menambah jumlah pesanan
   - Klik tombol **-** untuk mengurangi jumlah

3. **Melakukan Pemesanan:**
   - Pilih menu yang diinginkan dan tentukan jumlah
   - Klik tombol "Pesan" atau checkout
   - Tunggu pesanan diproses oleh pihak restoran

### Untuk Owner (Pemilik Restoran)

1. **Akses Portal Owner:**
   - Klik tombol "Login Owner" di halaman utama
   - Atau akses file `login.html` langsung

2. **Login:**
   - Masukkan username/email dan password
   - Centang "Ingat Saya" untuk login otomatis (opsional)
   - Klik tombol "Login ke Dashboard"

3. **Kelola Pesanan:**
   - Lihat daftar pesanan masuk dari pelanggan
   - Update status pesanan (sedang diproses, siap diantar, dll)
   - Monitor performa penjualan

---

## 🎯 Fitur-Fitur Detail

### Dashboard Utama (index.html)
- **Hero Section** - Selamat datang dengan deskripsi restoran
- **QR Code Display** - QR code untuk pelanggan scan
- **Menu Spotlight** - Menu rekomendasi unggulan
- **Navigation Bar** - Menu untuk about & login
- **Modal About** - Informasi tim pengembang

### Halaman Pelanggan (Pelanggan/index.html)
- **Menu Display** - Tampilan menu dalam grid layout
- **Product Cards** - Setiap menu dengan foto, nama, harga
- **Quantity Control** - Tombol +/- untuk mengatur jumlah
- **Header Info** - Nomor meja dan opsi login member
- **Responsive Grid** - Auto-adjust untuk berbagai ukuran layar

### Halaman Login Owner (login.html)
- **Login Form** - Input username/email dan password
- **Remember Me** - Opsi untuk mengingat login
- **Forgot Password** - Link untuk reset password
- **Back Button** - Kembali ke halaman utama
- **Icon Design** - Visual yang profesional dan modern

---

## 📱 Halaman-Halaman

### 1. **index.html** (Dashboard/Home)
Halaman pertama yang dilihat pelanggan, berisi:
- Informasi restoran
- QR code untuk memulai pemesanan
- Menu unggulan
- Tombol navigasi

### 2. **Pelanggan/index.html** (Halaman Pemesanan)
Halaman setelah scan QR, berisi:
- Daftar menu lengkap
- Foto produk
- Harga dan deskripsi
- Sistem pemilihan jumlah
- Keranjang pemesanan

### 3. **login.html** (Portal Owner)
Halaman khusus untuk owner, berisi:
- Form login dengan validasi
- Opsi security tambahan
- Link untuk lupa password

---

## 👨‍💻 Panduan untuk Developer

### Struktur File JavaScript

**script.js** (Dashboard):
```javascript
- Modal About: Buka/tutup informasi pengembang
- Navigation: Handle tombol login & about
- Event Listeners: Interaksi user dengan halaman
```

**Pelanggan/script.js**:
```javascript
- Add to Cart: Tambah item ke keranjang
- Quantity Control: Handle +/- button
- Cart Management: Kelola daftar pesanan
- Checkout: Proses pemesanan
```

### Cara Menambah Menu Baru

1. Buka file `Pelanggan/index.html`
2. Duplicate struktur `.menu-item` yang sudah ada
3. Update:
   - `data-id` - ID unik item
   - `data-name` - Nama menu
   - `data-price` - Harga menu
   - `src="..."` - URL foto
   - Deskripsi dan harga display
4. Simpan file

Contoh:
```html
<div class="menu-item" data-id="3" data-name="Menu Baru" data-price="35000">
    <img src="link-foto.jpg" alt="Menu Baru">
    <div class="menu-details">
        <h3>Menu Baru</h3>
        <p>Deskripsi menu disini...</p>
        <div class="menu-bottom">
            <span class="price">Rp 35.000</span>
            <div class="qty-control">
                <button type="button" class="btn-minus"><i class="fa-solid fa-minus"></i></button>
                <span class="qty-display">0</span>
                <button type="button" class="btn-plus"><i class="fa-solid fa-plus"></i></button>
            </div>
        </div>
    </div>
</div>
```

### Cara Mengubah Styling

1. **Untuk halaman utama/dashboard:**
   - Edit file `style.css`

2. **Untuk halaman login:**
   - Edit file `login-style.css`

3. **Untuk halaman pelanggan:**
   - Edit file `Pelanggan/style.css`

### Custom Font Awesome Icons

Aplikasi menggunakan Font Awesome 6.4.0. Cari icon di: https://fontawesome.com/icons

---

## 🔐 Keamanan

> **⚠️ Catatan:** Ini adalah aplikasi development/pembelajaran. Untuk production:
> - Tambahkan backend server untuk validasi
> - Implement proper authentication & authorization
> - Encrypt password di database
> - Gunakan HTTPS untuk komunikasi

---

## 📝 Catatan Pengembangan

- Saat ini form login di `login.html` belum terhubung ke backend
- QR code masih placeholder (ganti dengan actual QR code URL)
- Keranjang pemesanan tersimpan di browser (local storage)
- Koneksi database belum diimplementasikan

---

## 🤝 Kontribusi

Untuk berkontribusi pada project ini:

1. Fork repository
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

---

## 📄 Lisensi

Project ini adalah bagian dari tugas **Pemrograman Berbasis Web (PBW)** - Kelompok 1.


---

## 🎓 Tentang Proyek

**Nama Project:** Aplikasi Pemesanan Nasi Cumi Hitam Pak Kris  
**Tujuan:** Sistem pemesanan mandiri berbasis QR code untuk mengoptimalkan proses pemesanan  
**Mata Kuliah:** Pemrograman Berbasis Web (PBW)  
**Kelompok:** 1  

---

**Dibuat dengan ❤️ oleh Tim Pengembang Kelompok 1**
