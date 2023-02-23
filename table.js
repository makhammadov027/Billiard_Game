import { ctx, canvas, margin } from "./canvas.js";

export function drawCloth() {
    ctx.fillStyle = "rgb(26,130,30)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

export function drawWood() {
    ctx.fillStyle = "hsl(16, 76%, 30%)";
    ctx.fillRect(0, 0, canvas.width, margin);
    ctx.fillRect(0, canvas.height - margin, canvas.width, margin);
    ctx.fillRect(0, 0, margin, canvas.height);
    ctx.fillRect(canvas.width - margin, 0, margin, canvas.height);
}