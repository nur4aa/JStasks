let canvas = document.getElementById('myCanvas')
let ctx = canvas.getContext('2d')

ctx.moveTo(110,75);
ctx.arc(75,75,35,0,Math.PI,false);
ctx.stroke();