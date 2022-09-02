import { Box } from "@mui/system";
import { useState } from "react";
import Canvas from "./components/Canvas";
import Settings from "./components/Settings";

// https://www.youtube.com/watch?v=C2vgICfQawE&t=65s
function App() {
  const [width, setWidth] = useState<number>(100);
  const [height, setHeight] = useState<number>(140);
  const [probability, setProba] = useState<number>(0.5);
  const [cellSize, setCellSize] = useState<number>(5);
  const [speed, setSpeed] = useState<number>(5);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          height: "100%",
        }}
      >
        <Canvas
          width={width}
          height={height}
          probability={probability}
          cellSize={cellSize}
          speed={speed}
        />
      </Box>
      <Settings
        width={width}
        height={height}
        probability={probability}
        cellSize={cellSize}
        speed={speed}
        setWidth={setWidth}
        setHeight={setHeight}
        setProba={setProba}
        setCellSize={setCellSize}
        setSpeed={setSpeed}
      />
    </Box>
  );
}

export default App;
