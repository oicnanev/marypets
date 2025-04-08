// JavaScript to toggle mobile menu
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Adicione isso no seu marypets.js
document.getElementById('contactForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    const messageDiv = document.getElementById('formMessage');

    try {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Enviando...';

        const response = await fetch('/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message')
            })
        });

        const result = await response.text();
        
        messageDiv.textContent = response.ok ? 'Mensagem enviada com sucesso!' : 'Erro ao enviar mensagem';
        messageDiv.className = response.ok ? 'mt-4 text-center text-green-600' : 'mt-4 text-center text-red-600';
        messageDiv.classList.remove('hidden');
        
        if (response.ok) {
            form.reset();
        }
    } catch (error) {
        console.error('Error:', error);
        messageDiv.textContent = 'Erro ao enviar mensagem';
        messageDiv.className = 'mt-4 text-center text-red-600';
        messageDiv.classList.remove('hidden');
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Enviar Mensagem';
    }
});

// Configuração da Lightbox
function initLightbox() {
    const lightbox = GLightbox({
        selector: '.glightbox',
        touchNavigation: true,
        keyboardNavigation: true,
        closeButton: true,
        loop: true,
        zoomable: true,
        draggable: true,
        openEffect: 'fade',
        closeEffect: 'fade',
        slideEffect: 'slide',
        moreText: 'Ver mais',
        descPosition: 'bottom',
        onOpen: () => {
            document.body.style.overflow = 'hidden';
        },
        onClose: () => {
            document.body.style.overflow = 'auto';
        }
    });
}


// Inicializa quando o DOM estiver pronto
if (document.readyState === 'complete') {
    initLightbox();
} else {
    window.addEventListener('load', initLightbox);
}
