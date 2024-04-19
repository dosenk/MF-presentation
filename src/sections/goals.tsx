import { Box, List } from "@mui/material";
import Item from "../components/Item";
import { BoldText } from "../styled";

const Goals = ({ id }: { id: number }) => {
  return (
    <section key={`${id}`}>
      <section key={`${id}-0`}>
        <h2>Our goals</h2>
      </section>
      <section key={`${id}-1`}>
        <p>
          Develop a modular, partitioned application architecture capable of
          distributed deployment, providing scalability, fault tolerance and
          efficient resource utilisation within a mono-repository
        </p>
      </section>
      <section key={`${id}-2`}>
        <p>
          Choosing monorepository management tools for efficient caching and
          simplified project management that improves development workflow by
          optimized resource utilization and optimizing CI performance.
        </p>
        <List>
          {/* <Item variant="h3">
            SSR Frameworks (Next.js vs SvelteKit vs Nuxt vs Quasar vs Gatsby)
          </Item> */}
          {/* <Item variant="h3">JavaScript Frameworks (React, Angular, Vue)</Item> */}
          <img className="fragment" src="./assets/monorepo_tools.png" />
          {/* <Item variant="h3">Package managers (Npm, Yarn, Pnpm)</Item> */}
        </List>
      </section>
      <section key={`${id}-3`}>
        <p>
          Using <BoldText>module federation</BoldText> as a fundamental
          framework for application development, providing seamless integration
          of independently developed modules in distributed environments to
          optimise scalability, flexibility and interoperability in the system
          architecture.
        </p>
        <img className="fragment" src="./assets/mf_logo.png" />
      </section>
      <section key={`${id}-4`}>
        <p>
          Creating a library of reusable components that promotes code reuse,
          compatibility with other projects, and speeds up the development
          process
        </p>
        <img className="fragment" src="./assets/shared_ui_lib.png" />
      </section>
      <section key={`${id}-5`}>
        <Box>
          <p className="custom blur">
            Employing bundlers and build systems to accelerate local development
            processes and increase developer productivity by speeding up
            workflows
          </p>
        </Box>
        <List>
          <Item variant="h5" className="fragment">
            Webpack, Vite, Rspack, Esbuild, swr, Rollup
          </Item>
          <img className="fragment  " src="./assets/bundlers.png" />
        </List>
      </section>
    </section>
  );
};

export default Goals;
