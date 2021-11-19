import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateProject from "./containers/client/CreateProject/CreateProject";
import MainBoard from "./containers/client/MainBoard/MainBoard";
import ManagerProject from "./containers/client/ManagerProject/ManagerProject";
import PageLogin from "./containers/shared/Auth/Login/PageLogin";
import ClientLayout from "./layouts/ClientLayout/ClientLayout";

function App() {
  return (
    <div className="App">
      <Switch>
        <ClientLayout path="/" exact Component={MainBoard} />
        <ClientLayout path="/mainboard" Component={MainBoard} />
        <ClientLayout path="/createproject" Component={CreateProject} />
        <ClientLayout path="/managerproject" Component={ManagerProject} />

        <Route path="/login" component={PageLogin} />
      </Switch>
    </div>
  );
}

export default App;
