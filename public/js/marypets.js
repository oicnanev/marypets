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

// Story overlay functionality
document.addEventListener('DOMContentLoaded', function() {
    const storyTrigger = document.getElementById('story-trigger');
    const storyOverlay = document.getElementById('story-overlay');
    const closeButton = document.getElementById('close-story');

    if (storyTrigger && storyOverlay) {
        storyTrigger.addEventListener('click', function() {
            storyOverlay.classList.remove('invisible', 'opacity-0');
            storyOverlay.classList.add('opacity-100');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when overlay is open
        });

        closeButton.addEventListener('click', function(e) {
            e.stopPropagation();
            storyOverlay.classList.add('opacity-0');
            setTimeout(() => {
                storyOverlay.classList.add('invisible');
                document.body.style.overflow = ''; // Restore scrolling
            }, 300);
        });

        // Close when clicking outside the text
        storyOverlay.addEventListener('click', function(e) {
            if (e.target === storyOverlay) {
                closeButton.click();
            }
        });
    }
});

// Inicializa quando o DOM estiver pronto
if (document.readyState === 'complete') {
    initLightbox();
} else {
    window.addEventListener('load', initLightbox);
}
