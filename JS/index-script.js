document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.querySelector('.resp-buttons-yes');
    const roseContainer = document.getElementById('rose-container');

    if (yesButton) {
        yesButton.addEventListener('click', () => {

            for (let i = 0; i < 50; i++) {
                const rose = document.createElement('div');
                rose.classList.add('rose');
                rose.textContent = '❀';

                rose.style.left = `${Math.random() * 100}vw`;
                rose.style.animationDuration = `${Math.random() * 2 + 2}s`;
                rose.style.animationDelay = `${Math.random() * 1}s`;

                roseContainer.appendChild(rose);

                setTimeout(() => rose.remove(), 5000);
            }

            setTimeout(() => {
                const yourPhone = '447418315820'; // no fkn + or spaces here ashen !!
                const message = "Yes, I'd love to!";
                window.location.href = `https://wa.me/${yourPhone}?text=${encodeURIComponent(message)}`;
            }, 2000);
        });
    }

    const noButton = document.querySelector('.resp-buttons-no');
    const container = document.querySelector('.box-main');

    if (noButton && container) {
        noButton.addEventListener('mouseover', () => {
            noButton.style.position = 'absolute';

            const containerRect = container.getBoundingClientRect();
            const buttonWidth = noButton.offsetWidth;
            const buttonHeight = noButton.offsetHeight;
            const maxX = containerRect.width - buttonWidth - 20;
            const maxY = containerRect.height - buttonHeight - 20;

            const randomX = Math.floor(Math.random() * maxX) + 10;
            const randomY = Math.floor(Math.random() * maxY) + 10;

            noButton.style.left = `${randomX}px`;
            noButton.style.top = `${randomY}px`;

            noButton.style.transition = 'left 0.3s ease, top 0.3s ease';
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('bg-music');

    // Try to play on load
    audio.play().catch(error => {
        console.log('Autoplay blocked—will play on interaction:', error);
    });

    // Play on first click/touch (fallback for mobile)
    document.body.addEventListener('click', () => {
        if (audio.paused) audio.play();
    }, { once: true });  // Runs only once
});