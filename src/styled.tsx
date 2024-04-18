import { Box, styled } from "@mui/material";

export const BoldText = styled("span")({
  fontWeight: "bold",
});

export const CursiveText = styled(Box)({
  display: "inline",
  fontStyle: "oblique",
});
