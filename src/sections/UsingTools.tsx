import { Box, List, Typography } from "@mui/material";
import Item from "../components/Item";
import { BoldText } from "../styled";

const UsingTools = ({ id }: { id: number }) => {
  return (
    <section key={id} data-background-color="#0c1">
      <section key={`${id}-0`}>
        <Typography variant="h2">Monorepository management tools</Typography>
        <List>
          <Item variant="h3">Lage</Item>
          <Item variant="h3">Nx</Item>
          <Item variant="h3">
            <BoldText>Turborepo</BoldText>
          </Item>
          <Item variant="h3">Rush</Item>
        </List>
      </section>

      <section key={`${id}-3`}>
        <Typography variant="h2">Package manager</Typography>
        <List>
          <Item variant="h3">npm</Item>
          <Item variant="h3">Yarn</Item>
          <Item variant="h3">
            <BoldText>Pnpm</BoldText>
          </Item>
        </List>
      </section>

      <section key={`${id}-4`}>
        <img src="./assets/pnpm.png" />
      </section>

      <section key={`${id}-1`}>
        <Typography variant="h3">Turborepo</Typography>
        <Typography variant="h4" className="fragment">
          Turborepo is a high-performance build system for JavaScript and
          TypeScript codebases.
        </Typography>
        <Box className="fragment">
          <img src="./assets/turborepo.png" />
        </Box>
      </section>

      <section key={`${id}-2`}>
        <Typography variant="h3">Turborepo + Next.js = ❤</Typography>
        <Box className="fragment">
          <img src="./assets/next_vercel.png" />
        </Box>
      </section>
    </section>
  );
};

export default UsingTools;
