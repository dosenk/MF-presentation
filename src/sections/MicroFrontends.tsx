import { Box, Typography } from "@mui/material";

const MicroFrontends = ({ id }: { id: number }) => {
  return (
    <section key={id}>
      <section key={`${id}-0`}>
        <Typography variant="h2">Micro Frontends</Typography>
        <p>
          Front-end web development pattern in which a single application may be
          built from disparate builds
        </p>
      </section>
      <section key={`${id}-1`}>
        <Typography variant="h4">Monolithic Frontends</Typography>
        <Box>
          <img src="./assets/monolitFrontends.png" />
        </Box>
      </section>
      <section key={`${id}-2`}>
        <Typography color="aqua" variant="h4">
          Micro Frontends
        </Typography>
        <Box>
          <img src="./assets/microfrontend.png" />
        </Box>
      </section>
    </section>
  );
};

export default MicroFrontends;
