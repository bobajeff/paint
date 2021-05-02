
import './index.css';
import './tool-box.js';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'green';
ctx.fillRect(0, 0, canvas.width, canvas.height);