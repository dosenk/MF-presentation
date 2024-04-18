import { List, Typography } from "@mui/material";
import Item from "../components/Item";

const CurrentStructure = ({ id }: { id: number }) => {
  return (
    <section key={`${id}`} data-background-color="#708090">
      <section key={`${id}-0`}>
        <Typography variant="h2">CurrentStructure</Typography>

        <List>
          <Item>
            <Typography variant="h2">Rspack:</Typography>
          </Item>
          <Item>NX</Item>
          <Item>Pnpm</Item>
        </List>
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
