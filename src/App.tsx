import { Box } from "@mui/system";
import { invoke } from "@tauri-apps/api";
import Canvas from "./components/Canvas";
import Settings from "./components/Settings";

function App() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={{ height: "100%", width: "100%" }}>
        <Canvas />
      </Box>
      <Settings />
    </Box>
  );
}

export default App;
