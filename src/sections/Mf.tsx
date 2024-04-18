import { List, Typography } from "@mui/material";
import { marked } from "marked";
import Item from "../components/Item";
import { HOST_APP_CODE, REMOTE_APP_CODE } from "../constants";
import { BoldText, CursiveText } from "../styled";

const Mf = ({ id }: { id: number }) => {
  return (
    <section key={`${id}`} data-background-color="#C6DABF">
      <section key={`${id}-0`}>
        <Typography variant="h2">Module federation</Typography>
        <p>Building MicroFrontends with Module Federation</p>
      </section>

      <section key={`${id}-1`}>
        <Typography variant="h4">Module federation</Typography>
        <List>
          <Item className="fragment" sx={{ fontSize: 27 }}>
            Multiple Several separate builds form a single application. These
            separate builds act like containers and can expose and consume code
            between builds, creating a single, unified application.
          </Item>
          <Item
            className="fragment"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <img height="450px" src="./assets/mf-example.png" />
          </Item>
        </List>
      </section>

      <section key={`${id}-2`}>
        <Typography variant="h4">Why we need module federation</Typography>
        <List>
          <Item className="fragment" fontSize={27}>
            Module federation allows a JavaScript application to load code from
            another application <BoldText>dynamically</BoldText> — in the
            process, sharing dependencies, if an application consuming a
            federated module does not have a dependency needed by the federated
            code — Webpack{" "}
            <CursiveText fontSize={20}>
              (or the bandler you're using)
            </CursiveText>{" "}
            will download the missing dependency from that federated build
            origin.
          </Item>
        </List>
      </section>

      <section key={`${id}-3`}>
        <Typography variant="h4">Remote Application:</Typography>

        {/* <Box className="fragment"> */}
        <div
          dangerouslySetInnerHTML={{ __html: marked(REMOTE_APP_CODE) }}
        ></div>
        {/* </Box> */}
      </section>

      <section key={`${id}-4`}>
        <Typography variant="h4">Host Application:</Typography>
        {/* <Box className="fragment"> */}
        <div dangerouslySetInnerHTML={{ __html: marked(HOST_APP_CODE) }}></div>
        {/* </Box> */}
      </section>
    </section>
  );
};

export default Mf;
