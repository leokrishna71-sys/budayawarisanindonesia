document.addEventListener('DOMContentLoaded', function() {
    const showMoreButton = document.getElementById('show-more-food');
    const kulinerGrid = document.querySelector('.kuliner-grid');
    const navbar = document.querySelector('.navbar');

    // 1. Tambahkan konten kuliner lebih banyak (Contoh sederhana)
    showMoreButton.addEventListener('click', function() {
        const newFoodItems = [
            { name: 'Nasi Goreng', desc: 'Nasi yang digoreng dengan bumbu khas, makanan populer di seluruh Indonesia.', img: 'nasgor.jpg' },
            { name: 'Gado-Gado', desc: 'Salad sayuran rebus dengan saus kacang yang kaya rasa.', img: 'gadogado.jpg' }
        ];

        newFoodItems.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('kuliner-item');
            div.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <h4>${item.name}</h4>
                <p>${item.desc}</p>
            `;
            kulinerGrid.appendChild(div);
        });
        
        // Sembunyikan tombol setelah diklik (agar tidak spam)
        showMoreButton.style.display = 'none'; 
        alert('Anda telah melihat lebih banyak kuliner! Jelajahi keragaman rasa lainnya!');
    });


    // 2. Efek Navbar Berubah Saat Scrolling
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)'; // Lebih gelap saat scroll
            navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.5)';
        } else {
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.8)'; // Kembali ke semi-transparan
            navbar.style.boxShadow = 'none';
        }
    });

    // 3. Smooth Scrolling (Opsional, tapi meningkatkan UX)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.feedback-form form');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            // Mengambil semua grup rating yang harus diisi
            const ratingGroups = [
                'estetika', 
                'navigasi', 
                'konten'
            ];
            
            let allRatingsSelected = true;
            
            ratingGroups.forEach(groupName => {
                const radios = form.querySelectorAll(`input[name="${groupName}"]`);
                let isSelected = false;
                
                // Cek apakah ada radio button yang dipilih di grup ini
                radios.forEach(radio => {
                    if (radio.checked) {
                        isSelected = true;
                    }
                });
                
                if (!isSelected) {
                    allRatingsSelected = false;
                    // Secara visual menandai grup yang belum diisi (opsional, perlu CSS tambahan)
                    const label = document.querySelector(`label[for="${groupName}1"]`).closest('.form-group');
                    label.style.border = '2px solid red';
                    label.style.padding = '5px';
                } else {
                     // Hapus penanda merah jika sudah diisi (jika sebelumnya ada)
                    const label = document.querySelector(`label[for="${groupName}1"]`).closest('.form-group');
                    label.style.border = 'none';
                    label.style.padding = '0';
                }
            });

            if (!allRatingsSelected) {
                event.preventDefault(); // Mencegah formulir terkirim
                alert('Mohon lengkapi semua penilaian (1-5) sebelum mengirim formulir!');
            } else {
                // Jika semua validasi sukses, Anda bisa menambahkan aksi sukses lainnya di sini
                // Untuk contoh, kita tampilkan alert sederhana dan tetap mencegah pengiriman karena tidak ada backend
                event.preventDefault();
                alert('Terima kasih! Penilaian Anda telah kami terima. (Simulasi Pengiriman Berhasil)');
                
                // Jika Anda memiliki backend, Anda akan menghapus event.preventDefault() di atas
                // dan membiarkan form mengirim data ke /submit-feedback.
            }
        });
    }
});