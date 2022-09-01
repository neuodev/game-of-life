import { Box } from "@mui/system";
import { useState } from "react";
import Canvas from "./components/Canvas";
import Settings from "./components/Settings";

type State = {
  width: number;
  height: number;
  probability: number;
  cellSize: number;
};

function App() {
  const [state, setState] = useState<State>({
    width: 40,
    height: 40,
    probability: 0.5, // when equal 0.5 every person has equal opportunity to be live or dead
    cellSize: 5,
  });

  function setWidth(width: number) {
    setState({ ...state, width });
  }

  function setHeight(height: number) {
    setState({ ...state, height });
  }

  function setProba(probability: number) {
    setState({ ...state, probability });
  }

  function setCellSize(size: number) {
    setState({ ...state, cellSize: size });
  }

  const { width, height, probability, cellSize } = state;
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
        />
      </Box>
      <Settings
        width={width}
        height={height}
        probability={probability}
        cellSize={cellSize}
        setWidth={setWidth}
        setHeight={setHeight}
        setProba={setProba}
        setCellSize={setCellSize}
      />
    </Box>
  );
}

export default App;
