import { Box, List, Typography } from "@mui/material";
import Item from "../components/Item";
import { BoldText } from "../styled";

const UsingTools = ({ id }: { id: number }) => {
  return (
    <section key={id}>
      <section key={`${id}-0`}>
        <Typography variant="h2">Monorepository management tools</Typography>
        <List>
          <Item>Lage</Item>
          <Item>Nx</Item>
          <Item>
            <BoldText>Turborepo</BoldText>
          </Item>
          <Item>Rush</Item>
        </List>
      </section>

      <section key={`${id}-3`}>
        <Typography variant="h2">Package manager</Typography>
        <List>
          <Item>npm</Item>
          <Item>Yarn</Item>
          <Item>
            <BoldText>Pnpm</BoldText>
          </Item>
        </List>
      </section>

      <section key={`${id}-4`}>
        <img src="./assets/pnpm.png" />
      </section>

      <section key={`${id}-1`}>
        <Typography variant="h3">Turborepo</Typography>
        <p className="fragment">
          Turborepo is a high-performance build system for JavaScript and
          TypeScript codebases.
        </p>
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
