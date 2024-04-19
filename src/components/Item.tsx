import { ListItem, ListItemProps } from "@mui/material";
import { ReactNode } from "react";

const Item = ({
  children,
  className = "fragment",
  ...props
}: { children: ReactNode } & ListItemProps) => {
  return (
    <ListItem className={className} {...props}>
      <p>{children}</p>
    </ListItem>
  );
};

export default Item;
