const canvas = document.querySelector('#draw'); // select class wit id=fraw
const ctx = canvas.getContext('2d'); // used 2D drawing context

canvas.width = window.innerWidth; // canvas width , where we can drawing
canvas.height = window.innerHeight; // canvas height , where we can drawing

ctx.strokeStyle = '#BADA555';
ctx.lineJoin = 'round'; // the type if line when we drawing
ctx.lineCap = 'round'; // the type if line when we drawing
ctx.lineWidth = 100; // the width of the line by default
let hue = 0;
let direction = true;
// ctx.globalCompositeOperation = 'multiply';
// ctx.globalCompositeOperation = 'lighter';
// for more operation visit https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation



// To check if the user is drawing or not
let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
    if (!isDrawing) return; // stop the function from running when they are not moused
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    ctx.beginPath();
    // start path at current point and move to new position with a lineTo() method, then
    ctx.moveTo(lastX, lastY); // start from 
    ctx.lineTo(e.offsetX, e.offsetY); // go to , Draws lines between points
    ctx.stroke(); // Actually painting on screen using stroke style
    [lastX, lastY] = [e.offsetX, e.offsetY];

    hue++;
    if (hue >= 360) {
        hue = 0;
    }

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }
    if (direction) { // if true increment
        ctx.lineWidth++;
    } else { // if false decrement
        ctx.lineWidth--;
    }
}
canvas.addEventListener('mousemove', draw);
canvas.addEventListener("mousedown", () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);