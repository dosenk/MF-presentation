import { Box, List, Typography } from "@mui/material";
import Item from "../components/Item";

const itemSx = {
  fontSize: 50,
  fontWeight: "bold",
  p: 0,
  m: 0,
  color: "#CC5533",
};

const Structure = ({ id }: { id: number }) => {
  return (
    <section key={`${id}`} data-background-color="#E6E6FA">
      <section key={`${id}-0`}>
        <Typography variant="h2">Project structure</Typography>
        <img src="./assets/structure_mf.png" />
      </section>

      <section key={`${id}-1`}>
        <Typography variant="h2">Folder structure</Typography>
        <img src="./assets/folders.png" />
      </section>

      <section key={`${id}-2`}>
        <Typography variant="h2">Shared Packages</Typography>
        <Box display="flex" gap="50px">
          <List>
            <Item sx={itemSx}>React</Item>
            <Item sx={itemSx}>React-Dom</Item>
            <Item sx={itemSx}>Mui</Item>
            <Item sx={itemSx}>Emotion</Item>
          </List>

          <Box className="fragment">
            <img src="./assets/shared_packages.png" />
          </Box>
        </Box>
      </section>
    </section>
  );
};

export default Structure;
