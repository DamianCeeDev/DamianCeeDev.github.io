const canvas = document.getElementById('ctx');
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

canvas.width = windowWidth;
canvas.height = windowHeight;

window.addEventListener('resize', () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    canvas.width = windowWidth;
    canvas.height = windowHeight;
});

const ctx = canvas.getContext('2d');

ctx.fillStyle = '#000000';
ctx.fillRect(2, 2, windowWidth, windowHeight);

for (i = 0; i <= 5; i++) {
    console.log(`We are on ${i}`);
}