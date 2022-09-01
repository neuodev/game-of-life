import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  IconButton,
  Slider,
  Typography,
} from "@mui/material";
import PlayIcon from "../assets/play.png";

/**
 * Settigns should control
 * 1. Width & height of the universe ☑️
 * 2. Probability of being a live ☑️
 * 3. Reproduction speed ☑️
 * 4. Colors
 * 5. Pause & continue
 */
const Settings = () => {
  return (
    <Grid
      container
      spacing={4}
      sx={{
        width: "100%",
        backgroundColor: "#f9fafb",
        minHeight: "240px",
        alignContent: "center",
      }}
    >
      <Grid item xs={4}>
        <Box>
          <Typography variant="h6">Width 📏</Typography>
          <Slider
            aria-label="Temperature"
            defaultValue={30}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={10}
            max={110}
          />
        </Box>
        <Box>
          <Typography variant="h6">Height 📏</Typography>
          <Slider
            aria-label="Temperature"
            defaultValue={30}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={10}
            max={110}
          />
        </Box>
        <Box>
          <Typography variant="h6">Probability of being alive 🧬</Typography>
          <Slider
            defaultValue={0.5}
            valueLabelDisplay="auto"
            step={0.01}
            min={0}
            max={1}
          />
        </Box>
      </Grid>

      <Grid
        item
        xs={4}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconButton>
          <img src={PlayIcon} alt="start" />
        </IconButton>
      </Grid>

      <Grid item xs={4}>
        <Box>
          <Typography variant="h6">Reproduction speed 🚅</Typography>
          <Slider
            defaultValue={10}
            valueLabelDisplay="auto"
            step={2}
            min={0}
            max={100}
          />
        </Box>

        <Box>
          <Typography mb="8px" variant="h6">
            Colors
          </Typography>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Settings;
