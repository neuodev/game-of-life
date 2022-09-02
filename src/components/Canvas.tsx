import { Box } from "@mui/material";
import { invoke } from "@tauri-apps/api";
import React, { useEffect, useRef, useState } from "react";
import { CELL_SIZE, drawCells, drawGrid } from "../utils/canvas";
import { sleep } from "../utils/sleep";

type Universe = {
  width: number;
  height: number;
  cells: number[];
};

type Props = {
  width: number;
  probability: number;
  height: number;
  cellSize: number;
  speed: number;
};

const RENDER_ITERVAL = 10000; // in ms

const Canvas: React.FC<Props> = ({
  width,
  height,
  probability,
  cellSize,
  speed,
}) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    gameLoop();
    async function gameLoop() {
      if (!ref.current) return;
      try {
        let canvas = ref.current;
        let universe: Universe = await invoke("new_universe", {
          height,
          width,
          prop: probability,
        });
        renderUniverse();

        async function renderUniverse() {
          canvas.height = (cellSize + 1) * height + 1;
          canvas.width = (cellSize + 1) * width + 1;

          let ctx = canvas.getContext("2d");
          if (ctx === null) {
            alert("Unable to draw the universe!");
            return;
          }

          if (ctx === null) {
            alert("Unable to draw the universe!");
            return;
          }
          drawGrid({
            ctx,
            height,
            width,
            cellSize,
          });

          drawCells({
            ctx,
            width,
            height,
            cells: universe.cells,
            cellSize,
          });

          universe = await invoke("next_gen", { universe });

          requestAnimationFrame(renderUniverse);
        }
      } catch (error) {
        alert(error);
      }
    }
  }, [width, height, probability, cellSize]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <canvas ref={ref} />
    </Box>
  );
};

export default Canvas;
