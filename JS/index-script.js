document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.querySelector('.resp-buttons-yes');  // Your "Yes" button class
    const roseContainer = document.getElementById('rose-container');
    
    if (yesButton) {
        yesButton.addEventListener('click', () => {
            // Trigger rose rain
            for (let i = 0; i < 50; i++) {  // Number of roses
                const rose = document.createElement('div');
                rose.classList.add('rose');
                rose.textContent = '🌹';  // Rose emoji (or use innerHTML with <img src="rose.png"> for image)
                
                // Random position, speed, and delay
                rose.style.left = `${Math.random() * 100}vw`;
                rose.style.animationDuration = `${Math.random() * 2 + 2}s`;  // 2-4s fall time
                rose.style.animationDelay = `${Math.random() * 1}s`;  // Stagger start
                
                roseContainer.appendChild(rose);
                
                // Remove after animation to clean up
                setTimeout(() => rose.remove(), 5000);
            }
            
            // Redirect to WhatsApp after 2 seconds (let animation play)
            setTimeout(() => {
                const yourPhone = '1234567890';  // REPLACE with your WhatsApp number (international format, no + or spaces)
                const message = "Yes, I'd love to!";
                window.location.href = `https://wa.me/${yourPhone}?text=${encodeURIComponent(message)}`;
            }, 2000);  // Delay in ms
        });
    }
    
    const noButton = document.querySelector('.resp-buttons-no');  // Your "No" button class
    const container = document.querySelector('.box-main');  // Your white container class
    
    if (noButton && container) {
        noButton.addEventListener('mouseover', () => {
            // Set button to absolute (relative to container)
            noButton.style.position = 'absolute';
            
            // Get container dimensions minus button size (with padding/buffer)
            const containerRect = container.getBoundingClientRect();
            const buttonWidth = noButton.offsetWidth;
            const buttonHeight = noButton.offsetHeight;
            const maxX = containerRect.width - buttonWidth - 20;  // Buffer to avoid edges
            const maxY = containerRect.height - buttonHeight - 20;
            
            // Random position inside container
            const randomX = Math.floor(Math.random() * maxX) + 10;
            const randomY = Math.floor(Math.random() * maxY) + 10;
            
            noButton.style.left = `${randomX}px`;
            noButton.style.top = `${randomY}px`;
            
            // Smooth transition
            noButton.style.transition = 'left 0.3s ease, top 0.3s ease';
        });
    }
});