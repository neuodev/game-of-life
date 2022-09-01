import { Box, Grid, Slider, Typography } from "@mui/material";
import React from "react";

/**
 * Settigns should control
 * 1. Width & height of the universe ☑️
 * 2. Probability of being a live ☑️
 * 3. Reproduction speed
 * 4. Colors & images
 * 5. Pause & continue
 */
const Settings = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        width: "100%",
        backgroundColor: "#f9fafb",
        minHeight: "240px",
        alignContent: "center",
      }}
    >
      <Grid item xs={2}>
        <Box>
          <Typography variant="h6">Width</Typography>
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
          <Typography variant="h6">Height</Typography>
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
          <Typography variant="h6">Probability of being alive</Typography>
          <Slider
            defaultValue={0.5}
            valueLabelDisplay="auto"
            step={0.01}
            min={0}
            max={1}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Settings;
