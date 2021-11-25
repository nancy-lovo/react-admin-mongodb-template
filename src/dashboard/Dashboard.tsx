import { MuiThemeProvider } from "@material-ui/core/styles";
import * as React from "react";
import { FC } from "react";

const theme = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
};

const Dashboard: FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <h2 style={{ marginLeft: "35px" }}>Admin Portal</h2>
    </MuiThemeProvider>
  );
};

export default Dashboard;
