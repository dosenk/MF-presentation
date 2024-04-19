import { Box, List, Typography } from "@mui/material";
import Item from "../components/Item";
import { BoldText } from "../styled";

const UsingTools = ({ id }: { id: number }) => {
  return (
    <section key={id}>
      <section key={`${id}-0`}>
        <Typography variant="h2">Monorepository management tools</Typography>
        <List>
          <Item disablePadding>
            <Box
              display="flex"
              gap={15}
              alignItems="center"
              justifyContent="space-between"
              width="500px"
            >
              <p>Lage</p> <img width="100px" src="./assets/logo_lage.png" />
            </Box>
          </Item>
          <Item disablePadding>
            <Box
              display="flex"
              gap={15}
              alignItems="center"
              justifyContent="space-between"
              width="500px"
            >
              <p>Nx</p> <img width="70px" src="./assets/logo_nx.png" />
            </Box>
          </Item>
          <Item disablePadding>
            <Box
              display="flex"
              gap={15}
              alignItems="center"
              justifyContent="space-between"
              width="500px"
            >
              <BoldText>Turborepo</BoldText>
              <img width="150px" src="./assets/logo_turborepo.png" />
            </Box>
          </Item>
          <Item disablePadding>
            <Box
              display="flex"
              gap={15}
              alignItems="center"
              justifyContent="space-between"
              width="500px"
            >
              <p>Rush </p>
              <img width="50px" src="./assets/logo_rush.png" />
            </Box>
          </Item>
        </List>
      </section>

      <section key={`${id}-1`}>
        <Typography variant="h3">Turborepo + Next.js = ❤</Typography>
        <Box className="fragment">
          <img src="./assets/next_vercel.png" />
        </Box>
      </section>

      <section key={`${id}-2`}>
        <Typography variant="h3">Turborepo</Typography>
        <p className="fragment">
          Turborepo is a high-performance build system for JavaScript and
          TypeScript codebases.
        </p>
        <Box className="fragment">
          <img src="./assets/turborepo.png" />
        </Box>
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
        <img height="750px" src="./assets/pnpm_npm_yarn.jpeg" />
      </section>
    </section>
  );
};

export default UsingTools;
