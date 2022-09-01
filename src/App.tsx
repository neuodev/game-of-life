import { Box } from "@mui/system";
import { invoke } from "@tauri-apps/api";
import Canvas from "./components/Canvas";
import Settings from "./components/Settings";

function App() {
  return (
    <Box
      sx={{
        width: "100vh",
        bgcolor: "green",
        height: "100wh",
      }}
    >
      <Canvas />
      <Settings />
    </Box>
  );
}

export default App;
