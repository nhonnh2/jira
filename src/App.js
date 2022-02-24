import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateProject from './containers/client/CreateProject/CreateProject';
import MainBoard from './containers/client/MainBoard/MainBoard';
import ManagerProject from './containers/client/ManagerProject/ManagerProject';
import ProjectDetail from './containers/client/ProjectDetail/ProjectDetail';
import Login from './containers/shared/Auth/Login/Login';
import Register from './containers/shared/Auth/Register/Register';
import AuthLayout from './layouts/AuthLayout/AuthLayout';
import ClientLayout from './layouts/ClientLayout/ClientLayout';

function App() {
  return (
    <div className="App">
      <Switch>
        <ClientLayout isPrivate path="/" exact Component={MainBoard} />
        <ClientLayout isPrivate path="/mainboard" Component={MainBoard} />
        <ClientLayout
          isPrivate
          path="/createproject"
          Component={CreateProject}
        />
        <ClientLayout
          isPrivate
          path="/managerproject"
          Component={ManagerProject}
        />
        <ClientLayout
          isPrivate
          path="/projectdetail/:projectId"
          Component={ProjectDetail}
        />
        <AuthLayout path="/login" Component={Login} />
        <AuthLayout path="/register" Component={Register} />
      </Switch>
    </div>
  );
}

export default App;
