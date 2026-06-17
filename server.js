const express = require('express');
const path = require('path');
const db = require('./koneksi'); // Memanggil file koneksi.js

const app = express();
const PORT = 3000;

// Middleware: Agar bisa membaca data dari form (POST) dan file statis (HTML, CSS, JS)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Mengatur folder statis agar CSS dan JS bisa diakses oleh browser
// Contoh: Jika file CSS ada di folder 'owner-dashboard', maka browser bisa mengaksesnya
app.use(express.static(path.join(__dirname)));

// 1. Rute Login (Proses dari login.html)
app.post('/proses-login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const [rows] = await db.execute('SELECT * FROM tb_owner WHERE username = ?', [username]);

        if (rows.length > 0) {
            const owner = rows[0];

            // Verifikasi Password (Jika di DB masih teks biasa)
            if (password === owner.password) {
                // Login Berhasil - Arahkan ke Dashboard Owner
                res.send(`
                    <script>
                        alert('Selamat datang kembali, ${owner.nama_lengkap}!'); 
                        window.location.href = '/Owner/index.html';
                    </script>
                `);
            } else {
                res.send("<script>alert('Password salah!'); window.location.href='/login.html';</script>");
            }
        } else {
            res.send("<script>alert('Username tidak ditemukan!'); window.location.href='/login.html';</script>");
        }
    } catch (error) {
        console.error('Error saat login:', error);
        res.status(500).send("Terjadi kesalahan pada server.");
    }
});

// 2. Rute Dasar (Redirect ke login saat akses homepage)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

// 3. Rute untuk Logout
app.get('/logout', (req, res) => {
    res.send("<script>alert('Anda telah keluar.'); window.location.href='/login.html';</script>");
});

// Menjalankan server
app.listen(PORT, () => {
    console.log('==============================================');
    console.log(`Server Nasi Cumi Pak Kris aktif di: http://localhost:${PORT}`);
    console.log('==============================================');
});