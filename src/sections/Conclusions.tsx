import { List, Typography } from "@mui/material";
import Item from "../components/Item";

const Conclusions = ({ id }: { id: number }) => {
  return (
    <section key={`${id}`} data-background-color="#708090">
      <section key={`${id}-0`}>
        <Typography variant="h2">Conclusions</Typography>

        <List>
          <Item>1</Item>
          <Item>2</Item>
          <Item>3</Item>
          <Item>4</Item>
        </List>
      </section>
    </section>
  );
};

export default Conclusions;
