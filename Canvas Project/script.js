let canvas = document.getElementById("menuCanvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "#FFD95A"; // Example background color
ctx.fillRect(50, 50, canvas.width, canvas.height);

// Set font style (optional)
ctx.font = "30px IMPACT"; // Example font and size

// Set text fill color (optional)
ctx.fillStyle = "#000"; // Black color

// Draw text "Hello World!" at (50, 100) with a maximum width of 150 pixels
ctx.fillText("Button Test", 100, 110, 150);