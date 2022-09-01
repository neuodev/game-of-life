import { Box } from "@mui/system";
import { useState } from "react";
import Canvas from "./components/Canvas";
import Settings from "./components/Settings";

type State = {
  width: number;
  height: number;
};

function App() {
  const [state, setState] = useState<State>({
    width: 40,
    height: 40,
  });

  function setWidth(width: number) {
    setState({ ...state, width });
  }

  function setHeight(height: number) {
    setState({ ...state, height });
  }
  const { width, height } = state;
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
        <Canvas width={width} height={height} />
      </Box>
      <Settings
        width={state.width}
        height={state.height}
        setWidth={setWidth}
        setHeight={setHeight}
      />
    </Box>
  );
}

export default App;
