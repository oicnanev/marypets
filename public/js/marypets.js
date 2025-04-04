// JavaScript to toggle mobile menu
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Evita o recarregamento da página

    // Captura os dados do formulário
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Envia os dados via fetch
    try {
        const response = await fetch('/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            // Exibe mensagem de sucesso
            document.getElementById('formMessage').textContent = 'Mensagem enviada com sucesso!';
            document.getElementById('formMessage').classList.remove('hidden');
            document.getElementById('formMessage').classList.add('text-green-600');
            e.target.reset(); // Limpa o formulário
        } else {
            // Exibe mensagem de erro
            document.getElementById('formMessage').textContent = 'Erro ao enviar a mensagem. Tente novamente.';
            document.getElementById('formMessage').classList.remove('hidden');
            document.getElementById('formMessage').classList.add('text-red-600');
        }
    } catch (error) {
        console.error('Erro:', error);
        document.getElementById('formMessage').textContent = 'Erro ao enviar a mensagem. Tente novamente.';
        document.getElementById('formMessage').classList.remove('hidden');
        document.getElementById('formMessage').classList.add('text-red-600');
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
