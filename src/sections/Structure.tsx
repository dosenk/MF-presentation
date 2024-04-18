import { Box, List, Typography } from "@mui/material";
import Item from "../components/Item";

const Structure = ({ id }: { id: number }) => {
  return (
    <section key={`${id}`} data-background-color="#708090">
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
        <List>
          <Item>React</Item>
          <Item>React-Dom</Item>
          <Item>Mui</Item>
          <Item>emotion</Item>
        </List>

        <Box className="fragment">
          <img src="./assets/shared_packages.png" />
        </Box>
      </section>
    </section>
  );
};

export default Structure;
