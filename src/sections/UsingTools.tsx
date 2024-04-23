import { Box, List, ListItem, Typography } from "@mui/material";
import Item from "../components/Item";
import { BoldText } from "../styled";

const UsingTools = ({ id }: { id: number }) => {
  return (
    <section key={id}>
      <section key={`${id}-0`}>
        <Typography variant="h3">Monorepository management tools</Typography>

        <List>
          <Item disablePadding>
            <Box
              display="flex"
              gap={15}
              alignItems="center"
              justifyContent="space-between"
              width="500px"
              sx={{
                "&>p": {
                  margin: 0,
                },
              }}
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
              sx={{
                "&>p": {
                  margin: 0,
                },
              }}
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
              sx={{
                "&>p": {
                  margin: 0,
                },
              }}
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
              sx={{
                "&>p": {
                  margin: 0,
                },
              }}
            >
              <p>Rush </p>
              <img width="50px" src="./assets/logo_rush.png" />
            </Box>
          </Item>
          <Item>
            <a href="https://monorepo.tools/" target="_blank">
              - - -{">"} monorepo.tools
            </a>
          </Item>
        </List>
      </section>

      <section key={`${id}-1`}>
        <Typography variant="h3">NEXT.js</Typography>
        <List>
          <ListItem>
            <p style={{ width: "290px" }}>Enhanced optimization</p>
            <p style={{ fontSize: "20px", color: "gray" }}>
              Automatic Image, Font, and Script Optimizations for improved UX
              and Core Web Vitals.
            </p>
          </ListItem>
          <ListItem>
            <p style={{ width: "290px" }}>Fast rendering</p>
            <p style={{ fontSize: "20px", color: "gray" }}>
              Improved page loading speed due to pre-rendering and server-side
              rendering
            </p>
          </ListItem>
          <ListItem>
            <p style={{ width: "290px" }}>Better SEO</p>
            <p style={{ fontSize: "20px", color: "gray" }}>
              Allows for a more flexible approach to SEO optimization compared
              to SPA
            </p>
          </ListItem>
        </List>
      </section>

      <section key={`${id}-2`}>
        <Typography variant="h3">Turborepo + NEXT.js = ♡</Typography>
        <Box className="fragment">
          <img src="./assets/next_vercel.png" />
        </Box>
      </section>

      <section key={`${id}-3`}>
        <Typography variant="h3">Turborepo</Typography>
        <p className="fragment">
          Turborepo is a high-performance build system for JavaScript and
          TypeScript codebases.
        </p>
        <Box className="fragment">
          <img src="./assets/turborepo.png" />
        </Box>
      </section>

      <section key={`${id}-4`}>
        <Typography variant="h2">Package manager</Typography>
        <List>
          <Item>npm</Item>
          <Item>Yarn</Item>
          <Item>
            <BoldText>Pnpm</BoldText>
          </Item>
        </List>
      </section>

      <section key={`${id}-5`}>
        <img height="630px" src="./assets/pnpm_npm_yarn.jpeg" />
      </section>

      <section key={`${id}-5`}>
        <Typography variant="h4" p={0} m={0}>
          But how do we make it all work together and meet our goals!
        </Typography>
        <p style={{ fontSize: "25px", padding: 0, margin: 0 }}>
          ...providing scalability, fault tolerance and efficient resource
          utilisation...
        </p>
        <img height="550px" src="./assets/tools_without_mf.png" />
      </section>
    </section>
  );
};

export default UsingTools;
