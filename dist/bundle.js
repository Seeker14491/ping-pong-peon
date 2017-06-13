/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,77u/PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGJhc2VQcm9maWxlPSJmdWxsIiB3aWR0aD0iNzYiIGhlaWdodD0iNzYiIHZpZXdCb3g9IjAgMCA3Ni4wMCA3Ni4wMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNzYuMDAgNzYuMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgoJPHBhdGggZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTSAzOCwyMC41ODMzQyA0Mi45OTA4LDIwLjU4MzMgNDcuNDkxMiwyMi42ODI1IDUwLjY2NjcsMjYuMDQ2TCA1MC42NjY3LDE3LjQxNjdMIDU1LjQxNjYsMjIuMTY2N0wgNTUuNDE2NywzNC44MzMzTCA0Mi43NSwzNC44MzMzTCAzOCwzMC4wODMzTCA0Ni44NTEyLDMwLjA4MzNDIDQ0LjY3NjgsMjcuNjUzOSA0MS41MTcsMjYuMTI1IDM4LDI2LjEyNUMgMzEuOTc4NSwyNi4xMjUgMjcuMDAzNywzMC42MDY4IDI2LjIyOTYsMzYuNDE2N0wgMjAuNjU0MywzNi40MTY3QyAyMS40NTQzLDI3LjUzOTcgMjguOTE0OCwyMC41ODMzIDM4LDIwLjU4MzMgWiBNIDM4LDQ5Ljg3NUMgNDQuMDIxNSw0OS44NzUgNDguOTk2Myw0NS4zOTMyIDQ5Ljc3MDMsMzkuNTgzM0wgNTUuMzQ1NywzOS41ODMzQyA1NC41NDU3LDQ4LjQ2MDMgNDcuMDg1Miw1NS40MTY3IDM4LDU1LjQxNjdDIDMzLjAwOTIsNTUuNDE2NyAyOC41MDg4LDUzLjMxNzUgMjUuMzMzMyw0OS45NTRMIDI1LjMzMzMsNTguNTgzM0wgMjAuNTgzMyw1My44MzMzTCAyMC41ODMzLDQxLjE2NjdMIDMzLjI1LDQxLjE2NjdMIDM4LDQ1LjkxNjdMIDI5LjE0ODcsNDUuOTE2N0MgMzEuMzIzMSw0OC4zNDYxIDM0LjQ4Myw0OS44NzUgMzgsNDkuODc1IFogIi8+Cjwvc3ZnPgo="

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var buttonIcon = new Image();
buttonIcon.onload = onload;
buttonIcon.src = __webpack_require__(0);

var COLOR_1 = '#233237'; // gunmetal
var COLOR_2 = '#984b43'; // rusty red

var canvas = document.querySelector('canvas');
canvas.addEventListener('click', click);
window.addEventListener('resize', resize);

var ctx = canvas.getContext('2d');

var serveIndicator = document.createElement('canvas');
var serveIndicatorCtx = serveIndicator.getContext('2d');

var score1 = 0;
var score2 = 0;
var serveTurn = true;
var resetButtonDiameter = 0;

function onload() {
    resize();
}

function draw() {
    var width = window.innerWidth;
    var height = window.innerHeight;

    // score1 and score2 backgrounds
    if (height > width) {
        ctx.fillStyle = COLOR_1;
        ctx.fillRect(0, 0, width, height / 2);
        ctx.fillStyle = COLOR_2;
        ctx.fillRect(0, height / 2, width, height / 2);
    } else {
        ctx.fillStyle = COLOR_1;
        ctx.fillRect(0, 0, width / 2, height);
        ctx.fillStyle = COLOR_2;
        ctx.fillRect(width / 2, 0, width / 2, height);
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
        var totalScore = score1 + score2;
        var serveIndicatorPos = void 0;
        if (score1 + score2 <= 20) {
            // switch every 2 serves
            serveIndicatorPos = Math.floor(totalScore / 2) % 2 == serveTurn;
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
    ctx.font = 3 / 8 * Math.min(width, height) + 'px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    if (height > width) {
        ctx.fillText(score1.toString(), width / 2, height / 4);
        ctx.fillText(score2.toString(), width / 2, 3 / 4 * height);
    } else {
        ctx.fillText(score1.toString(), width / 4, height / 2);
        ctx.fillText(score2.toString(), 3 / 4 * width, height / 2);
    }

    // reset button
    resetButtonDiameter = Math.max(width, height) / 16;
    drawCenteredCircle(ctx, width / 2, height / 2, resetButtonDiameter / 2);
    ctx.drawImage(buttonIcon, (width - resetButtonDiameter) / 2, (height - resetButtonDiameter) / 2, resetButtonDiameter, resetButtonDiameter);
}

function click(event) {
    var width = window.innerWidth;
    var height = window.innerHeight;

    if (Math.hypot(width / 2 - event.clientX, height / 2 - event.clientY) < resetButtonDiameter / 2) {
        // reset button clicked
        if (score1 + score2 === 0) {
            serveTurn = !serveTurn;
        } else {
            score1 = 0;
            score2 = 0;
        }
    } else if (!isGameOver(score1, score2)) {
        var score1Clicked = height > width ? event.clientY < height / 2 : event.clientX < width / 2;

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
    return (score1 > 10 || score2 > 10) && Math.abs(score1 - score2) > 1;
}

function drawCenteredCircle(context, x, y, radius) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fill();
}

/***/ })
/******/ ]);