export const CELL_SIZE = 15; // px
export const GRID_COLOR = "#CCCCCC";
export const DEAD_COLOR = "#FFFFFF";
export const ALIVE_COLOR = "#000000";

export const drawGrid = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number
) => {
  ctx.beginPath();
  ctx.strokeStyle = GRID_COLOR;

  for (let i = 0; i <= width; i++) {
    ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);
    ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height + 1);
  }

  // Horizontal lines.
  for (let j = 0; j <= height; j++) {
    ctx.moveTo(0, j * (CELL_SIZE + 1) + 1);
    ctx.lineTo((CELL_SIZE + 1) * width + 1, j * (CELL_SIZE + 1) + 1);
  }

  ctx.stroke();
};
