import { ctx, margin, canvas } from "./canvas.js";

export class Ball {
    constructor({ pos, color, vel }) {
        this.pos = pos;
        this.color = color;
        this.vel = vel ?? { x: 0, y: 0 };
        this.size = 18;
        this.friction = 0.99;
    }

    get idle() {
        return this.vel.x == 0 && this.vel.y == 0;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.pos.x, this.pos.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }

    update() {
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
        this.vel.x *= this.friction;
        this.vel.y *= this.friction;
        this.bounceOfWalls();
        this.handleTinyVelocities();
    }

    bounceOfWalls() {
        // horizontal
        if (this.pos.x + this.size >= canvas.width - margin) {
            this.pos.x = canvas.width - margin - this.size;
            this.vel.x *= -1;
        } else if (this.pos.x - this.size <= margin) {
            this.pos.x = this.size + margin;
            this.vel.x *= -1;
        }

        // vertical
        if (this.pos.y + this.size >= canvas.height - margin) {
            this.pos.y = canvas.height - margin - this.size;
            this.vel.y *= -1;
        } else if (this.pos.y - this.size <= margin) {
            this.pos.y = this.size + margin;
            this.vel.y *= -1;
        }
    }

    handleTinyVelocities() {
        const threshold = 0.04;
        if (Math.abs(this.vel.x) < threshold) {
            this.vel.x = 0;
        }
        if (Math.abs(this.vel.y) < threshold) {
            this.vel.y = 0;
        }
    }
}