import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { GitLabUserList } from "./gitLabUser/GitLabUserList";
import { GitLabUserCreate } from "./gitLabUser/GitLabUserCreate";
import { GitLabUserEdit } from "./gitLabUser/GitLabUserEdit";
import { GitLabUserShow } from "./gitLabUser/GitLabUserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"GitLabUserService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="GitLabUser"
          list={GitLabUserList}
          edit={GitLabUserEdit}
          create={GitLabUserCreate}
          show={GitLabUserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
