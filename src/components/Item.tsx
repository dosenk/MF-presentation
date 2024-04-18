import { ListItem, Typography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";

const Item = ({
  children,
  className = "fragment",
  ...props
}: { children: ReactNode } & TypographyProps) => {
  return (
    <ListItem className={className}>
      <Typography {...props}>{children}</Typography>
    </ListItem>
  );
};

export default Item;
