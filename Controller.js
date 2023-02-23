import { canvasNorm, ctx } from "./canvas.js";
import { mouse } from "./mouse.js";

export class Controller {
    constructor(ball) {
        this.ball = ball;
        this.vector = { x: 0, y: 0 };
        this.addControl();
        this.active = true;
    }

    addControl() {
        document.addEventListener("click", (e) => {
            if (!this.active) return;
            this.active = false;
            const factor = 0.15;
            this.ball.vel.x = factor * this.vector.x;
            this.ball.vel.y = factor * this.vector.y;
        });
    }

    update() {
        this.vector = {
            x: mouse.x - this.ball.pos.x,
            y: mouse.y - this.ball.pos.y,
        };
    }

    draw() {
        if (!this.active) return;
        ctx.save();
        // thick line
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.strokeStyle = "rgba(255,255,255,0.5)";
        ctx.beginPath();
        ctx.moveTo(this.ball.pos.x, this.ball.pos.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
        ctx.closePath();
        // thin line
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.ball.pos.x, this.ball.pos.y);
        const vectorLength = Math.sqrt(
            this.vector.x * this.vector.x +
                this.vector.y * this.vector.y
        );
        ctx.lineTo(
            this.ball.pos.x +
                (canvasNorm / vectorLength) * this.vector.x,
            this.ball.pos.y +
                (canvasNorm / vectorLength) * this.vector.y
        );
        ctx.stroke();
        ctx.restore();
    }
}