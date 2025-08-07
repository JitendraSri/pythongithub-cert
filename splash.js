// Enhanced shake effect for splash content (without text glitch)
function applyTextShake() {
    const text = document.querySelector('.splash-content');
    if (!text) return;

    // Store original text to prevent changes
    const originalText = text.innerHTML;

    // Random shake values with more intensity
    const shakeX = Math.random() * 10 - 5;  // -5 to 5
    const shakeY = Math.random() * 10 - 5;  // -5 to 5
    const rotate = Math.random() * 5 - 2.5;  // -2.5 to 2.5 degrees

    // Apply multiple effects
    text.style.transform = `translate(${shakeX}px, ${shakeY}px) rotate(${rotate}deg) skew(${Math.random() * 10 - 5}deg)`;
    text.style.opacity = Math.random() * 0.3 + 0.7;  // 70-100% opacity
    text.style.filter = `hue-rotate(${Math.random() * 360}deg) brightness(${Math.random() * 0.2 + 0.8})`;

    // Reset after a short delay
    setTimeout(() => {
        text.style.transform = 'none';
        text.style.opacity = '1';
        text.style.filter = 'none';
        // Restore original text
        text.innerHTML = originalText;
    }, 100);
}

// Start shaking the text immediately with more frequent updates
setInterval(applyTextShake, 50);

// Matrix effect
function createMatrixEffect() {
    const matrixContainer = document.querySelector('.matrix-effect');
    const characters = '010111001111010101010101101101101100010011000101010001101100010111100011110011000100011100101101';
    
    for (let i = 0; i < 15; i++) {
        const column = document.createElement('div');
        column.style.position = 'absolute';
        column.style.left = `${Math.random() * 100}%`;
        column.style.color = '#00ff00';
        column.style.fontSize = '12px';
        
        const charCount = Math.floor(Math.random() * 20) + 10;
        let text = '';
        for (let j = 0; j < charCount; j++) {
            text += characters.charAt(Math.floor(Math.random() * characters.length)) + '<br>';
        }
        column.innerHTML = text;
        
        const duration = Math.random() * 2 + 2 + 's';
        column.style.animation = `matrix-fall ${duration} linear infinite ${Math.random() * 2}s`;
        
        matrixContainer.appendChild(column);
    }
}

// Terminal effects
function createTerminalEffects() {
    // Create terminal scan effect
    const terminalScan = document.createElement('div');
    terminalScan.className = 'terminal-effect';
    document.body.appendChild(terminalScan);
    
    // Create warning text overlay
    const warningText = document.createElement('div');
    warningText.className = 'warning-text';
    warningText.innerHTML = `
        WARNING: SYSTEM COMPROMISED<br>
        SECURITY BREACH DETECTED<br>
        ACCESS GRANTED<br>
        INITIATING PROTOCOL 42
    `;
    document.body.appendChild(warningText);
}

// Update time display
function updateTime() {
    const timeElement = document.getElementById('current-time');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update time every second
setInterval(updateTime, 1000);
updateTime();

// Initialize effects
document.addEventListener('DOMContentLoaded', () => {
    createMatrixEffect();
    createTerminalEffects();
    
    // Intense transition effect
    setTimeout(() => {
        // Add glitch effect to text
        const text = document.querySelector('.splash-content');
        const warning = document.querySelector('.warning-text');
        
        function applyGlitch() {
            const text = document.querySelector('.splash-content');
            const warning = document.querySelector('.warning-text');
            
            // Apply glitch effects to both elements
            [text, warning].forEach(element => {
                if (!element) return;
                
                // Store original text to prevent changes
                const originalText = element.innerHTML;
                
                // Random shake values with more intensity
                const shakeX = Math.random() * 15 - 7.5;  // -7.5 to 7.5
                const shakeY = Math.random() * 15 - 7.5;  // -7.5 to 7.5
                const rotate = Math.random() * 10 - 5;    // -5 to 5 degrees
                
                // Apply multiple effects
                element.style.transform = `translate(${shakeX}px, ${shakeY}px) rotate(${rotate}deg) skew(${Math.random() * 20 - 10}deg)`;
                element.style.opacity = Math.random() * 0.3 + 0.7;  // 70-100% opacity
                element.style.filter = `hue-rotate(${Math.random() * 360}deg) brightness(${Math.random() * 0.2 + 0.8})`;
                
                // Reset after a short delay
                setTimeout(() => {
                    element.style.transform = 'none';
                    element.style.opacity = '1';
                    element.style.filter = 'none';
                    // Restore original text
                    element.innerHTML = originalText;
                }, 100);
            });
        }
        
        // Start glitch effect
        setInterval(applyGlitch, 100);
        
        // Create transition overlay
        const transition = document.createElement('div');
        transition.className = 'transition-effect';
        document.body.appendChild(transition);
        
        // Start transition after 2 seconds
        setTimeout(() => {
            transition.style.opacity = '1';
            // Wait for transition to complete
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        }, 2000);
    }, 1000);
});
