// Memastikan seluruh elemen HTML dimuat terlebih dahulu sebelum script berjalan
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Mengambil elemen-elemen dari HTML
    const modal = document.getElementById('aboutModal');
    const openModalBtn = document.getElementById('aboutBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const loginBtn = document.getElementById('loginBtn');

    // 2. Fungsi Membuka Modal About
    if (openModalBtn && modal) {
        openModalBtn.addEventListener('click', () => {
            modal.classList.add('show-modal');
        });
    }

    // 3. Fungsi Menutup Modal lewat Tombol Silang (X)
    if (closeModalBtn && modal) {
        closeModalBtn.addEventListener('click', () => {
            modal.classList.remove('show-modal');
        });
    }

    // 4. Fungsi Menutup Modal saat Mengklik Area Gelap di Luar Kotak
    if (modal) {
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.remove('show-modal');
            }
        });
    }

    // 5. Fungsi Mengarahkan Tombol Login ke halaman login.html
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            window.location.href = 'login.html';
        });
    }

});