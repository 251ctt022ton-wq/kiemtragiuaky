
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if(body.classList.contains('dark-mode')) {
        themeBtn.textContent = ' Chế độ sáng';
    } else {
        themeBtn.textContent = ' Chế độ tối';
    }
});

const infoButtons = document.querySelectorAll('.info-btn');

infoButtons.forEach(button => {
    button.addEventListener('click', function() {
        const placeName = this.getAttribute('data-place');
        alert(`Bạn đang quan tâm đến "${placeName}".
    });
});

document.getElementById('explore-btn').addEventListener('click', () => {
    document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
});
