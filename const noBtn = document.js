const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

// Hayır butonunun üzerine gelince (veya mobilde dokununca) kaçmasını sağlar
noBtn.addEventListener('mouseover', () => {
    // Ekran boyutlarını al
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    // Butonu rastgele koordinatlara taşı
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Evet butonuna tıklandığında tatlı bir mesaj göster
yesBtn.addEventListener('click', () => {
    alert('Biliyordum! Seni çok seviyorum! ❤️');
    // İstersen buraya bir konfeti efekti ya da başka bir sayfaya yönlendirme ekleyebilirsin.
});
