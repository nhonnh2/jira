import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./containers/client/Home/Home";
import PageLogin from "./containers/shared/Auth/Login/PageLogin";
import ClientLayout from "./layouts/ClientLayout/ClientLayout";
import { history } from "./utils/history";
function App() {
  return (
    <div className="App" style={{ width: "100vw", height: "100vh" }}>
      <Router history={history}>
        <Switch>
          <ClientLayout path="/home" component={Home} />
          <Route path="/login" component={PageLogin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
