document.addEventListener("DOMContentLoaded", () => {
    // State Penyimpanan Keranjang Belanja
    let cart = {};

    // Helper: Format Rupiah
    const formatRupiah = (angka) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0
        }).format(angka);
    };

    // --- 1. LOGIKA TOMBOL PLUS MINUS ---
    const menuItems = document.querySelectorAll('.menu-item');
    const floatingCart = document.getElementById('floatingCart');
    const totalItemsEl = document.getElementById('totalItems');
    const totalPriceFloatEl = document.getElementById('totalPriceFloat');

    menuItems.forEach(item => {
        const id = item.dataset.id;
        const name = item.dataset.name;
        const price = parseInt(item.dataset.price);
        
        const btnMinus = item.querySelector('.btn-minus');
        const btnPlus = item.querySelector('.btn-plus');
        const qtyDisplay = item.querySelector('.qty-display');

        // Tombol Tambah (+)
        btnPlus.addEventListener('click', () => {
            if (!cart[id]) {
                cart[id] = { name: name, price: price, qty: 0 };
            }
            cart[id].qty++;
            updateUI(item, cart[id].qty);
        });

        // Tombol Kurang (-)
        btnMinus.addEventListener('click', () => {
            if (cart[id] && cart[id].qty > 0) {
                cart[id].qty--;
                if (cart[id].qty === 0) {
                    delete cart[id]; // Hapus dari keranjang jika 0
                }
                updateUI(item, cart[id] ? cart[id].qty : 0);
            }
        });
    });

    // Fungsi Update Tampilan Angka & Keranjang Bawah
    function updateUI(itemEl, qty) {
        // Update angka di antara + dan -
        itemEl.querySelector('.qty-display').innerText = qty;

        // Hitung Total Item dan Total Harga di keranjang
        let totalQty = 0;
        let totalPrice = 0;

        for (let key in cart) {
            totalQty += cart[key].qty;
            totalPrice += (cart[key].price * cart[key].qty);
        }

        totalItemsEl.innerText = `${totalQty} Item`;
        totalPriceFloatEl.innerText = formatRupiah(totalPrice);

        // Tampilkan floating bar jika ada pesanan, sembunyikan jika kosong
        if (totalQty > 0) {
            floatingCart.classList.add('show');
        } else {
            floatingCart.classList.remove('show');
        }
    }


    // --- 2. LOGIKA MODAL POP-UP (RINGKASAN PESANAN) ---
    const btnCheckout = document.getElementById('btnCheckout');
    const summaryModal = document.getElementById('summaryModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const btnPesanKembali = document.getElementById('btnPesanKembali');
    const btnKonfirmasi = document.getElementById('btnKonfirmasi');
    const orderListEl = document.getElementById('orderList');
    const finalPriceEl = document.getElementById('finalPrice');

    // Buka Modal
    btnCheckout.addEventListener('click', () => {
        // Bersihkan daftar lama
        orderListEl.innerHTML = '';
        let grandTotal = 0;

        // Bikin daftar struk tagihan baru
        for (let key in cart) {
            const item = cart[key];
            const subtotal = item.price * item.qty;
            grandTotal += subtotal;

            const row = document.createElement('div');
            row.className = 'order-item-row';
            row.innerHTML = `
                <div class="item-qty-name">
                    <span class="item-qty">${item.qty}x</span>
                    <span class="item-name">${item.name}</span>
                </div>
                <div class="item-subtotal">${formatRupiah(subtotal)}</div>
            `;
            orderListEl.appendChild(row);
        }

        finalPriceEl.innerText = formatRupiah(grandTotal);
        summaryModal.classList.add('show');
    });

    // Tutup Modal (Pesan Kembali / Silang)
    const closeAndHideModal = () => summaryModal.classList.remove('show');
    closeModalBtn.addEventListener('click', closeAndHideModal);
    btnPesanKembali.addEventListener('click', closeAndHideModal);

    // Proses Pesanan (Tombol Buat Pesanan Final)
    btnKonfirmasi.addEventListener('click', () => {
        btnKonfirmasi.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Memproses...';
        
        // Simulasi Loading Kirim ke Dapur
        setTimeout(() => {
            alert('Pesanan berhasil dibuat dan diteruskan ke Dapur! Silakan tunggu pesanan Anda datang.');
            // Jika mau, halaman bisa di-refresh untuk reset keranjang
            window.location.reload(); 
        }, 1500);
    });
});