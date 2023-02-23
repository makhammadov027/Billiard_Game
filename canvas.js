export const canvas = document.querySelector("canvas");
export const ctx = canvas.getContext("2d");

export const margin = 60;

canvas.width = 1200 + 2 * margin;
canvas.height = 600 + 2 * margin;

export function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export const canvasNorm = Math.sqrt(
    canvas.width * canvas.width + canvas.height * canvas.height
);