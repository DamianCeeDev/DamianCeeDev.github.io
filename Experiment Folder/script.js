// Comment everything out to do your own stuff

// Get references to our buttons
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

// Add click event listeners
button1.addEventListener('click', () => {
    alert('Button 1 Clicked!');
});

button2.addEventListener('click', () => {
    console.log('Button 2 Clicked!'); // Log to console for now
});

button3.addEventListener('click', () => {
    // Change button color on click (example functionality)
    button3.style.backgroundColor = "yellow";
});