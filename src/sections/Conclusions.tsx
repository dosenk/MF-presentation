import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { List, ListItemIcon, Typography } from "@mui/material";
import Item from "../components/Item";
const Conclusions = ({ id }: { id: number }) => {
  return (
    <section key={`${id}`}>
      <section key={`${id}-0`}>
        <Typography variant="h2">Resources</Typography>

        <List>
          <Item disablePadding sx={{ fontSize: 27 }}>
            <ListItemIcon>
              <DoubleArrowIcon color="error" />
            </ListItemIcon>
            https://webpack.js.org/concepts/module-federation/
          </Item>
          <Item disablePadding sx={{ fontSize: 27 }}>
            <ListItemIcon>
              <DoubleArrowIcon color="error" />
            </ListItemIcon>
            https://module-federation.io/
          </Item>
          <Item disablePadding sx={{ fontSize: 27 }}>
            <ListItemIcon>
              <DoubleArrowIcon color="error" />
            </ListItemIcon>
            https://github.com/module-federation
          </Item>
          <Item disablePadding sx={{ fontSize: 27 }}>
            <ListItemIcon>
              <DoubleArrowIcon color="error" />
            </ListItemIcon>
            https://nx.dev/concepts/module-federation/module-federation-and-nx
          </Item>
          <Item disablePadding sx={{ fontSize: 27 }}>
            <ListItemIcon>
              <DoubleArrowIcon color="error" />
            </ListItemIcon>
            https://www.npmjs.com/package/@module-federation/nextjs-mf
          </Item>
          <Item disablePadding sx={{ fontSize: 27 }}>
            <ListItemIcon>
              <DoubleArrowIcon color="error" />
            </ListItemIcon>
            https://micro-frontends.org/
          </Item>
        </List>
      </section>
    </section>
  );
};

export default Conclusions;
