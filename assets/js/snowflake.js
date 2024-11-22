const canvas = document.getElementById('snow-canvas');
const ctx = canvas.getContext('2d');

// Set canvas size to match the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Snowflake properties
const numFlakes = 100;
const flakes = [];

// Create snowflakes with random properties
for (let i = 0; i < numFlakes; i++) {
  flakes.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 4 + 1, // radius
    d: Math.random() * numFlakes, // density
  });
}

// Draw snowflakes on the canvas
function drawSnowflakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'green';
  ctx.beginPath();

  flakes.forEach(flake => {
    ctx.moveTo(flake.x, flake.y);
    ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2, true);
  });

  ctx.fill();
  moveSnowflakes();
}

// Animate the movement of snowflakes
let angle = 0;
function moveSnowflakes() {
  angle += 0.01;
  flakes.forEach(flake => {
    flake.y += Math.cos(angle + flake.d) + 1 + flake.r / 2;
    flake.x += Math.sin(angle) * 2;

    // Reset position if snowflake exits the screen
    if (flake.x > canvas.width + 5 || flake.x < -5 || flake.y > canvas.height) {
      flake.x = Math.random() * canvas.width;
      flake.y = -10;
    }
  });
}

// Repeat drawing every 30 milliseconds
setInterval(drawSnowflakes, 30);

// Adjust canvas size if window is resized
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
