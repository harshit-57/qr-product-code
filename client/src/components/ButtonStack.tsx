import * as React from "react";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { Download, Print, Share } from "@mui/icons-material";

export default function ButtonStack({ handleDownload, handlePrint }: any) {
  return (
    <Stack direction="row" spacing={2}>
      <IconButton color="primary" onClick={handleDownload}>
        <Download sx={{ width: "30px", height: "30px" }} />
      </IconButton>
      <IconButton color="primary" onClick={handlePrint}>
        <Print sx={{ width: "30px", height: "30px" }} />
      </IconButton>
    </Stack>
  );
}
