document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.querySelector('#no-button');
    const container = document.querySelector('.container');
    if (noButton && container) {

        noButton.addEventListener('mouseover', moveButton);

        noButton.addEventListener('touchstart', moveButton, { passive: true });
        function moveButton() {
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
        }
    }
});

document.getElementById("yes-button").addEventListener("click", () => {
    window.location.href = "HTML/iknewit.html";
});