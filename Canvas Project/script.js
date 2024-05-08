const canvas = document.getElementById('ctx');
const ctx = canvas.getContent('2d');

const menuOptions = ['Page 1', 'Page 2'];
let selectedIndex = 0;

ctx.font = `20px Impact`;
ctx.fillStyle = '#F5EDED';


function drawMenu() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < menuOptions.length; i++) {
        const text = menuOptions[i];
        const textWidth = ctx.measureText(text).width;
        const x = (canvas.width - textWidth) / 2;

        if (i === selectedIndex) {
            ctx.fillStyle = `yellow`;
        } else {
            ctx.fillStyle = `white`;
        }

        ctx.fillText(text, x, 30 + (i * 30));
    }
}

document.addEventListener(`keydown`, (event) => {
    if (event.key === 'ArrowDown') {
        selectedIndex = Math.min(selectedIndex + 1, menuOptions.length - 1);
    } else if (event.key == `ArrowUp`) {
        selectedIndex = Math.max(selectedIndex - 1, 0);
    }
    drawMenu();
})

drawMenu();


