import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import PageLogin from "./containers/shared/Auth/Login/PageLogin";
import ClientLayout from "./layouts/ClientLayout/ClientLayout";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <ClientLayout path="/login" Component={PageLogin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
