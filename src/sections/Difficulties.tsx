import { List, Typography } from "@mui/material";
import Item from "../components/Item";

const Difficulties = ({ id }: { id: number }) => {
  return (
    <section key={`${id}`} data-background-color="#708090">
      <section key={`${id}-0`}>
        <Typography variant="h2">Difficulties</Typography>

        <List>
          <Item>Eager</Item>
          <Item>a lot of packages (shared)</Item>
          <Item>App router (next.js)</Item>
          <Item>Webpack (slowly)</Item>
        </List>
      </section>

      <section key={`${id}-1`}>
        <Typography variant="h2">Vite</Typography>

        <List>
          <Item>Advantages: </Item>
          <Item>Faster than Webpack (Esbuild)</Item>
        </List>

        <List>
          <Item>Disadvantages: </Item>
          <Item>Issue with MF (singleton)</Item>
          <Item>dev mode issues (Esbuild)</Item>
        </List>
      </section>
    </section>
  );
};

export default Difficulties;
