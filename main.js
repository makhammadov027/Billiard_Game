import { Ball } from "./Ball.js";
import { clearCanvas } from "./canvas.js";
import { Controller } from "./Controller.js";
import { mouse } from "./mouse.js";
import { balls, whiteBall } from "./setupBalls.js";
import { drawCloth, drawWood } from "./table.js";

const controller = new Controller(whiteBall);

drawCloth();
drawWood();

balls.forEach((ball) => ball.draw());

function loop() {
    clearCanvas();
    drawCloth();
    drawWood();
    balls.forEach((b) => b.update());
    balls.forEach((b) => b.draw());
    controller.update();
    controller.draw();
    controller.active = balls.every((b) => b.idle);
    requestAnimationFrame(loop);
}

loop();