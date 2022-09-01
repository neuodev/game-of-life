import React, { useEffect, useRef } from "react";
import { CELL_SIZE, drawGrid } from "../utils/canvas";

const Canvas = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (ref.current) {
      let height = 40;
      let width = 40;
      let canvas = ref.current;
      canvas.height = (CELL_SIZE + 1) * height + 1;
      canvas.width = (CELL_SIZE + 1) * width + 1;

      let ctx = ref.current.getContext("2d");

      if (ctx === null) {
        alert("Unable to draw the universe!");
        return;
      }

      drawGrid(ctx, height, width);
    }
  }, [ref]);
  return (
    <div>
      <canvas ref={ref} />
    </div>
  );
};

export default Canvas;
