import React, { useContext } from "react";
import { Box } from "@mui/system";
import { headeritem } from "./provider";

export default function Header() {
  const { title, fis } = useContext(headeritem);

  return (
    <Box className="h-14 w-full grid grid-cols-3 grid-rows-1">
      <div className={fis.nodeclass}>{fis.node}</div>
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <Box className=""></Box>
    </Box>
  );
}
