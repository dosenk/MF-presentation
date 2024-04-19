import { Box, List, Typography } from "@mui/material";
import Item from "../components/Item";

const CurrentStructure = ({ id }: { id: number }) => {
  return (
    <section key={`${id}`} data-background-color="#faf0e6">
      <section key={`${id}-0`}>
        <Typography variant="h3">Current Structure</Typography>
        <Box display="flex" gap="15px">
          <List>
            <Item sx={{ color: "#581790", fontWeight: "bold", fontSize: 49 }}>
              Tools:
            </Item>
            <Item sx={{ color: "#05286f", fontWeight: "bold" }}>NX</Item>
            <Item sx={{ color: "#05286f", fontWeight: "bold" }}>Rspack</Item>
            <Item sx={{ color: "#05286f", fontWeight: "bold" }}>Pnpm</Item>
          </List>
          <Box className="fragment">
            <img src="./assets/current_structure.png" />
          </Box>
        </Box>
      </section>

      <section key={`${id}-1`}>
        <img src="./assets/shell_with_apps.png" />
      </section>
    </section>
  );
};

export default CurrentStructure;
