import { Box, List, Typography } from "@mui/material";
import hljs from "highlight.js";
import { useEffect } from "react";
import Item from "../components/Item";
const sx = { color: "#ec1616", fontWeight: "bold" };

const Difficulties = ({ id }: { id: number }) => {
  useEffect(() => {
    hljs.highlightAll();
    // hljs.registerLanguage("javascript", javascript);
    // hljs.registerLanguage("typescript", typescript);
  }, []);
  return (
    <section key={`${id}`} data-background-color="#f7e7ce">
      <section key={`${id}-0`}>
        <Typography variant="h3">Next module federation plugin</Typography>
        <a
          href="https://www.npmjs.com/package/@module-federation/nextjs-mf"
          target="_blank"
        >
          @module-federation/nextjs-mf
        </a>
      </section>

      <section key={`${id}-1`}>
        <Typography variant="h3">Plugins</Typography>
        <Box display="flex" gap={1} flexDirection="row" justifyContent="center">
          <img
            style={{ height: "380px", width: "700px" }}
            src="./assets/webpack_mf_plugin.png"
          />
          <img
            style={{ height: "380px", width: "700px" }}
            src="./assets/next_mf_plugin.png"
          />
        </Box>
      </section>

      <section key={`${id}-1`}>
        <p>Host MF config:</p>
        <img
          style={{ height: "580px" }}
          src="./assets/next_mf_config_host.png"
        />
        {/* <div dangerouslySetInnerHTML={{ __html: marked(NEXT_MF_HOST) }}></div> */}
      </section>

      <section key={`${id}-2`}>
        <p>Remote MF config:</p>
        <img
          style={{ height: "640px" }}
          src="./assets/next_mf_config_remote.png"
        />
        {/* <div dangerouslySetInnerHTML={{ __html: marked(NEXT_MF_HOST) }}></div> */}
      </section>

      <section key={`${id}-3`}>
        <Typography variant="h3">Issues with module federation</Typography>

        <List>
          <Item sx={sx}>
            Uncaught Error: Shared module is not available for eager consumption
          </Item>
          <Item sx={sx}>
            <a
              href="https://medium.com/@marvusm.mmi/webpack-module-federation-think-twice-before-sharing-a-dependency-18b3b0e352cb"
              target="_blank"
            >
              Tree shaking doesn't work properly when sharing dependencies
            </a>
          </Item>
          <Item sx={sx}>
            <a
              href="https://github.com/module-federation/universe/issues/1183#issuecomment-1672325234"
              target="_blank"
            >
              App router is not supported
            </a>
          </Item>
          <Item sx={sx}>Slow project build (Webpack)</Item>
        </List>
      </section>

      <section key={`${id}-4`}>
        <Typography variant="h2">Turborepo - NX</Typography>

        <img src="./assets/turborepo_nx.png" />
      </section>

      <section key={`${id}-5`}>
        <img src="./assets/webpack-vite.png" />
      </section>

      <section key={`${id}-6`}>
        <Typography variant="h2">Webpack - Vite</Typography>

        <img src="./assets/webpack_vite_compare.png" />
      </section>

      <section key={`${id}-7`}>
        <Typography variant="h2">Rspack</Typography>

        <img src="./assets/why_rspack.png" />
      </section>

      <section key={`${id}-8`}>
        <Typography variant="h4">
          It's still raw, but it's totally satisfying for us...
        </Typography>

        <Box display="flex" gap="15px">
          <img width="400px" src="./assets/rspack_ver.png" />
          <img width="600px" src="./assets/rspack_joke.png" />
        </Box>
      </section>
    </section>
  );
};

export default Difficulties;
