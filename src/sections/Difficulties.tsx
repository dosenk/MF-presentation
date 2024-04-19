import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { Box, List, ListItemIcon, Typography } from "@mui/material";
import hljs from "highlight.js";
import { useEffect } from "react";
import Item from "../components/Item";

const sx = { color: "#800020", fontWeight: "bold" };

const Difficulties = ({ id }: { id: number }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <section key={`${id}`} data-background-color="#f7e7ce">
      <section key={`${id}-0`}>
        <Typography variant="h3">Next module federation plugin</Typography>
        @module-federation/nextjs-mf{" "}
        <a
          href="https://www.npmjs.com/package/@module-federation/nextjs-mf"
          target="_blank"
        >
          [Link]
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

      <section key={`${id}-2`}>
        <Typography variant="h3">Host MF config:</Typography>
        <img
          style={{ height: "580px" }}
          src="./assets/next_mf_config_host.png"
        />
        {/* <div dangerouslySetInnerHTML={{ __html: marked(NEXT_MF_HOST) }}></div> */}
      </section>

      <section key={`${id}-3`}>
        <Typography variant="h3">Remote MF config:</Typography>
        <img
          style={{ height: "550px" }}
          src="./assets/next_mf_config_remote.png"
        />
        {/* <div dangerouslySetInnerHTML={{ __html: marked(NEXT_MF_HOST) }}></div> */}
      </section>

      <section key={`${id}-4`}>
        <Typography variant="h3">
          Issues with module federation{" "}
          <p style={{ color: "#555555", fontSize: 25 }}>
            @module-federation/nextjs-mf
          </p>
        </Typography>

        <List>
          <Item sx={sx}>
            <ListItemIcon>
              <DoubleArrowIcon />
            </ListItemIcon>
            Uncaught Error: Shared module is not available for eager consumption
          </Item>
          <Item sx={sx}>
            <ListItemIcon>
              <DoubleArrowIcon />
            </ListItemIcon>
            Tree shaking doesn't work properly when sharing dependencies{" "}
            <a
              href="https://medium.com/@marvusm.mmi/webpack-module-federation-think-twice-before-sharing-a-dependency-18b3b0e352cb"
              target="_blank"
            >
              [Link]
            </a>
          </Item>
          <Item sx={sx}>
            <ListItemIcon>
              <DoubleArrowIcon />
            </ListItemIcon>
            App router is not supported{" "}
            <a
              href="https://github.com/module-federation/universe/issues/1183#issuecomment-1672325234"
              target="_blank"
            >
              [Link]
            </a>
          </Item>
          <Item sx={sx}>
            <ListItemIcon>
              <DoubleArrowIcon />
            </ListItemIcon>
            Slow project build, HMR issues{" "}
            <span style={{ color: "#555555", fontSize: 25 }}>(Webpack)</span>
          </Item>
        </List>
      </section>

      <section key={`${id}-5`}>
        <Typography variant="h2">Turborepo - NX</Typography>

        <img src="./assets/turborepo_nx.png" />
      </section>

      <section key={`${id}-6`}>
        <Typography variant="h3">NX</Typography>

        <p style={{ width: "1100px", fontSize: 26 }}>
          Nx is a powerful open-source build system that provides tools and
          techniques for enhancing developer productivity, optimizing CI
          performance, and maintaining code quality
        </p>
        <Typography variant="h4">Core Features: </Typography>
        <List>
          <Item sx={{ color: "#783d19", fontSize: 26, fontWeight: "bold" }}>
            Run Tasks Efficiently: Nx runs tasks in parallel and orders the
            tasks based on the dependencies between them.
          </Item>
          <Item sx={{ color: "#05286f", fontSize: 26, fontWeight: "bold" }}>
            Cache Locally & Remotely: With local and remote caching, Nx prevents
            unnecessary re-runs of tasks, saving you valuable dev time.
          </Item>
          <Item sx={{ color: "#800020", fontSize: 26, fontWeight: "bold" }}>
            Automate Dependency Updates: if you leverage Nx plugins you gain
            additional features such as code generation and tools to
            automatically upgrade your codebase and dependencies.
          </Item>
          <Item sx={{ color: "#555555", fontSize: 26, fontWeight: "bold" }}>
            Make it Your Own: Nx is highly customizable and extensible.
            Fine-tune it by creating your own plugins and optionally share them
            with the community.
          </Item>
        </List>
      </section>

      <section key={`${id}-7`}>
        <Typography variant="h4">Pick Your Stack for NX</Typography>
        <img src="./assets/nx_stack.png" />
      </section>

      <section key={`${id}-8`}>
        <img height="650px" src="./assets/webpack-vite.png" />
      </section>

      <section key={`${id}-9`}>
        <Typography variant="h2">Webpack - Vite</Typography>

        <img src="./assets/webpack_vite_compare.png" />
      </section>

      <section key={`${id}-10`}>
        <Typography variant="h2">Rspack</Typography>

        <img src="./assets/why_rspack.png" />
      </section>

      <section key={`${id}-11`}>
        <Typography variant="h4">
          It's still raw, but it's totally satisfying for us...
        </Typography>
        <Typography
          textAlign="start"
          variant="h4"
          sx={{ color: "#93211b !important", pl: 5 }}
        >
          RSPACK ver. - 0.6.2
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
