import * as React from "react";
import { Admin, Resource } from "react-admin";
import authProvider from "./authProvider";
import { Dashboard } from "./dashboard";
import dataProvider from "./dataProvider";
import { fetchJson as httpClient } from "./httpClient";
import resources from "./resources";

const App = () => {
  const wrapper = React.createRef<HTMLDivElement>();

  return (
    <div ref={wrapper}>
      <Admin
        disableTelemetry
        title="Admin Portal"
        authProvider={authProvider}
        dataProvider={dataProvider(
          process.env.REACT_APP_SERVER_URL,
          httpClient
        )}
        dashboard={Dashboard}
      >
        <Resource name="resources" {...resources} />
      </Admin>
    </div>
  );
};

export default App;
