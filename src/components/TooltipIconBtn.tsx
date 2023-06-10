import { FC } from "react";
import { IconButton, Tooltip } from "@mui/material";

type RNode = React.ReactNode | string;
type AlphaNumeric = string | number;

type TooltipIconButton = {
  icon: RNode;
  title: string;
  onClick: () => void;
  iconSize?: AlphaNumeric;
};

export const TooltipIconBtn: FC<TooltipIconButton> = ({
  icon,
  title,
  onClick,
  iconSize,
}) => {
  return (
    <Tooltip title={title}>
      <IconButton
        onClick={onClick}
        sx={{
          fontSize: iconSize,
        }}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
};
