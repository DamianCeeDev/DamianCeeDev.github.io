const canvas = document.getElementById('ctx');
const ctx = canvas.getContext('2d');
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

canvas.width = windowWidth;
canvas.height = windowHeight;

window.addEventListener('resize', () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    canvas.width = windowWidth;
    canvas.height = windowHeight;
});

const menuOptions = ['Page 1', 'Page 2'];
let selectedIndex = 0;

ctx.font = `40px Impact`;

function calculateTotalWidth() {
    const optionWidths = menuOptions.map(text => ctx.measureText(text).width);
    const totalOptionWidth = optionWidths.reduce((sum, width) => sum + width, 0);
    const spacing = 50;
    return totalOptionWidth + spacing * (menuOptions.length - 1);
}

const spacing = 50;

function drawMenu() {
    const spacing = 50;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = `#000000`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const totalWidth = calculateTotalWidth();
    const xOffset = (canvas.width - totalWidth) / 2;

    for (let i = 0; i < menuOptions.length; i++) {
        const text = menuOptions[i];
        const textWidth = ctx.measureText(text).width;

        if (i === selectedIndex) {
            ctx.fillStyle = `yellow`;
        } else {
            ctx.fillStyle = `white`;
        }

        const xPosition = xOffset + (textWidth * i) + (spacing * i); // Calculate x-position with spacing
        ctx.fillText(text, xPosition, 30 + (i * 30)); // Adjust y-position as needed
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
        selectedIndex = Math.min(selectedIndex + 1, menuOptions.length - 1);
    } else if (event.key === 'ArrowUp') {
        selectedIndex = Math.max(selectedIndex - 1, 0);
    }
    drawMenu();
});

drawMenu();
