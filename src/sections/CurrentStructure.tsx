import { Box, List, Typography } from "@mui/material";
import Item from "../components/Item";

const CurrentStructure = ({ id }: { id: number }) => {
  return (
    <section key={`${id}`} data-background-color="#708090">
      <section key={`${id}-0`}>
        <Typography variant="h2">Current Structure</Typography>
        <Box display="flex" gap="15px">
          <List>
            <Item sx={{ color: "#fff", fontWeight: "bold" }}>Tools:</Item>
            <Item sx={{ color: "#fffdd0", fontWeight: "bold" }}>NX</Item>
            <Item sx={{ color: "#fffdd0", fontWeight: "bold" }}>Rspack</Item>
            <Item sx={{ color: "#fffdd0", fontWeight: "bold" }}>Pnpm</Item>
          </List>
          <Box className="fragment">
            <img src="./assets/current_structure.png" />
          </Box>
        </Box>
      </section>

      <section key={`${id}-1`}>
        <Typography variant="h2">Monorepository management tools</Typography>

        <List>
          <Item>
            <Typography variant="h2">NX</Typography>
          </Item>
          <Item>Advantages: </Item>
          <Item>1</Item>
          <Item>2</Item>
          <Item>3</Item>
        </List>
      </section>

      <section key={`${id}-2`}>
        <Typography variant="h2">Bundler</Typography>

        <List>
          <Item>
            <Typography variant="h2">RSpack</Typography>
          </Item>
          <Item>Advantages: </Item>
          <Item>1</Item>
          <Item>2</Item>
          <Item>3</Item>
        </List>
      </section>

      <section key={`${id}-3`}>
        <Typography variant="h2">Package manager</Typography>

        <List>
          <Item>
            <Typography variant="h2">Pnpm</Typography>
          </Item>
          <Item>Advantages: </Item>
          <Item>1</Item>
          <Item>2</Item>
          <Item>3</Item>
        </List>
      </section>

      <section key={`${id}-3`}>
        <Typography variant="h2">Code:</Typography>

        <List>
          <Item>Image 1</Item>
          <Item>Image 1</Item>
          <Item>Image 1</Item>
        </List>
      </section>
    </section>
  );
};

export default CurrentStructure;
