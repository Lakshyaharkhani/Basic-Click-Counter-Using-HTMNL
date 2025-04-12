let count = 0;
const counterDisplay = document.getElementById('counter-display');
const incrementBtn = document.getElementById('increment-btn');

incrementBtn.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;
    
    
    counterDisplay.style.transform = 'scale(1.1)';
    setTimeout(() => {
        counterDisplay.style.transform = 'scale(1)';
    }, 100);
});
