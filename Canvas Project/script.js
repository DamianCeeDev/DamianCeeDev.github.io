const canvas = document.getElementById('ctx');
const ctx = canvas.getContent('2d');

const menuOptions = ['Page 1', 'Page 2'];
let selectedIndex = 0;

ctx.font = `20px Impact`;
ctx.fillStyle = '#F5EDED';


function drawMenu() {
    ctx.clearRect(0, 0, canvas, width, canvas.height);


}