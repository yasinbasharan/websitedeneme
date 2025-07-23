document.addEventListener('DOMContentLoaded', () => {
    // "Daha Fazla Bilgi" butonuna tıklama olayı
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', () => {
            alert('Başaran Askeri Ürünleri hakkında daha detaylı bilgi yakında sizlerle!');
            // Gerçek bir senaryoda buraya farklı bir sayfaya yönlendirme veya bir modal açma kodu gelebilirdi.
        });
    }

    // İletişim Formu Gönderimi
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Formun varsayılan gönderimini engelle

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Basit bir doğrulama
            if (name === "" || email === "" || message === "") {
                formMessage.textContent = 'Lütfen tüm alanları doldurunuz.';
                formMessage.style.color = 'red';
                formMessage.classList.remove('hidden');
                return;
            }

            // E-posta formatı kontrolü (basit)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formMessage.textContent = 'Lütfen geçerli bir e-posta adresi giriniz.';
                formMessage.style.color = 'red';
                formMessage.classList.remove('hidden');
                return;
            }

            // Burada formu gerçek bir sunucuya gönderme işlemi yapılabilirdi.
            // Şimdilik sadece başarılı mesajı gösterelim.
            formMessage.textContent = `Mesajınız başarıyla gönderildi, ${name}! Teşekkür ederiz.`;
            formMessage.style.color = 'green';
            formMessage.classList.remove('hidden');

            // Formu temizle
            contactForm.reset();

            // Mesajı birkaç saniye sonra gizle
            setTimeout(() => {
                formMessage.classList.add('hidden');
            }, 5000);
        });
    }

    // Sayfa içi bağlantılar için yumuşak kaydırma
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});