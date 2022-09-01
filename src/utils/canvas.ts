export const CELL_SIZE = 2; // px
export const GRID_COLOR = "#CCCCCC";
export const DEAD_COLOR = "#FFFFFF";
export const ALIVE_COLOR = "#000000";

export const drawGrid = ({
  ctx,
  width,
  height,
  cellSize,
}: {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  cellSize: number;
}) => {
  ctx.beginPath();
  ctx.strokeStyle = GRID_COLOR;

  for (let i = 0; i <= width; i++) {
    ctx.moveTo(i * (cellSize + 1) + 1, 0);
    ctx.lineTo(i * (cellSize + 1) + 1, (cellSize + 1) * height + 1);
  }

  // Horizontal lines.
  for (let j = 0; j <= height; j++) {
    ctx.moveTo(0, j * (cellSize + 1) + 1);
    ctx.lineTo((cellSize + 1) * width + 1, j * (cellSize + 1) + 1);
  }

  ctx.stroke();
};

export const drawCells = ({
  ctx,
  width,
  height,
  cells,
  cellSize,
}: {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  cellSize: number;
  cells: number[];
}) => {
  ctx.beginPath();

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      const idx = row * width + col;

      // This is updated!
      ctx.fillStyle = cells[idx] ? ALIVE_COLOR : DEAD_COLOR;

      ctx.fillRect(
        col * (cellSize + 1) + 1,
        row * (cellSize + 1) + 1,
        cellSize,
        cellSize
      );
    }
  }

  ctx.stroke();
};
