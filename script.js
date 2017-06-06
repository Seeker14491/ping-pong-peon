"use strict"

const COLOR_1 = '#233237'; // gunmetal
const COLOR_2 = '#984b43'; // rusty red

const canvas = document.querySelector('canvas');
canvas.addEventListener('click', click);
window.addEventListener('resize', resize);

const ctx = canvas.getContext('2d');

const buttonIcon = document.getElementById('icon');

const serveIndicator = document.createElement('canvas');
const serveIndicatorCtx = serveIndicator.getContext('2d');

let score1 = 0;
let score2 = 0;
let serveTurn = true;
let resetButtonDiameter = 0;

function onload() {
    resize();
}

function draw() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // score1 and score2 backgrounds
    if (height > width) {
        ctx.fillStyle = COLOR_1;
        ctx.fillRect(0, 0, width, height / 2)
        ctx.fillStyle = COLOR_2;
        ctx.fillRect(0, height / 2, width, height / 2)
    } else {
        ctx.fillStyle = COLOR_1;
        ctx.fillRect(0, 0, width / 2, height);
        ctx.fillStyle = COLOR_2;
        ctx.fillRect(width / 2, 0, width / 2, height)
    }

    // serve indicator
    if (height > width) {
        serveIndicator.width = width;
        serveIndicator.height = height / 2;
    } else {
        serveIndicator.width = width / 2;
        serveIndicator.height = height;
    }

    serveIndicatorCtx.fillStyle = '#fff';
    serveIndicatorCtx.globalCompositeOperation = 'source-over';
    serveIndicatorCtx.fillRect(0, 0, serveIndicator.width, serveIndicator.height);

    serveIndicatorCtx.fillStyle = '#000';
    serveIndicatorCtx.globalCompositeOperation = 'destination-out';
    drawCenteredCircle(serveIndicatorCtx, serveIndicator.width / 2, serveIndicator.height / 2, Math.sqrt(width * height / 2) / 2);


    if (!isGameOver(score1, score2)) {
        let totalScore = score1 + score2;
        let serveIndicatorPos;
        if ((score1 + score2 <= 20)) {
            // switch every 2 serves
            serveIndicatorPos = (Math.floor(totalScore / 2) % 2) == serveTurn;
        } else {
            // switch every serve
            serveIndicatorPos = totalScore % 2 == serveTurn;
        }
        if (height > width) {
            if (serveIndicatorPos) {
                ctx.drawImage(serveIndicator, 0, 0, width, height / 2);
            } else {
                ctx.drawImage(serveIndicator, 0, height / 2);
            }
        } else {
            if (serveIndicatorPos) {
                ctx.drawImage(serveIndicator, 0, 0);
            } else {
                ctx.drawImage(serveIndicator, width / 2, 0);
            }
        }
    }

    // scores
    ctx.fillStyle = '#fff';
    ctx.font = 3/8 * Math.min(width, height) + 'px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    if (height > width) {
        ctx.fillText(score1.toString(), width / 2, height / 4);
        ctx.fillText(score2.toString(), width / 2, 3/4 * height);
    } else {
        ctx.fillText(score1.toString(), width / 4, height / 2);
        ctx.fillText(score2.toString(), 3/4 * width, height / 2);
    }

    // reset button
    resetButtonDiameter = Math.max(width, height) / 16;
    drawCenteredCircle(ctx, width / 2, height / 2, resetButtonDiameter / 2);
    ctx.drawImage(buttonIcon, (width - resetButtonDiameter) / 2, (height - resetButtonDiameter) / 2, resetButtonDiameter, resetButtonDiameter);
}

function click(event) {
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (Math.hypot(width / 2 - event.clientX, height / 2 - event.clientY) < resetButtonDiameter / 2) {
        // reset button clicked
        if (score1 + score2 === 0) {
            serveTurn = !serveTurn;
        } else {
            score1 = 0;
            score2 = 0;
        }
    } else if (!isGameOver(score1, score2)) {
        const score1Clicked = (height > width) ? (event.clientY < height / 2) : (event.clientX < width / 2);

        score1Clicked ? ++score1 : ++score2;
    }

    draw();
}

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    draw();
}

function isGameOver(score1, score2) {
    return (score1 > 10 || score2 > 10) && (Math.abs(score1 - score2) > 1);
}

function drawCenteredCircle(context, x, y, radius) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fill();
}
